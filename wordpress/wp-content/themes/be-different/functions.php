<?php
/**
 * be-different theme setup.
 */

if (! defined('ABSPATH')) {
    exit;
}

define('BD_THEME_VERSION', '1.0.0');

function bd_theme_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');

    register_nav_menus([
        'primary' => __('Primary Menu', 'be-different'),
        'footer' => __('Footer Menu', 'be-different'),
    ]);
}
add_action('after_setup_theme', 'bd_theme_setup');

function bd_enqueue_assets(): void
{
    wp_enqueue_style(
        'bd-theme',
        get_template_directory_uri() . '/assets/css/theme.css',
        [],
        BD_THEME_VERSION
    );

    wp_enqueue_script(
        'bd-theme',
        get_template_directory_uri() . '/assets/js/theme.js',
        [],
        BD_THEME_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'bd_enqueue_assets');

function bd_body_classes(array $classes): array
{
    $classes[] = 'bd-site';
    return $classes;
}
add_filter('body_class', 'bd_body_classes');

function bd_asset(string $path): string
{
    return esc_url(get_template_directory_uri() . '/assets/' . ltrim($path, '/'));
}

function bd_featured_products(int $limit = 4): array
{
    if (! class_exists('WooCommerce')) {
        return [];
    }

    $query = new WP_Query([
        'post_type' => 'product',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'tax_query' => [
            [
                'taxonomy' => 'product_visibility',
                'field' => 'name',
                'terms' => 'featured',
                'operator' => 'IN',
            ],
        ],
    ]);

    return $query->posts;
}

function bd_cart_count_fragment(array $fragments): array
{
    ob_start();
    ?>
    <span class="bd-cart-count"><?php echo esc_html(WC()->cart ? WC()->cart->get_cart_contents_count() : 0); ?></span>
    <?php
    $fragments['.bd-cart-count'] = ob_get_clean();
    return $fragments;
}
add_filter('woocommerce_add_to_cart_fragments', 'bd_cart_count_fragment');

remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

function bd_wc_wrapper_start(): void
{
    echo '<main class="bd-woocommerce"><section class="bd-section">';
}
add_action('woocommerce_before_main_content', 'bd_wc_wrapper_start', 10);

function bd_wc_wrapper_end(): void
{
    echo '</section></main>';
}
add_action('woocommerce_after_main_content', 'bd_wc_wrapper_end', 10);

/**
 * Keep electronic withdrawal notices auditable and send the legally required
 * acknowledgement to the address supplied by the customer.
 */
function bd_register_withdrawal_type(): void
{
    register_post_type('bd_withdrawal', [
        'labels' => [
            'name' => __('Online-Widerrufe', 'be-different'),
            'singular_name' => __('Online-Widerruf', 'be-different'),
        ],
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => 'woocommerce',
        'supports' => ['title', 'custom-fields'],
        'capability_type' => 'shop_order',
        'map_meta_cap' => true,
    ]);
}
add_action('init', 'bd_register_withdrawal_type');

function bd_register_withdrawal_route(): void
{
    register_rest_route('be-different/v1', '/withdrawal', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'bd_receive_withdrawal',
        'permission_callback' => '__return_true',
    ]);
}
add_action('rest_api_init', 'bd_register_withdrawal_route');

