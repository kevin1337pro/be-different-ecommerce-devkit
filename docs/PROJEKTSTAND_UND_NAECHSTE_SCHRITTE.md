# Projektstand und naechste Schritte

Stand: 17.05.2026

## Was vorhanden ist

- Corporate-Identity-PDF wurde ausgewertet.
- Assets wurden sortiert:
  - `public/assets`: Webbilder fuer den Vite-Prototyp
  - `assets/library`: weitere Bildbibliothek
  - `assets/source-files`: AI/PSD-Quelldateien
- React/Vite-Prototyp fuer schnelle Live-Preview:
  - Mobile-first Startseite
  - Drop-Hero mit Slider
  - Produktgrid
  - Produktdetailbereich
  - Warenkorb-Drawer
  - Checkout-Skeleton
  - SEO-Basics fuer Live-Preview
  - FAQ
  - WooCommerce-Systemsektion
- WordPress/WooCommerce Theme-Scaffold:
  - `wordpress/wp-content/themes/be-different`
  - WooCommerce Support
  - Frontpage-Funnel
  - WooCommerce Wrapper
  - eigene Cart-/Checkout-Seitentemplates
  - Theme CSS/JS
- GitHub Pages Live-Preview ueber Branch `gh-pages`

## Was live geht

GitHub Pages deployed nur die statische Vite-Preview aus `dist`.

Das ist eine visuelle und conversion-fokussierte Vorschau, aber kein echter WooCommerce-Shop.

## Was fuer den echten Shop noch gebraucht wird

1. WordPress Hosting mit PHP, MySQL/MariaDB und SSL.
2. WordPress Installation oder Staging-System.
3. WooCommerce Installation.
4. Theme `wordpress/wp-content/themes/be-different` in WordPress aktivieren.
5. Produkte als echte WooCommerce-Produkte anlegen.
6. Produktattribute anlegen:
   - Groesse
   - Farbe
   - Drop
   - Produktionsart
7. Zahlungsanbieter konfigurieren:
   - Stripe oder WooPayments
   - PayPal
   - Klarna optional
8. Versandzonen, Steuern und MwSt.-Anzeige einrichten.
9. Rechtstexte:
   - Impressum
   - Datenschutz
   - AGB
   - Widerruf
   - Versand & Rueckgabe
   - Cookie Consent
10. Tracking:
    - GA4
    - Meta Pixel
    - TikTok Pixel
    - Consent Mode
11. POD/Fulfillment-Anbieter anbinden.
12. Testkauf mit jeder Zahlungsart durchfuehren.

Details zu SEO, Checkout und Stripe stehen in `docs/SEO_CHECKOUT_STRIPE_PLAN.md`.

## Technische Hinweise

- WooCommerce HPOS aktiv lassen.
- Nur HPOS-kompatible Plugins einsetzen.
- Cart/Checkout Blocks bevorzugen.
- Mobile Checkout vor Desktop testen.
- Bilder vor Livegang als WebP/AVIF optimieren.
- GitHub Pages ersetzt kein WordPress Hosting.
