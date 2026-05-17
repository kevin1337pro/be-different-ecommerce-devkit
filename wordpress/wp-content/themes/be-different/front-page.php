<?php
/**
 * Conversion-focused homepage.
 */

get_header();

$featured_products = bd_featured_products(4);
$hero_image = bd_asset('images/hero/website-background-2-background-for-an-t-shirt-shop-c8302e20-e774-4efd-b4bf-c61028bdaebe.jpg');
$hero_eyecatcher = bd_asset('images/hero/eyecatcher.jpeg');
$drop_image = bd_asset('images/brand/new-be-different-sammlung.png');
$shadow_collection = [
    [
        'title' => 'Cool Cat',
        'line' => 'Sonnenbrille, Street-Art, sofortiger Stopper.',
        'badge' => 'Eyecatcher',
        'image' => bd_asset('images/designs/black-cat.png'),
    ],
    [
        'title' => 'Elefant / Muecke',
        'line' => 'Gross gegen klein, leise gegen laut.',
        'badge' => 'Kontrastmotiv',
        'image' => bd_asset('images/designs/elefant-muecke.png'),
    ],
    [
        'title' => 'Whale Ink',
        'line' => 'Monochrom, schwer, premium auf Shirt.',
        'badge' => 'Tattoo Energy',
        'image' => bd_asset('images/designs/01-whale-head-black-ink-on-white-background.png'),
    ],
    [
        'title' => 'Hoodie Heart',
        'line' => 'Hartes Bild, weicher Kern.',
        'badge' => 'Limited',
        'image' => bd_asset('images/designs/guy-with-hoody-and-heart.png'),
    ],
    [
        'title' => 'Flower Kid',
        'line' => 'Still, emotional, anders als erwartet.',
        'badge' => 'Soft Rebel',
        'image' => bd_asset('images/designs/young-girl-with-rope-transparent.png'),
    ],
    [
        'title' => 'Black Ink Frame',
        'line' => 'Rohes Print-Element fuer Drop-Layouts.',
        'badge' => 'Graphic Tool',
        'image' => bd_asset('images/designs/black-ink.png'),
    ],
    [
        'title' => 'Guardian',
        'line' => 'Figur, Haltung, klare Kante.',
        'badge' => 'Statement',
        'image' => bd_asset('images/designs/guardian-of-weed.png'),
    ],
    [
        'title' => 'Catdog Core',
        'line' => 'Bestseller-Logik fuer den ersten Drop.',
        'badge' => 'Bestseller',
        'image' => bd_asset('images/designs/hip-hop-cat.png'),
    ],
];
?>

