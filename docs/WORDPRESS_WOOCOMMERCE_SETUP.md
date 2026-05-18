# WordPress/WooCommerce Setup

## Ziel

be-different wird als WordPress/WooCommerce-Shop umgesetzt. WordPress steuert Content, Landingpages und Kampagnen. WooCommerce steuert Produkte, Varianten, Warenkorb, Checkout, Zahlungen, Steuern, Bestellungen und später POD/Stock-Fulfillment.

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
5. Menüs für `Primary Menu` und `Footer Menu` anlegen.
6. Startseite als statische Seite setzen.

## WooCommerce Grundeinstellungen

- Shop-Land: Deutschland
- Währung: EUR
- Preise inklusive MwSt. anzeigen
- Versandzonen für Deutschland/EU anlegen
- Cart/Checkout Blocks verwenden
- Eigene Seiten `/cart/` und `/checkout/` in WooCommerce > Einstellungen > Erweitert zuweisen
- HPOS aktivieren bzw. prüfen
- Nur HPOS-kompatible Plugins einsetzen

## Produktstruktur

Kategorien:

- Statement Shirts
- Animal Art
- Custom Drops
- Limited Runs
- Accessories später

Attribute:

- Größe: S, M, L, XL, XXL
- Farbe: White, Black
- Produktionsart: Print-on-Demand, Stock, Limited
- Drop: Drop 01, Drop 02, Community Vote

Produkttyp:

- Variable Produkte für Shirts mit Größe/Farbe
- Einfache Produkte für Sticker, Prints oder Accessoires
- Bundles später über kompatibles WooCommerce Bundle-Plugin

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
- Checkout als eigene WooCommerce-Seite führen.
- Hero immer mit Produkt, Preisanker und CTA.
- Produktdetailseite mit Sticky Add-to-Cart auf Mobile.
- Kostenloser Versand-Schwellenwert im Warenkorb zeigen.
- Drop-Status und Limited-Logik sichtbar machen.
- Newsletter als Drop Alert statt generischem Newsletter positionieren.

## Launch-Check

- Testkauf mit jeder Zahlungsart
- Versandmail und Bestellmail prüfen
- Steuer-/MwSt.-Anzeige prüfen
- Impressum, Datenschutz, AGB, Widerruf, Versand/Rückgabe final
- Cookie Consent und Tracking Consent prüfen
- GA4, Meta und TikTok Events testen
- Mobile Pagespeed testen
- Backup und Staging-Prozess einrichten

## Offizielle Referenzen

- WooCommerce HPOS: https://developer.woocommerce.com/docs/features/high-performance-order-storage
- HPOS aktivieren: https://developer.woocommerce.com/docs/features/high-performance-order-storage/enable-hpos/
