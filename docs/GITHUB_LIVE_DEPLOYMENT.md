# GitHub und Live Deployment

## Repository

Das Projekt wird als GitHub-Repository veroeffentlicht.

Geplanter Name:

```text
be-different-ecommerce-devkit
```

## Live-Preview

Die Live-Preview laeuft ueber GitHub Pages und deployed den statischen Vite-Prototyp aus dem Branch `gh-pages`.

Geplante URL:

```text
https://kevin1337pro.github.io/be-different-ecommerce-devkit/
```

## Wichtig

Die GitHub-Pages-Seite ist **nicht** der finale WooCommerce-Shop.

Sie zeigt:

- Designrichtung
- Conversion-Funnel
- Produktlogik als Prototyp
- WooCommerce-Zielarchitektur

Der finale Shop braucht:

- WordPress Hosting
- WooCommerce
- PHP/MySQL
- Zahlungsanbieter
- Rechtstexte
- Fulfillment/POD

## Deployment Ablauf

1. Projektcode liegt auf `main`.
2. `GITHUB_PAGES=true npm run build` baut die statische Preview.
3. Inhalt aus `dist` wird in den Branch `gh-pages` gepusht.
4. GitHub Pages ist auf Branch `gh-pages` und Pfad `/` konfiguriert.