function bd_receive_withdrawal(WP_REST_Request $request)
{
    $honeypot = sanitize_text_field((string) $request->get_param('website'));
    if ($honeypot !== '') {
        return new WP_Error('bd_withdrawal_spam', __('Übermittlung abgelehnt.', 'be-different'), ['status' => 400]);
    }

    $remote_address = sanitize_text_field((string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
    $rate_key = 'bd_withdrawal_' . md5(wp_salt('nonce') . $remote_address);
    $attempts = (int) get_transient($rate_key);
    if ($attempts >= 5) {
        return new WP_Error('bd_withdrawal_rate', __('Bitte versuchen Sie es in einigen Minuten erneut.', 'be-different'), ['status' => 429]);
    }
    set_transient($rate_key, $attempts + 1, 10 * MINUTE_IN_SECONDS);

    $name = sanitize_text_field((string) $request->get_param('name'));
    $order = sanitize_text_field((string) $request->get_param('order'));
    $email = sanitize_email((string) $request->get_param('email'));
    $goods = sanitize_textarea_field((string) $request->get_param('goods'));
    $submitted_at = current_time('mysql', true);

    if ($name === '' || $order === '' || ! is_email($email) || $goods === '') {
        return new WP_Error('bd_withdrawal_invalid', __('Bitte füllen Sie alle Pflichtfelder korrekt aus.', 'be-different'), ['status' => 400]);
    }

    $withdrawal_id = wp_insert_post([
        'post_type' => 'bd_withdrawal',
        'post_status' => 'private',
        'post_title' => sprintf('Widerruf %s – %s', $order, $name),
        'meta_input' => [
            '_bd_name' => $name,
            '_bd_order' => $order,
            '_bd_email' => $email,
            '_bd_goods' => $goods,
            '_bd_submitted_at_utc' => $submitted_at,
        ],
    ], true);

    if (is_wp_error($withdrawal_id)) {
        return new WP_Error('bd_withdrawal_storage', __('Der Widerruf konnte nicht gespeichert werden. Bitte senden Sie ihn per E-Mail.', 'be-different'), ['status' => 500]);
    }

    $timestamp = wp_date('d.m.Y H:i:s T');
    $message = sprintf(
        "Online-Widerruf\n\nName: %s\nBestellnummer: %s\nE-Mail: %s\nWaren/Umfang: %s\nEingang: %s\nReferenz: %d",
        $name,
        $order,
        $email,
        $goods,
        $timestamp,
        $withdrawal_id
    );

    wp_mail('info@be-different.shop', sprintf('Online-Widerruf %s', $order), $message);
    $confirmation_sent = wp_mail(
        $email,
        sprintf('Eingangsbestätigung Ihres Widerrufs – %s', $order),
        "Wir bestätigen den Eingang Ihres Widerrufs.\n\n" . $message
    );

    return new WP_REST_Response([
        'received' => true,
        'reference' => (int) $withdrawal_id,
        'receivedAt' => $timestamp,
        'confirmationSent' => (bool) $confirmation_sent,
    ], 201);
}

function bd_withdrawal_shortcode(): string
{
    ob_start();
    ?>
    <section class="bd-withdrawal" id="vertrag-widerrufen" data-endpoint="<?php echo esc_url(rest_url('be-different/v1/withdrawal')); ?>">
        <h2><?php esc_html_e('Vertrag widerrufen', 'be-different'); ?></h2>
        <p><?php esc_html_e('Mit dieser Funktion können Sie einen online geschlossenen Vertrag widerrufen. Sie erhalten unverzüglich eine Eingangsbestätigung per E-Mail.', 'be-different'); ?></p>
        <form class="bd-withdrawal-form">
            <label><?php esc_html_e('Name', 'be-different'); ?><input name="name" autocomplete="name" required></label>
            <label><?php esc_html_e('Bestellnummer', 'be-different'); ?><input name="order" required></label>
            <label><?php esc_html_e('E-Mail für die Bestätigung', 'be-different'); ?><input name="email" type="email" autocomplete="email" required></label>
            <label><?php esc_html_e('Betroffene Waren oder Teil der Bestellung', 'be-different'); ?><textarea name="goods" rows="4" required></textarea></label>
            <label class="bd-honeypot" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
            <button type="submit"><?php esc_html_e('Widerruf bestätigen', 'be-different'); ?></button>
            <p class="bd-withdrawal-status" role="status" aria-live="polite"></p>
        </form>
    </section>
    <?php
    return (string) ob_get_clean();
}
add_shortcode('bd_withdrawal', 'bd_withdrawal_shortcode');
