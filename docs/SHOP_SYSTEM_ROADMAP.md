# Shop-System Roadmap

Stand: 17.05.2026

## Entscheidung

Fuer be-different wird das Projekt auf **WordPress + WooCommerce** ausgerichtet.

Der empfohlene Stack:

**WordPress Block Theme + WooCommerce + HPOS + Cart/Checkout Blocks + Stripe/PayPal/Klarna + POD/Fulfillment-Integration + GA4/Meta/TikTok Tracking.**

## Warum WooCommerce/WordPress

- WordPress ist stark fuer Content, SEO, Landingpages, Blog, Kampagnen und schnelle redaktionelle Pflege.
- WooCommerce bildet Produkte, Varianten, Warenkorb, Checkout, Gutscheine, Steuern und Bestellungen nativ ab.
- High Performance Order Storage (HPOS) nutzt eigene Order-Tabellen und ist seit WooCommerce 8.2 fuer neue Installationen standardmaessig aktiv.
- WooCommerce passt gut zur be-different Roadmap: Start mit Print-on-Demand, spaeter Stock/Lagerverkaeufe, Bundles, Limited Drops und Community-Produkte.
- Das Theme kann die CI hart ausspielen, waehrend WooCommerce im Hintergrund die Shop-Logik uebernimmt.

## Zielarchitektur

1. **Theme:** Eigenes `be-different` WooCommerce Theme mit CI-Design, Drop-Funnel, Produktkarten und Landingpage-Komponenten.
2. **Commerce:** WooCommerce mit HPOS, modernen Cart/Checkout Blocks und sauberer Produktstruktur.
3. **Zahlung:** Stripe, PayPal, Apple Pay/Google Pay ueber Stripe, Klarna falls wirtschaftlich sinnvoll.
4. **Fulfillment:** POD-Anbieter anbinden, spaeter Lager-/Stock-Produkte parallel fuehren.
5. **Tracking:** GA4, Meta Pixel, TikTok Pixel, Consent Mode, serverseitige Events wenn moeglich.
6. **CRM:** Newsletter/Drop Alert ueber MailPoet, Brevo oder Klaviyo fuer WooCommerce.
7. **Recht:** Germanized oder German Market fuer Deutschland/EU Pflichtangaben.

## Umsetzung in Phasen

1. **Phase 1:** WordPress lokal/staging installieren, WooCommerce aktivieren, HPOS pruefen.
2. **Phase 2:** Eigenes Theme aktivieren und Startseite als Drop-Funnel bauen.
3. **Phase 3:** Kategorien, Attribute, Varianten, Groessentabellen und Produkttexte pflegen.
4. **Phase 4:** Cart/Checkout Blocks, Zahlung, Versand, Steuern und Rechtstexte konfigurieren.
5. **Phase 5:** POD/Fulfillment, Bestellmails, Rechnungen und Rueckgabeprozess testen.
6. **Phase 6:** Tracking, Newsletter, Warenkorbabbruch, Rabattcodes und A/B-Tests starten.

## Plugin-Basis

- WooCommerce
- WooPayments oder Stripe for WooCommerce
- PayPal Payments
- Germanized for WooCommerce oder German Market
- WooCommerce Blocks, falls nicht bereits im WooCommerce Core enthalten
- Site Kit oder GA4/Tag-Manager-Integration
- Meta Pixel for WordPress
- TikTok for WooCommerce
- MailPoet, Brevo oder Klaviyo
- POD-Anbindung je nach Anbieter
- Caching/Performance: LiteSpeed Cache, WP Rocket oder hostingeigene Loesung
- SEO: Rank Math oder Yoast SEO

## Technische Regeln

- HPOS aktiv lassen und nur HPOS-kompatible Plugins einsetzen.
- Cart und Checkout nicht mit Popups ueberladen.
- Mobile Checkout zuerst testen.
- Produktbilder als WebP/AVIF ausliefern.
- Rechtstexte und Preisangaben vor Launch final pruefen.
- Staging-System nutzen, bevor Plugins im Live-Shop aktualisiert werden.

## Offizielle Quellen

- WooCommerce HPOS: https://developer.woocommerce.com/docs/features/high-performance-order-storage
- WooCommerce HPOS aktivieren: https://developer.woocommerce.com/docs/features/high-performance-order-storage/enable-hpos/
