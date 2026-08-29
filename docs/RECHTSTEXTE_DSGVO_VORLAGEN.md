# Recht, Datenschutz und Launch-Check

Stand: 29. August 2026

Diese Projektfassung bildet die bekannten Angaben aus `IMPRESSUM und Co, ohne Klammern.docx` ab und berücksichtigt zentrale Neuerungen für einen an Verbraucher gerichteten EU-Onlineshop. Sie ist eine technische und redaktionelle Arbeitsgrundlage, keine anwaltliche Einzelfallprüfung. Rechtstexte, Checkout, Plugins und tatsächliche Datenflüsse müssen vor Veröffentlichung deckungsgleich sein.

## Hinterlegte Anbieterangaben

- Kirlana Consulting Ltd. (Limited Company)
- Vertreten durch Kathrin Rölker
- 26 Anthipolochagou Georgiou M. Savva, Shop 1–2, 8201 Paphos, Cyprus
- Registergericht Nicosia, Registernummer HE 481328
- Umsatzsteuer-ID CY60229531E
- E-Mail info@be-different.shop
- Telefon +49 1520 6677415
- Datenschutzbeauftragter laut Quelldokument: Thomas Rölker
- Redaktionell verantwortlich, soweit erforderlich: Kevin Stumpe, c/o Kirlana Consulting Ltd.

Die Quelldatei nennt an einer Stelle `info@bedifferentbebetter.com`, sonst überwiegend `info@be-different.shop`. Im Projekt wird zur Konsistenz `info@be-different.shop` verwendet. Das muss vor Livegang bestätigt werden.

## Umgesetzte Rechteseiten

Die React-Vorschau enthält aktuell:

- Impressum nach § 5 DDG
- Datenschutzerklärung nach Art. 13/14 DSGVO und § 25 TDDDG
- AGB
- Widerrufsbelehrung und Muster-Widerrufsformular
- Versand-, Zahlungs- und Retoureninformationen
- Informationen zur Barrierefreiheit
- stets erreichbaren Link „Vertrag widerrufen“
- granulare Cookie-Einstellungen mit gleichwertiger Ablehnung

Die frühere EU-OS-Plattform wurde entfernt. Die zugrundeliegende EU-Verordnung wurde mit Wirkung zum 20. Juli 2025 aufgehoben.

## Online-Widerruf ab 2026

Für über eine Online-Benutzeroberfläche geschlossene Fernabsatzverträge sieht § 356a BGB eine hervorgehobene, ständig zugängliche Funktion „Vertrag widerrufen“ und anschließend „Widerruf bestätigen“ vor. Die Funktion muss Name, Vertragsidentifikation und elektronischen Bestätigungskanal erfassen. Nach Übermittlung ist unverzüglich eine Bestätigung auf einem dauerhaften Datenträger mit Inhalt, Datum und Uhrzeit zu senden.

Umsetzung im Projekt:

- React: Formular auf `#/widerruf`; produktive Übermittlung über `VITE_WITHDRAWAL_ENDPOINT`. Ohne Endpoint öffnet die Vorschau ausdrücklich nur einen E-Mail-Entwurf und behauptet keinen erfolgreichen Eingang.
- WordPress: REST-Endpunkt `be-different/v1/withdrawal`, private Speicherung, Admin-E-Mail und Eingangsbestätigung an den Verbraucher.
- WordPress-Shortcode für die Seite „Widerruf“: `[bd_withdrawal]`

Vor Livegang testen:

- erfolgreiche Speicherung und E-Mail-Zustellung
- korrekte Zeitzone, Datum und Uhrzeit
- Fehlerfall und alternative Kontaktmöglichkeit
- Schutz vor Spam und Missbrauch
- definierte Aufbewahrungs- und Löschfrist für Widerrufsdatensätze

## Datenschutzkonfiguration

Bekannte Empfänger bzw. Systeme:

- Hosting: ALL-INKL.COM – Neue Medien Münnich
- Shop: WordPress/WooCommerce
- Zahlung: Stripe und Klarna; Apple Pay/Google Pay soweit über den Zahlungsdienst verfügbar
- Fulfillment: Shirtigo GmbH
- Versand: je nach Bestellung DHL, DPD oder GLS

Vor Aktivierung zwingend vervollständigen:

- Newsletter-Anbieter und Double-Opt-in-Prozess
- genaue Gesellschaft des jeweiligen Zahlungsdienstes aus dem Händlervertrag
- Cookie-/Consent-Lösung samt vollständiger Liste aller Cookies, Speicherfristen und Anbieter
- tatsächlich aktive Analyse-, Marketing-, Chat-, Karten-, Video- und Social-Media-Dienste
- mögliche Drittlandübermittlungen, Transfergrundlage und ergänzende Schutzmaßnahmen
- Auftragsverarbeitungsverträge nach Art. 28 DSGVO
- Verzeichnis von Verarbeitungstätigkeiten, Löschkonzept, TOM, Berechtigungskonzept und Datenschutzvorfall-Prozess
- WooCommerce- und WordPress-Datenschutzexport/-löschung, Backups und Aufbewahrungsfristen

Optionale Scripts dürfen technisch erst nach Einwilligung geladen werden. Das WordPress-Theme speichert die Auswahl lokal und sendet das Ereignis `bd:consent`; Analyse- oder Marketing-Code muss dieses Signal respektieren. Die bloße Anzeige eines Banners ohne technische Blockierung genügt nicht.

## Checkout- und Preisprüfung

Vor Abgabe der Bestellung müssen insbesondere eindeutig sichtbar sein:

