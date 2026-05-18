# SEO, Checkout und Stripe Plan

Stand: 17.05.2026

## SEO umgesetzt

Im statischen Prototyp:

- Meta Title
- Meta Description
- Keywords
- Canonical URL
- Robots Meta
- Theme Color
- OpenGraph Tags
- Twitter Card Tags
- Organization JSON-LD
- WebSite JSON-LD
- `robots.txt`
- `sitemap.xml`

Im finalen WordPress-Shop sollte ein SEO-Plugin wie Rank Math oder Yoast SEO die dynamischen Produkt-, Kategorie- und Sitemap-Daten übernehmen.

## Checkout als eigene Seite

Ja: Im finalen WooCommerce-Shop sollte der Checkout eine eigene Seite sein.

Empfohlene Seiten:

- `/cart/` mit WooCommerce Cart Block
- `/checkout/` mit WooCommerce Checkout Block

Grund:

- WooCommerce erwartet definierte Cart- und Checkout-Seiten.
- Der Checkout Block ist für den Kaufabschluss gebaut.
- Tracking, Payment-Gateways, Rechtstexte und Consent lassen sich sauberer auf einer dedizierten Checkout-Seite prüfen.

Im Theme vorbereitet:

- `wordpress/wp-content/themes/be-different/page-cart.php`
- `wordpress/wp-content/themes/be-different/page-checkout.php`

## Stripe Setup für WooCommerce

Plugin:

- WooPayments oder WooCommerce Stripe Payment Gateway

Empfehlung für Start:

- Stripe/WooCommerce Stripe Payment Gateway verwenden
- Test Mode aktivieren
- Webhook automatisch/laut Plugin-Anleitung einrichten
- Kreditkarte aktivieren
- Apple Pay / Google Pay / Link als Express Checkout aktivieren, wenn Plugin und Domain es erlauben
- Live Mode erst nach Testkäufen aktivieren

## Stripe Checkliste

1. Stripe Account anlegen/verifizieren.
2. WooCommerce Stripe Plugin installieren.
3. WooCommerce > Einstellungen > Zahlungen > Stripe verbinden.
4. Test Mode aktivieren.
5. Zahlungsarten aktivieren:
   - Karte
   - Apple Pay
   - Google Pay
   - Link
   - Klarna optional, falls wirtschaftlich sinnvoll
6. Webhooks prüfen.
7. Checkout Block testen.
8. Testkäufe mit Stripe-Testkarten durchführen.
9. Rückerstattung testen.
10. Live Mode aktivieren.

## Tracking Events

Mindestens messen:

- `view_item`
- `add_to_cart`
- `begin_checkout`
- `purchase`
- Newsletter/Drop Alert Signup

## Offizielle Quellen

- WooCommerce Checkout Block: https://woocommerce.com/document/woocommerce-store-editing/customizing-cart-and-checkout/checkout-block/
- WooCommerce Stripe Extension: https://woocommerce.com/document/stripe/
- WooCommerce Stripe Express Checkouts: https://woocommerce.com/document/stripe/setup-and-configuration/express-checkouts/
- Stripe Checkout Übersicht: https://docs.stripe.com/payments/checkout
