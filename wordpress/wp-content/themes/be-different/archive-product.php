<?php
/**
 * WooCommerce shop archive.
 */

defined('ABSPATH') || exit;

get_header('shop');

$product_categories = get_terms([
    'taxonomy' => 'product_cat',
    'hide_empty' => true,
]);
?>

<main class="bd-shop-archive">
    <section class="bd-shop-hero">
        <div>
            <span class="bd-eyebrow"><?php esc_html_e('Eigene Shop-Seite', 'be-different'); ?></span>
            <h1><?php woocommerce_page_title(); ?><span><?php esc_html_e('the contradiction.', 'be-different'); ?></span></h1>
            <p><?php esc_html_e('Direkt kaufen, ohne Kampagnen-Umweg: Drops, Motive, Groessen, Farben und Quick Add in einer fokussierten WooCommerce-Storefront.', 'be-different'); ?></p>
        </div>
        <aside>
            <strong><?php esc_html_e('Launch-ready Storefront', 'be-different'); ?></strong>
            <span><?php esc_html_e('Produktarchiv, Sortierung, Kategorien und WooCommerce Loop sind fuer echte Produkte vorbereitet.', 'be-different'); ?></span>
        </aside>
    </section>

    <section class="bd-shop-shell">
        <aside class="bd-shop-filter-panel" aria-label="<?php esc_attr_e('Shop Filter', 'be-different'); ?>">
            <div class="bd-shop-filter-group">
                <strong><?php esc_html_e('Kategorien', 'be-different'); ?></strong>
                <div>
                    <a href="<?php echo esc_url(wc_get_page_permalink('shop')); ?>"><?php esc_html_e('Alle', 'be-different'); ?></a>
                    <?php if (! is_wp_error($product_categories)) : ?>
                        <?php foreach ($product_categories as $category) : ?>
                            <a href="<?php echo esc_url(get_term_link($category)); ?>"><?php echo esc_html($category->name); ?></a>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="bd-shop-filter-note">
                <?php esc_html_e('Naechster WooCommerce-Schritt: Attribute fuer Groesse, Farbe, Drop und Produktionsart anlegen und Filter-Plugin oder Block-Filter aktivieren.', 'be-different'); ?>
            </div>
        </aside>

        <section class="bd-shop-results">
            <?php if (woocommerce_product_loop()) : ?>
                <div class="bd-shop-toolbar">
                    <?php woocommerce_result_count(); ?>
                    <?php woocommerce_catalog_ordering(); ?>
                </div>

                <?php woocommerce_product_loop_start(); ?>

                <?php if (wc_get_loop_prop('total')) : ?>
                    <?php while (have_posts()) : ?>
                        <?php the_post(); ?>
                        <?php wc_get_template_part('content', 'product'); ?>
                    <?php endwhile; ?>
                <?php endif; ?>

                <?php woocommerce_product_loop_end(); ?>

                <?php woocommerce_pagination(); ?>
            <?php else : ?>
                <div class="bd-shop-empty">
                    <?php do_action('woocommerce_no_products_found'); ?>
                </div>
            <?php endif; ?>
        </section>
    </section>

    <section class="bd-shop-trust">
        <article><strong><?php esc_html_e('Drop-Produktion', 'be-different'); ?></strong><p><?php esc_html_e('Start ohne Lagerdruck, spaeter Limited Runs und Stock-Produkte.', 'be-different'); ?></p></article>
        <article><strong><?php esc_html_e('Stripe-ready', 'be-different'); ?></strong><p><?php esc_html_e('WooCommerce Checkout Blocks, Stripe, PayPal und Wallets vorbereitet.', 'be-different'); ?></p></article>
        <article><strong><?php esc_html_e('Mobile zuerst', 'be-different'); ?></strong><p><?php esc_html_e('Filter, Cart und Checkout sind auf schnelle Social-Traffic-Kaeufe ausgelegt.', 'be-different'); ?></p></article>
    </section>
</main>

<?php
get_footer('shop');
