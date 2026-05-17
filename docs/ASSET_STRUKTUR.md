# Asset-Struktur

Die Dateien wurden in drei Ebenen sortiert.

## Frontend-Assets

Pfad: `public/assets`

Diese Dateien werden im Build ausgeliefert und sind direkt per URL erreichbar. Hier liegen nur Bilder, die die aktuelle Oberflaeche wirklich verwendet.

## Asset-Bibliothek

Pfad: `assets/library`

Hier liegen weitere Produktbilder, Designs und Markenassets. Diese Dateien bleiben im Projekt, werden aber nicht automatisch in den Vite-Build kopiert.

## Quelldateien

Pfad: `assets/source-files`

Hier liegen PSD- und AI-Dateien fuer spaetere Bearbeitung.

## Regel fuer neue Assets

Neue finale Webbilder zuerst nach `assets/library` einsortieren. Erst wenn ein Bild im Frontend genutzt wird, nach `public/assets` kopieren und in `src/data/products.ts` referenzieren.

Aktuell wurden fuer die Shadow-Drop-Kollektion folgende Motive aus `assets/library/designs` als Web-Assets exportiert und in React sowie WordPress referenziert: `black-cat.png`, `elefant-muecke.png`, `01-whale-head-black-ink-on-white-background.png`, `guy-with-hoody-and-heart.png`, `young-girl-with-rope-transparent.png`, `black-ink.png`.