<main id="main">
    <section class="bd-hero" style="background-image: url('<?php echo esc_url($hero_image); ?>')" data-bd-hero-root>
        <div class="bd-hero-copy">
            <span class="bd-eyebrow"><?php esc_html_e('Street-Art Fashion / WooCommerce Drop 01', 'be-different'); ?></span>
            <div class="bd-hero-slider" data-bd-hero-slider>
                <article class="bd-hero-slide is-active" data-bd-bg="<?php echo esc_url($hero_image); ?>">
                    <h1><?php esc_html_e('Be different.', 'be-different'); ?><span><?php esc_html_e('Be better.', 'be-different'); ?></span><em><?php esc_html_e('Be you.', 'be-different'); ?></em></h1>
                    <p><?php esc_html_e('Kontrastreiche Statement-Shirts fuer Menschen, die nicht aussehen wollen wie der Feed von allen anderen.', 'be-different'); ?></p>
                </article>
                <article class="bd-hero-slide" data-bd-bg="<?php echo esc_url($hero_eyecatcher); ?>">
                    <h1><?php esc_html_e('Hund?', 'be-different'); ?><span><?php esc_html_e('Katze?', 'be-different'); ?></span><em><?php esc_html_e('Egal.', 'be-different'); ?></em></h1>
                    <p><?php esc_html_e('Das Motiv, das sofort stoppt: Street-Art-Kontrast, Humor und ein klarer Grund zum Klicken.', 'be-different'); ?></p>
                </article>
                <article class="bd-hero-slide" data-bd-bg="<?php echo esc_url($hero_image); ?>">
                    <h1><?php esc_html_e('Deine Idee.', 'be-different'); ?><span><?php esc_html_e('Unser Drop.', 'be-different'); ?></span><em><?php esc_html_e('Jetzt.', 'be-different'); ?></em></h1>
                    <p><?php esc_html_e('Motive aus Community-Ideen, Abstimmungen und Gegensaetzen. Erst testen, dann als Limited Run ausbauen.', 'be-different'); ?></p>
                </article>
            </div>
            <div class="bd-actions">
                <a class="bd-button bd-button-primary" href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : '#shop'); ?>">
                    <?php esc_html_e('Drop shoppen', 'be-different'); ?>
                </a>
                <a class="bd-button bd-button-secondary" href="#drop-alert">
                    <?php esc_html_e('Drop Alert sichern', 'be-different'); ?>
                </a>
            </div>
            <div class="bd-trust">
                <span><?php esc_html_e('WooCommerce Checkout', 'be-different'); ?></span>
                <span><?php esc_html_e('HPOS-ready', 'be-different'); ?></span>
                <span><?php esc_html_e('POD + Stock vorbereitet', 'be-different'); ?></span>
            </div>
            <div class="bd-hero-controls" aria-label="<?php esc_attr_e('Hero Slider', 'be-different'); ?>">
                <button type="button" class="is-active" data-bd-slide="0">01 Drop</button>
                <button type="button" data-bd-slide="1">02 Bestseller</button>
                <button type="button" data-bd-slide="2">03 Community</button>
            </div>
        </div>
    </section>

    <section class="bd-proof" aria-label="<?php esc_attr_e('Shop Vorteile', 'be-different'); ?>">
        <div><strong>50+</strong><span><?php esc_html_e('Designs als Drop-Ziel', 'be-different'); ?></span></div>
        <div><strong>3</strong><span><?php esc_html_e('Schritte bis zum Kauf', 'be-different'); ?></span></div>
        <div><strong>HPOS</strong><span><?php esc_html_e('Order-Performance', 'be-different'); ?></span></div>
        <div><strong>POD</strong><span><?php esc_html_e('Start ohne Lagerdruck', 'be-different'); ?></span></div>
    </section>

    <section class="bd-shadow-collection" id="collection">
        <div class="bd-shadow-copy">
            <span class="bd-eyebrow"><?php esc_html_e('Neue Kollektion', 'be-different'); ?></span>
            <h2><?php esc_html_e('Shadow Drop. Motive, die von allen Seiten kommen.', 'be-different'); ?></h2>
            <p><?php esc_html_e('Die schwarzen Ink-Designs werden als eigene Capsule ausgespielt: gross als Eyecatcher, schnell als Slider und direkt mit Produktentscheidung verbunden.', 'be-different'); ?></p>
            <div class="bd-shadow-highlights" aria-label="<?php esc_attr_e('Collection Highlights', 'be-different'); ?>">
                <span>8 Motive</span>
                <span>Animal Art</span>
                <span>Street Contrast</span>
            </div>
            <a class="bd-button bd-button-secondary" href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : '#shop'); ?>">
                <?php esc_html_e('Eyecatcher shoppen', 'be-different'); ?>
            </a>
        </div>
        <div class="bd-shadow-stage">
            <a class="bd-shadow-spotlight" href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : '#shop'); ?>">
                <span><?php echo esc_html($shadow_collection[0]['badge']); ?></span>
                <img src="<?php echo esc_url($shadow_collection[0]['image']); ?>" alt="<?php echo esc_attr($shadow_collection[0]['title']); ?>" loading="lazy">
                <strong><?php echo esc_html($shadow_collection[0]['title']); ?></strong>
            </a>

            <?php foreach (array_chunk($shadow_collection, 4) as $index => $row) : ?>
                <div class="bd-shadow-slider">
                    <div class="<?php echo esc_attr($index === 0 ? 'bd-shadow-track from-left' : 'bd-shadow-track from-right'); ?>">
                        <?php foreach (array_merge($row, $row) as $design) : ?>
                            <a class="bd-shadow-card" href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : '#shop'); ?>">
                                <img src="<?php echo esc_url($design['image']); ?>" alt="<?php echo esc_attr($design['title']); ?>" loading="lazy">
                                <span><?php echo esc_html($design['badge']); ?></span>
                                <strong><?php echo esc_html($design['title']); ?></strong>
                                <em><?php echo esc_html($design['line']); ?></em>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="bd-section" id="shop">
        <div class="bd-section-heading">
            <span class="bd-eyebrow"><?php esc_html_e('Shop the contradiction', 'be-different'); ?></span>
            <h2><?php esc_html_e('Nicht basic. Nicht leise.', 'be-different'); ?></h2>
        </div>

        <?php if ($featured_products) : ?>
            <ul class="products columns-4 bd-product-grid">
                <?php foreach ($featured_products as $post) : setup_postdata($post); ?>
                    <?php wc_get_template_part('content', 'product'); ?>
                <?php endforeach; wp_reset_postdata(); ?>
            </ul>
        <?php elseif (class_exists('WooCommerce')) : ?>
            <?php echo do_shortcode('[products limit="4" columns="4" visibility="visible"]'); ?>
        <?php else : ?>
            <div class="bd-placeholder-products">
                <p><?php esc_html_e('WooCommerce aktivieren und Produkte anlegen, dann erscheint hier das echte Produktgrid.', 'be-different'); ?></p>
            </div>
        <?php endif; ?>
    </section>

    <section class="bd-brand-section">
        <div>
            <span class="bd-eyebrow"><?php esc_html_e('Marken-DNA', 'be-different'); ?></span>
            <h2><?php esc_html_e('Gegensaetze verkaufen besser, wenn sie sofort verstanden werden.', 'be-different'); ?></h2>
            <p><?php esc_html_e('Be Different verbindet Street-Art, Humor, Widerspruch und tragbare Motive. WordPress liefert Content-Power, WooCommerce macht daraus einen Shop.', 'be-different'); ?></p>
        </div>
        <div class="bd-pillars">
            <article><strong><?php esc_html_e('Kreativ', 'be-different'); ?></strong><p><?php esc_html_e('Surreale Motive, Gegensaetze und Witz.', 'be-different'); ?></p></article>
            <article><strong><?php esc_html_e('Rebellisch', 'be-different'); ?></strong><p><?php esc_html_e('Street-Art-Energie und kritisches Denken.', 'be-different'); ?></p></article>
            <article><strong><?php esc_html_e('Persoenlich', 'be-different'); ?></strong><p><?php esc_html_e('Kleidung als Ausdruck von Individualitaet.', 'be-different'); ?></p></article>
        </div>
    </section>

    <section class="bd-section bd-stack">
        <div class="bd-section-heading">
            <span class="bd-eyebrow"><?php esc_html_e('WooCommerce Stack', 'be-different'); ?></span>
            <h2><?php esc_html_e('WordPress pflegt. WooCommerce verkauft.', 'be-different'); ?></h2>
        </div>
        <div class="bd-stack-grid">
            <article><span>CMS</span><strong>WordPress</strong><p><?php esc_html_e('Landingpages, Kampagnen, SEO und redaktionelle Kontrolle.', 'be-different'); ?></p></article>
            <article><span>Commerce</span><strong>WooCommerce + HPOS</strong><p><?php esc_html_e('Produkte, Varianten, Bestellungen und Order-Performance.', 'be-different'); ?></p></article>
            <article><span>Checkout</span><strong>Cart & Checkout Blocks</strong><p><?php esc_html_e('Moderner Cart-Flow fuer Mobile-first Conversion.', 'be-different'); ?></p></article>
            <article><span>Growth</span><strong>GA4 / Meta / TikTok</strong><p><?php esc_html_e('Tracking, Remarketing und Drop-Alert-Strecken.', 'be-different'); ?></p></article>
        </div>
    </section>

    <section class="bd-newsletter" id="drop-alert">
        <img src="<?php echo esc_url($drop_image); ?>" alt="<?php esc_attr_e('be-different Sammlung', 'be-different'); ?>" loading="lazy">
        <div>
            <span class="bd-eyebrow"><?php esc_html_e('Drop Alert', 'be-different'); ?></span>
            <h2><?php esc_html_e('Verpass keinen Drop.', 'be-different'); ?></h2>
            <p><?php esc_html_e('Neue Motive, Community-Votes, Limited Runs und Aktionen direkt in dein Postfach.', 'be-different'); ?></p>
            <?php echo do_shortcode('[mailpoet_form id="1"]'); ?>
        </div>
    </section>
</main>

<?php
get_footer();
