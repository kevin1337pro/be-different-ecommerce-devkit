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
    <span><?php esc_html_e('Drop 01 ist offen', 'be-different'); ?></span>
    <span><?php esc_html_e('Be different - be better - be you', 'be-different'); ?></span>
    <span><?php esc_html_e('Print-on-Demand + Limited Runs', 'be-different'); ?></span>
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
