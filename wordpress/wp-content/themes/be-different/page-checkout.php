<?php
/**
 * Checkout page template.
 */

get_header();
?>
<main class="bd-checkout-page">
    <section class="bd-section">
        <span class="bd-eyebrow"><?php esc_html_e('Stripe Checkout', 'be-different'); ?></span>
        <h1><?php esc_html_e('Sicher zahlen. Schnell raus.', 'be-different'); ?></h1>
        <p class="bd-checkout-intro">
            <?php esc_html_e('Die finale WooCommerce Checkout-Seite nutzt den Checkout Block und Stripe für Karte, Apple Pay, Google Pay und weitere aktivierte Zahlungsarten.', 'be-different'); ?>
        </p>
        <div class="bd-checkout-shell">
            <?php
            while (have_posts()) :
                the_post();
                the_content();
            endwhile;
            ?>
        </div>
    </section>
</main>
<?php
get_footer();
