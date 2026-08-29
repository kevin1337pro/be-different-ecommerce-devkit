<?php
/**
 * Site footer.
 */
?>
<footer class="bd-footer">
    <div class="bd-footer-brand-block">
        <span class="bd-footer-logo-crop">
            <img src="<?php echo bd_asset('images/brand/different-mind-logo.png'); ?>" alt="Different Mind">
        </span>
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
        <a href="<?php echo esc_url(home_url('/impressum/')); ?>"><?php esc_html_e('Impressum', 'be-different'); ?></a>
        <a href="<?php echo esc_url(home_url('/datenschutz/')); ?>"><?php esc_html_e('Datenschutz', 'be-different'); ?></a>
        <a href="<?php echo esc_url(home_url('/agb/')); ?>"><?php esc_html_e('AGB', 'be-different'); ?></a>
        <a href="<?php echo esc_url(home_url('/widerruf/')); ?>"><?php esc_html_e('Widerruf', 'be-different'); ?></a>
        <a class="bd-withdrawal-link" href="<?php echo esc_url(home_url('/widerruf/#vertrag-widerrufen')); ?>"><?php esc_html_e('Vertrag widerrufen', 'be-different'); ?></a>
        <a href="<?php echo esc_url(home_url('/barrierefreiheit/')); ?>"><?php esc_html_e('Barrierefreiheit', 'be-different'); ?></a>
        <button class="bd-cookie-settings" type="button"><?php esc_html_e('Cookie-Einstellungen', 'be-different'); ?></button>
    </nav>
    <a class="bd-back-to-top" href="#top" aria-label="<?php esc_attr_e('Nach oben', 'be-different'); ?>">
        <span aria-hidden="true">↑</span>
    </a>
</footer>
<section class="bd-consent" hidden role="dialog" aria-labelledby="bd-consent-title">
    <div>
        <strong id="bd-consent-title"><?php esc_html_e('Privatsphäre-Einstellungen', 'be-different'); ?></strong>
        <p><?php esc_html_e('Notwendige Speicherungen sind immer aktiv. Analyse und Marketing werden erst nach Ihrer Einwilligung geladen.', 'be-different'); ?></p>
        <a href="<?php echo esc_url(home_url('/datenschutz/')); ?>"><?php esc_html_e('Datenschutzerklärung', 'be-different'); ?></a>
    </div>
    <div class="bd-consent-options">
        <label><input type="checkbox" checked disabled> <?php esc_html_e('Notwendig', 'be-different'); ?></label>
        <label><input type="checkbox" name="analytics"> <?php esc_html_e('Analyse', 'be-different'); ?></label>
        <label><input type="checkbox" name="marketing"> <?php esc_html_e('Marketing', 'be-different'); ?></label>
    </div>
    <div class="bd-consent-actions">
        <button type="button" data-consent="necessary"><?php esc_html_e('Nur notwendige', 'be-different'); ?></button>
        <button type="button" data-consent="selection"><?php esc_html_e('Auswahl speichern', 'be-different'); ?></button>
        <button type="button" data-consent="all"><?php esc_html_e('Alles akzeptieren', 'be-different'); ?></button>
    </div>
</section>
<?php wp_footer(); ?>
</body>
</html>
