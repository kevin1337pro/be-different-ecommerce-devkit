<?php
/**
 * Site header.
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="bd-announcement">
    <div class="bd-ticker-track" aria-label="<?php esc_attr_e('Shop Nachrichten', 'be-different'); ?>">
        <?php
        $bd_ticker_items = [
            __('Drop 01 ist offen', 'be-different'),
            __('Be different - be better - be you', 'be-different'),
            __('Free shipping ab 75 EUR', 'be-different'),
            __('WooCommerce-ready', 'be-different'),
            __('Print-on-Demand + Limited Runs', 'be-different'),
            __('Neue Motive per Community Vote', 'be-different'),
        ];

        foreach (array_merge($bd_ticker_items, $bd_ticker_items) as $bd_ticker_item) :
            ?>
            <span><?php echo esc_html($bd_ticker_item); ?></span>
        <?php endforeach; ?>
    </div>
</div>
<header class="bd-header">
    <a class="bd-brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php bloginfo('name'); ?>">
        <span>be</span><strong>different</strong>
    </a>

    <nav class="bd-nav" aria-label="<?php esc_attr_e('Hauptnavigation', 'be-different'); ?>">
        <?php
        wp_nav_menu([
            'theme_location' => 'primary',
            'container' => false,
            'fallback_cb' => false,
            'items_wrap' => '%3$s',
        ]);
        ?>
    </nav>

    <div class="bd-header-actions">
        <?php if (class_exists('WooCommerce')) : ?>
            <a class="bd-cart-link" href="<?php echo esc_url(wc_get_cart_url()); ?>" aria-label="<?php esc_attr_e('Warenkorb', 'be-different'); ?>">
                <?php esc_html_e('Cart', 'be-different'); ?>
                <span class="bd-cart-count"><?php echo esc_html(WC()->cart ? WC()->cart->get_cart_contents_count() : 0); ?></span>
            </a>
        <?php endif; ?>
        <button class="bd-menu-toggle" type="button" aria-expanded="false" aria-controls="bd-mobile-nav">
            <?php esc_html_e('Menu', 'be-different'); ?>
        </button>
    </div>
</header>
<nav id="bd-mobile-nav" class="bd-mobile-nav" aria-label="<?php esc_attr_e('Mobile Navigation', 'be-different'); ?>">
    <?php
    wp_nav_menu([
        'theme_location' => 'primary',
        'container' => false,
        'fallback_cb' => false,
        'items_wrap' => '%3$s',
    ]);
    ?>
</nav>