- wesentliche Produkteigenschaften und ausgewählte Varianten
- Gesamtpreis einschließlich Steuern
- konkrete Versandkosten und Lieferzeit
- Zahlungsart
- klare Korrekturmöglichkeit
- AGB und Widerrufsbelehrung in speicherbarer Form
- Button „zahlungspflichtig bestellen“ oder gleichbedeutend eindeutige Formulierung

Bei einer angekündigten Preisermäßigung ist der niedrigste Gesamtpreis der letzten 30 Tage anzugeben. Die Beispielwerte in `src/data/products.ts` sind als `lowestPrice30Days` modelliert, müssen aber aus echten Preisdaten gespeist und vor Veröffentlichung verifiziert werden.

## Produktrecht für Textilien

Für jedes Produktangebot müssen mindestens geprüft und gepflegt werden:

- Herstellername, Post- und E-Mail-Adresse
- bei Hersteller außerhalb der EU zusätzlich die verantwortliche Person in der EU
- Produktbild, Typ und eindeutige Produktkennung/SKU
- erforderliche Warn- und Sicherheitsinformationen in verständlicher Sprache
- Textilfaserzusammensetzung nach Textilkennzeichnungsrecht
- Pflegehinweise und produktspezifische Risiken
- Rückverfolgbarkeit, technische Dokumentation und Verfahren für Sicherheitsmeldungen/Rückrufe
- Registrierungs- und Systembeteiligungspflichten nach Verpackungsgesetz, einschließlich LUCID, soweit anwendbar

Die Vorschau zeigt den bekannten EU-Wirtschaftsakteur, Kontakt, Produktkennung und Material. Ob Kirlana Consulting Ltd. rechtlich Hersteller, Händler oder ein anderer Wirtschaftsakteur ist, muss anhand der Liefer- und Markenverträge mit Shirtigo final bestätigt werden.

## Barrierefreiheit

Seit 28. Juni 2025 fallen Dienstleistungen im elektronischen Geschäftsverkehr grundsätzlich unter das BFSG. Kleinstunternehmen, die Dienstleistungen anbieten, sind nach § 3 Abs. 3 BFSG ausgenommen, wenn die gesetzlichen Schwellen tatsächlich erfüllt sind. Die Ausnahme sollte dokumentiert statt nur vermutet werden.

Auch bei einer möglichen Ausnahme empfiehlt sich vor Livegang:

- Tastaturnavigation und sichtbare Fokuszustände
- Screenreader-Test von Navigation, Produktvarianten, Warenkorb und Checkout
- Prüfung bei 200 bis 400 Prozent Zoom und auf kleinen Displays
- Kontrastprüfung
- verständliche Labels, Fehlermeldungen und Statusmeldungen
- Textalternativen und korrekte Überschriftenstruktur
- Prüfung externer Zahlungsdialoge und WooCommerce-Plugins
- aktuelle zuständige Marktüberwachungsbehörde auf der Barrierefreiheitsseite

## Noch zu bestätigende Geschäftsentscheidungen

- Ist Kathrin Rölker die aktuell vertretungsberechtigte Person?
- Ist Thomas Rölker förmlich als Datenschutzbeauftragter bestellt und sind seine direkten Kontaktdaten zu veröffentlichen?
- Ist `info@be-different.shop` die verbindliche Datenschutz-, Support- und Widerrufsadresse?
- Bleibt die Erklärung bestehen, nicht an Verbraucherschlichtung teilzunehmen?
- Welche EU-Länder werden tatsächlich beliefert und welche Kosten gelten je Land?
- Trägt der Verbraucher nur die unmittelbaren tatsächlichen Rücksendekosten? Eine pauschale Formulierung „Rücksendekosten 5,25 €“ wurde bewusst nicht übernommen.
- Welche Zahlungsarten sind am Launch-Tag wirklich aktiv?
- Werden personalisierte Produkte angeboten? Print-on-Demand allein ist keine Personalisierung und schließt den Widerruf nicht automatisch aus.
- Erfüllt Kirlana Consulting Ltd. die BFSG-Kleinstunternehmensschwelle oder wird volle Konformität erklärt?

## Amtliche Kernquellen

- § 5 DDG: https://www.gesetze-im-internet.de/ddg/__5.html
- § 25 TDDDG: https://www.gesetze-im-internet.de/ttdsg/__25.html
- DSGVO: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- § 356a BGB: https://www.gesetze-im-internet.de/bgb/__356a.html
- Amtliches Muster der Widerrufsbelehrung: https://www.gesetze-im-internet.de/bgbeg/art_253anlage_1.html
- Amtliches Muster-Widerrufsformular: https://www.gesetze-im-internet.de/bgbeg/art_253anlage_2.html
- § 36 VSBG: https://www.gesetze-im-internet.de/vsbg/__36.html
- Preisangabenverordnung: https://www.gesetze-im-internet.de/pangv_2022/
- BFSG § 3 und § 14: https://www.gesetze-im-internet.de/bfsg/__3.html und https://www.gesetze-im-internet.de/bfsg/__14.html
- BFSG Anlage 3: https://www.gesetze-im-internet.de/bfsg/anlage_3.html
- GPSR, insbesondere Art. 19: https://eur-lex.europa.eu/eli/reg/2023/988/oj
- Aufhebung der EU-OS-Plattform: https://eur-lex.europa.eu/eli/reg/2024/3228/oj
- Datenschutzaufsicht Zypern: https://www.dataprotection.gov.cy/dataprotection/dataprotection.nsf/contact_en/contact_en
