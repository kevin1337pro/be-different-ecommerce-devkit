# be-different WooCommerce Theme

Eigenes WordPress/WooCommerce Theme fuer den be-different Shop.

## Installation

1. Ordner `be-different` nach `wp-content/themes/` kopieren.
2. In WordPress unter **Design > Themes** aktivieren.
3. WooCommerce installieren und aktivieren.
4. Menues fuer `Primary Menu` und `Footer Menu` anlegen.
5. Startseite auf eine statische Seite setzen, damit `front-page.php` genutzt wird.

## WooCommerce

Das Theme aktiviert:

- WooCommerce Theme Support
- Produktgalerie Zoom/Lightbox/Slider
- Warenkorb-Fragments fuer Cart Count
- WooCommerce Wrapper fuer Shop-/Produktseiten
- eigene Templates fuer Cart und Checkout

## Checkout und Stripe

Die finalen WooCommerce-Seiten sollten so gesetzt werden:

- Warenkorb: Seite mit WooCommerce Cart Block, Template `page-cart.php`
- Checkout: Seite mit WooCommerce Checkout Block, Template `page-checkout.php`

Stripe wird nicht im Theme selbst konfiguriert, sondern ueber WooCommerce > Einstellungen > Zahlungen. Details stehen in `docs/SEO_CHECKOUT_STRIPE_PLAN.md`.

## Assets

Die aktuellen Webbilder liegen unter:

`assets/images`

Neue finale Webbilder zuerst im Hauptprojekt unter `assets/library` sammeln und dann nur die benoetigten Bilder ins Theme kopieren.
