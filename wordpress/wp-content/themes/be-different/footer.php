<?php
/**
 * Site footer.
 */
?>
<footer class="bd-footer">
    <div class="bd-footer-brand-block">
        <strong>be-different</strong>
        <div class="bd-social-links" aria-label="<?php esc_attr_e('Social Media', 'be-different'); ?>">
            <?php
            $bd_social_links = [
                'Instagram' => ['url' => 'https://www.instagram.com/', 'label' => 'IG'],
                'TikTok' => ['url' => 'https://www.tiktok.com/', 'label' => 'TT'],
                'YouTube' => ['url' => 'https://www.youtube.com/', 'label' => 'YT'],
                'Facebook' => ['url' => 'https://www.facebook.com/', 'label' => 'FB'],
                'X' => ['url' => 'https://x.com/', 'label' => 'X'],
            ];

            foreach ($bd_social_links as $bd_social_name => $bd_social) :
                ?>
                <a class="bd-social-link" href="<?php echo esc_url($bd_social['url']); ?>" target="_blank" rel="noreferrer" aria-label="<?php echo esc_attr(sprintf(__('%s öffnen', 'be-different'), $bd_social_name)); ?>">
                    <span><?php echo esc_html($bd_social['label']); ?></span>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
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
