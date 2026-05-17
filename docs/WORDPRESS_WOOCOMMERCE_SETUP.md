# WordPress/WooCommerce Setup

## Ziel

be-different wird als WordPress/WooCommerce-Shop umgesetzt. WordPress steuert Content, Landingpages und Kampagnen. WooCommerce steuert Produkte, Varianten, Warenkorb, Checkout, Zahlungen, Steuern, Bestellungen und spaeter POD/Stock-Fulfillment.

## Lokale oder Staging-Installation

1. WordPress installieren.
2. WooCommerce installieren und aktivieren.
3. Theme-Ordner kopieren:

```text
wordpress/wp-content/themes/be-different
```

nach:

```text
wp-content/themes/be-different
```

4. Theme in WordPress aktivieren.
5. Menues fuer `Primary Menu` und `Footer Menu` anlegen.
6. Startseite als statische Seite setzen.

## WooCommerce Grundeinstellungen

- Shop-Land: Deutschland
- Waehrung: EUR
- Preise inklusive MwSt. anzeigen
- Versandzonen fuer Deutschland/EU anlegen
- Cart/Checkout Blocks verwenden
- Eigene Seiten `/cart/` und `/checkout/` in WooCommerce > Einstellungen > Erweitert zuweisen
- HPOS aktivieren bzw. pruefen
- Nur HPOS-kompatible Plugins einsetzen

## Produktstruktur

Kategorien:

- Statement Shirts
- Animal Art
- Custom Drops
- Limited Runs
- Accessories spaeter

Attribute:

- Groesse: S, M, L, XL, XXL
- Farbe: White, Black
- Produktionsart: Print-on-Demand, Stock, Limited
- Drop: Drop 01, Drop 02, Community Vote

Produkttyp:

- Variable Produkte fuer Shirts mit Groesse/Farbe
- Einfache Produkte fuer Sticker, Prints oder Accessoires
- Bundles spaeter ueber kompatibles WooCommerce Bundle-Plugin

## Pflicht-Plugins

- WooCommerce
- WooCommerce Stripe Payment Gateway oder WooPayments
- PayPal Payments
- Germanized for WooCommerce oder German Market
- SEO: Rank Math oder Yoast
- Cache/Performance: LiteSpeed Cache, WP Rocket oder Host-Cache
- Bildoptimierung: ShortPixel, Imagify oder Host-Optimierung
- Newsletter: MailPoet, Brevo oder Klaviyo
- Tracking: GA4/Tag Manager, Meta Pixel, TikTok for WooCommerce
- POD-Anbieter-Plugin je nach Anbieter

## Conversion-Regeln

- Mobile Checkout zuerst optimieren.
- Checkout als eigene WooCommerce-Seite fuehren.
- Hero immer mit Produkt, Preisanker und CTA.
- Produktdetailseite mit Sticky Add-to-Cart auf Mobile.
- Kostenloser Versand-Schwellenwert im Warenkorb zeigen.
- Drop-Status und Limited-Logik sichtbar machen.
- Newsletter als Drop Alert statt generischem Newsletter positionieren.

## Launch-Check

- Testkauf mit jeder Zahlungsart
- Versandmail und Bestellmail pruefen
- Steuer-/MwSt.-Anzeige pruefen
- Impressum, Datenschutz, AGB, Widerruf, Versand/Rueckgabe final
- Cookie Consent und Tracking Consent pruefen
- GA4, Meta und TikTok Events testen
- Mobile Pagespeed testen
- Backup und Staging-Prozess einrichten

## Offizielle Referenzen

- WooCommerce HPOS: https://developer.woocommerce.com/docs/features/high-performance-order-storage
- HPOS aktivieren: https://developer.woocommerce.com/docs/features/high-performance-order-storage/enable-hpos/
