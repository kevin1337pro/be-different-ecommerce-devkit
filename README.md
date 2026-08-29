# be-different E-Commerce Devkit

Mobile-first Shop-Prototyp für **be-different / Different Mind**. Der aktuelle Stand ist ein Vite/React-Frontend mit Startseite, Shop-Seite, Produktdetail, Warenkorb-Drawer, Checkout-Skeleton, FAQ, Consent-Steuerung, aktuellem Rechtstext-Hub und Drop-Alert.

Als primäre Wort-Bild-Marke wird das neue **Different Mind** Logo verwendet. Das Original liegt als Web-Asset unter `src/assets/different-mind-logo.png`; das Vektor-Signet liegt unter `public/assets/brand/different-mind-mark.svg`.

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
- Cookie-/Consent-Einstellungen ohne vorab geladenes Tracking
- GPSR-Hersteller- und Produktkennzeichnung in der Produktansicht
- Online-Widerruf nach § 356a BGB (React-Endpoint konfigurierbar, WordPress-REST-Implementierung enthalten)
- BFSG-Informationsseite und verbesserte Tastatur-Fokuszustände

## Produktive Widerrufsfunktion

Für die statische React-Version muss `VITE_WITHDRAWAL_ENDPOINT` auf einen HTTPS-Endpunkt gesetzt werden, der den Widerruf speichert und unverzüglich per E-Mail bestätigt. Ohne Endpoint öffnet die Vorschau nur einen E-Mail-Entwurf.

Im WordPress-Theme wird auf der Seite „Widerruf“ der Shortcode `[bd_withdrawal]` eingesetzt. Er nutzt den enthaltenen REST-Endpunkt und speichert Eingänge privat im WordPress-Backend.

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
6. Rechtstexte und die offenen Geschäftsentscheidungen aus der Launch-Checkliste final prüfen.
7. Tracking nur hinter der Consent-Schranke anbinden; Newsletter mit Double-Opt-in konfigurieren.
