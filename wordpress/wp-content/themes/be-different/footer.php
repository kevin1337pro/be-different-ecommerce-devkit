<?php
/**
 * Site footer.
 */
?>
<footer class="bd-footer">
    <strong>be-different</strong>
    <nav aria-label="<?php esc_attr_e('Footer Navigation', 'be-different'); ?>">
        <?php
        wp_nav_menu([
            'theme_location' => 'footer',
            'container' => false,
            'fallback_cb' => false,
            'items_wrap' => '%3$s',
        ]);
        ?>
    </nav>
</footer>
<?php wp_footer(); ?>
</body>
</html>
