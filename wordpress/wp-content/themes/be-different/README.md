# be-different WooCommerce Theme

Eigenes WordPress/WooCommerce Theme für den be-different Shop.

## Installation

1. Ordner `be-different` nach `wp-content/themes/` kopieren.
2. In WordPress unter **Design > Themes** aktivieren.
3. WooCommerce installieren und aktivieren.
4. Menüs für `Primary Menu` und `Footer Menu` anlegen.
5. Startseite auf eine statische Seite setzen, damit `front-page.php` genutzt wird.

## WooCommerce

Das Theme aktiviert:

- WooCommerce Theme Support
- Produktgalerie Zoom/Lightbox/Slider
- Warenkorb-Fragments für Cart Count
- WooCommerce Wrapper für Shop-/Produktseiten
- eigene Templates für Cart und Checkout

## Checkout und Stripe

Die finalen WooCommerce-Seiten sollten so gesetzt werden:

- Warenkorb: Seite mit WooCommerce Cart Block, Template `page-cart.php`
- Checkout: Seite mit WooCommerce Checkout Block, Template `page-checkout.php`

Stripe wird nicht im Theme selbst konfiguriert, sondern über WooCommerce > Einstellungen > Zahlungen. Details stehen in `docs/SEO_CHECKOUT_STRIPE_PLAN.md`.

## Assets

Die aktuellen Webbilder liegen unter:

`assets/images`

Neue finale Webbilder zuerst im Hauptprojekt unter `assets/library` sammeln und dann nur die benötigten Bilder ins Theme kopieren.
