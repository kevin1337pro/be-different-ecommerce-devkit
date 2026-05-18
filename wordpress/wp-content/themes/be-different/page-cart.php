<?php
/**
 * Cart page template.
 */

get_header();
?>
<main class="bd-checkout-page">
    <section class="bd-section">
        <span class="bd-eyebrow"><?php esc_html_e('Warenkorb', 'be-different'); ?></span>
        <h1><?php esc_html_e('Prüfen. Pushen. Kaufen.', 'be-different'); ?></h1>
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
