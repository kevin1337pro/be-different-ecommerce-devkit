# be-different E-Commerce Devkit

Mobile-first Shop-Prototyp für die Marke **be-different**. Der aktuelle Stand ist ein schlankes Vite/React-Frontend mit Startseite, Shop-Seite, Produktdetail, Warenkorb-Drawer, Checkout-Skeleton, FAQ, DSGVO-/Rechtstext-Hub und Drop-Alert.

Die aktuelle Richtung folgt der Corporate Identity aus `assets/0001_06_01_2025_Be Different Corporate Identity.pdf`: Street-Art, Gegensätze, Schwarz/Weiss, Neon-Akzente und der Slogan **be different - be better - be you**.

Die Shop-Umsetzung ist auf **WordPress + WooCommerce** ausgerichtet. Der React/Vite-Prototyp bleibt als visuelle Referenz und schnelle Entwicklungsoberfläche erhalten; das WooCommerce-Theme-Scaffold liegt separat unter `wordpress/wp-content/themes/be-different`.

## Entwicklung

```bash
npm install
npm run dev
npm run build
```

Lokaler Server:

```text
http://localhost:5173/
```

GitHub Pages Preview:

```text
https://kevin1337pro.github.io/be-different-ecommerce-devkit/
```

Aktuelle Features:

- Hero Slider
- Announcement Ticker
- SEO-Basics für die statische Preview
- WooCommerce Theme-Scaffold
- Cart-/Checkout-Seitentemplates
- Stripe/WooCommerce Setup-Dokumentation
- Rechtstext- und DSGVO-Vorlagen in `docs/RECHTSTEXTE_DSGVO_VORLAGEN.md`

## Asset-Struktur

- `public/assets`: nur Bilder, die vom Frontend direkt geladen werden
- `assets/library`: sortierte Bildbibliothek für spätere Produkte und Kampagnen
- `assets/source-files`: bearbeitbare PSD/AI-Quelldateien

## Nächste Umsetzungsschritte

1. WordPress lokal oder auf Staging installieren.
2. WooCommerce aktivieren, HPOS prüfen und Cart/Checkout Blocks nutzen.
3. Theme `wordpress/wp-content/themes/be-different` in WordPress einbinden.
4. Produktdaten finalisieren: echte Namen, Preise, Varianten, Größentabelle.
5. Checkout, POD/Fulfillment und Zahlungsarten aktivieren.
6. Rechtstexte für Deutschland/EU final einpflegen.
7. Tracking vorbereiten: GA4, Meta Pixel, TikTok Pixel, Newsletter/Drop Alert.
