<?php
/**
 * be-different theme setup.
 */

if (! defined('ABSPATH')) {
    exit;
}

define('BD_THEME_VERSION', '0.1.0');

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
