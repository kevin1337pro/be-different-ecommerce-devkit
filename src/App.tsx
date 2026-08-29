import { type FormEvent, useEffect, useMemo, useState } from 'react';
import {
  ArrowUp,
  BadgePercent,
  Camera,
  Check,
  ChevronRight,
  CreditCard,
  Eye,
  Flame,
  Heart,
  LockKeyhole,
  Menu,
  MessageCircle,
  Minus,
  Music2,
  PackageCheck,
  Plus,
  Play,
  Radio,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Trash2,
  Truck,
  X,
  Zap,
  Users,
} from 'lucide-react';
import {
  brandDropImage,
  brandPillars,
  campaignHeroImage,
  campaignIdeas,
  campaignPosters,
  dropDesigns,
  faqItems,
  heroImage,
  heroEyecatcherImage,
  Product,
  products,
  proofPoints,
  shadowCollection,
  shopStack,
} from './data/products';
import earlyAccessImage from '../assets/image_pop_up_1.png';
import differentMindLogo from './assets/different-mind-logo.png';

const categories = ['Alle', 'Statement Shirts', 'Animal Art', 'Custom Drops'] as const;
const shopCategories = ['Alle', 'Statement Shirts', 'Animal Art', 'Custom Drops', 'Shadow Drop'] as const;
const shopColors = ['Alle', 'White', 'Black'] as const;
const shopSizes = ['Alle', 'S', 'M', 'L', 'XL', 'XXL'] as const;
const shopSortOptions = [
  { value: 'featured', label: 'Empfohlen' },
  { value: 'newest', label: 'Neueste Drops' },
  { value: 'price-low', label: 'Preis aufsteigend' },
  { value: 'price-high', label: 'Preis absteigend' },
  { value: 'rating', label: 'Beste Bewertung' },
] as const;
const freeShippingThreshold = 75;
const tickerItems = [
  'Drop 01 ist offen',
  'Be different - be better - be you',
  `Free shipping ab ${formatPrice(freeShippingThreshold)}`,
  'WooCommerce-Fokus',
  'Print-on-Demand + Limited Runs',
  'Neue Motive per Community Vote',
];
const heroSlides = [
  {
    kicker: 'Street-Art Fashion / WooCommerce Drop 01',
    top: 'Be different.',
    highlight: 'Be better.',
    signature: 'Be you.',
    copy:
      'Kontrastreiche Statement-Shirts für Menschen, die nicht aussehen wollen wie der Feed von allen anderen.',
    product: products[0],
    background: heroImage,
  },
  {
    kicker: 'Bestseller / Catdog Core',
    top: 'Hund?',
    highlight: 'Katze?',
    signature: 'Egal.',
    copy:
      'Das Motiv, das sofort stoppt: Street-Art-Kontrast, Humor und ein klarer Grund zum Klicken.',
    product: products[0],
    background: heroEyecatcherImage,
  },
  {
    kicker: 'Community Vote / Custom Drops',
    top: 'Deine Idee.',
    highlight: 'Unser Drop.',
    signature: 'Jetzt.',
    copy:
      'Motive aus Community-Ideen, Abstimmungen und Gegensätzen. Erst testen, dann als Limited Run ausbauen.',
    product: products[3],
    background: heroImage,
  },
];
const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: Camera },
  { label: 'TikTok', href: 'https://www.tiktok.com/', Icon: Music2 },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: Play },
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: Users },
  { label: 'X', href: 'https://x.com/', Icon: MessageCircle },
];
const legalPages = [
  {
    slug: 'impressum',
    label: 'Impressum',
    kicker: 'Pflichtangaben nach § 5 DDG',
    title: 'Impressum',
    intro: 'Anbieterkennzeichnung für den Online-Shop be-different. Stand: 29. August 2026.',
    blocks: [
      {
        title: 'Anbieter und Vertragspartner',
        items: [
          'Kirlana Consulting Ltd. (Limited Company)',
          'Vertreten durch: Kathrin Rölker',
          '26 Anthipolochagou Georgiou M. Savva, Shop 1–2, 8201 Paphos, Cyprus',
        ],
      },
      {
        title: 'Kontakt',
        items: ['E-Mail: info@be-different.shop', 'Telefon: +49 1520 6677415'],
      },
      {
        title: 'Register und Umsatzsteuer',
        items: [
          'Registergericht: Nicosia, Cyprus',
          'Registernummer: HE 481328',
          'Umsatzsteuer-Identifikationsnummer: CY60229531E',
        ],
      },
      {
        title: 'Redaktionell verantwortlich',
        items: [
          'Soweit journalistisch-redaktionelle Inhalte angeboten werden: Kevin Stumpe',
          'c/o Kirlana Consulting Ltd., Anschrift wie oben',
        ],
      },
      {
        title: 'Verbraucherstreitbeilegung',
        items: [
          'Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          'Die frühere EU-Plattform zur Online-Streitbeilegung wurde am 20. Juli 2025 eingestellt; ein OS-Link wird deshalb nicht mehr geführt.',
        ],
      },
    ],
  },
  {
    slug: 'datenschutz',
    label: 'Datenschutz',
    kicker: 'DSGVO + TDDDG',
    title: 'Datenschutzerklärung',
    intro: 'Informationen nach Art. 13 und 14 DSGVO. Stand: 29. August 2026.',
    blocks: [
      {
        title: '1. Verantwortlicher',
        items: [
          'Kirlana Consulting Ltd., 26 Anthipolochagou Georgiou M. Savva, Shop 1–2, 8201 Paphos, Cyprus',
          'E-Mail: info@be-different.shop',
          'Datenschutzbeauftragter: Thomas Rölker',
        ],
      },
      {
        title: '2. Hosting und Logfiles',
        items: [
          'Hosting-Anbieter: ALL-INKL.COM – Neue Medien Münnich, Deutschland.',
          'Verarbeitet werden insbesondere IP-Adresse, Datum, aufgerufene URL, Referrer, Browser-/Geräteinformationen und Fehlermeldungen.',
          'Zwecke: Auslieferung, Systemsicherheit, Fehleranalyse und Missbrauchserkennung; Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.',
          'Server-Logfiles werden regelmäßig nach 14 Tagen gelöscht, sofern kein Sicherheitsvorfall eine längere Aufbewahrung erfordert.',
        ],
      },
      {
        title: '3. Bestellungen, Konto und Support',
        items: [
          'Daten: Name, Rechnungs- und Lieferadresse, Kontaktdaten, Warenkorb, Bestellung, Zahlungsstatus, Retouren und Kommunikation.',
          'Vertragsabwicklung erfolgt nach Art. 6 Abs. 1 lit. b DSGVO; gesetzliche Aufbewahrung nach lit. c; Missbrauchsabwehr nach lit. f.',
          'Shop-System: WordPress/WooCommerce. Ohne erforderliche Pflichtdaten ist eine Bestellung nicht möglich.',
          'Steuer- und handelsrechtlich relevante Daten werden entsprechend der gesetzlichen Fristen aufbewahrt und danach gelöscht oder gesperrt.',
        ],
      },
      {
        title: '4. Zahlung, Versand und Fulfillment',
        items: [
          'Aktive Zahlungsdienste: Stripe und Klarna; Apple Pay und Google Pay können über den gewählten Zahlungsdienst angeboten werden.',
          'Zahlungsdaten verarbeitet der Zahlungsdienst direkt. Wir erhalten regelmäßig nur Status-, Identifikations- und Abrechnungsdaten, keine vollständigen Kartendaten.',
          'Versand kann über DHL, DPD oder GLS erfolgen; Print-on-Demand und Fulfillment erfolgen über Shirtigo GmbH.',
          'Die Übermittlung ist auf Zahlung, Produktion, Lieferung, Betrugsprävention und Rückabwicklung beschränkt; Art. 6 Abs. 1 lit. b, c oder f DSGVO.',
        ],
      },
      {
        title: '5. Kontakt, Kooperationen und Newsletter',
        items: [
          'Anfragen und Bewerbungen werden zur Bearbeitung nach Art. 6 Abs. 1 lit. b oder f DSGVO verarbeitet und anschließend gelöscht, soweit keine Pflicht oder Einwilligung fortbesteht.',
          'Newsletter und Early Access werden nur mit Einwilligung und Double-Opt-in nach Art. 6 Abs. 1 lit. a DSGVO versendet; Widerruf ist jederzeit möglich.',
          'Einwilligungsnachweise können zur Rechtsverteidigung nach Art. 6 Abs. 1 lit. f DSGVO gespeichert werden.',
          'Vor Aktivierung ist der ausgewählte Newsletter-Dienst einschließlich möglicher Drittlandübermittlung in dieser Erklärung zu ergänzen.',
        ],
      },
      {
        title: '6. Cookies und Consent',
        items: [
          'Unbedingt erforderliche Speicherungen sichern Warenkorb, Checkout, Sicherheit und die Consent-Auswahl; § 25 Abs. 2 TDDDG.',
          'Optionale Analyse-, Marketing- oder externe Mediendienste werden nur nach Einwilligung gemäß § 25 Abs. 1 TDDDG und Art. 6 Abs. 1 lit. a DSGVO geladen.',
          'Die Auswahl ist freiwillig, granular und jederzeit über „Cookie-Einstellungen“ im Footer änderbar. Ablehnen ist ebenso einfach wie Zustimmen.',
          'Diese Vorschau lädt keine Analyse- oder Marketing-Skripte. Im Live-Shop müssen alle tatsächlich eingesetzten Dienste und Laufzeiten dokumentiert werden.',
        ],
      },
      {
        title: '7. Empfänger und Drittländer',
        items: [
          'Empfänger können Hosting-, IT-, Zahlungs-, Fulfillment-, Versand-, Kommunikations-, Steuer- und Rechtsdienstleister sein, jeweils nur im erforderlichen Umfang.',
          'Auftragsverarbeiter werden – soweit erforderlich – nach Art. 28 DSGVO verpflichtet.',
          'Übermittlungen außerhalb des EWR erfolgen nur bei Angemessenheitsbeschluss, geeigneten Garantien nach Art. 46 DSGVO oder einer anwendbaren Ausnahme.',
        ],
      },
      {
        title: '8. Ihre Rechte',
        items: [
          'Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden.',
          'Direktwerbung können Sie jederzeit ohne Begründung widersprechen. Datenschutzanfragen richten Sie an info@be-different.shop.',
          'Beschwerden können insbesondere an das Office of the Commissioner for Personal Data Protection, Kypranoros 15, 1061 Nicosia, Cyprus, commissioner@dataprotection.gov.cy, gerichtet werden.',
          'Automatisierte Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung finden derzeit nicht statt.',
        ],
      },
    ],
  },
  {
    slug: 'agb',
    label: 'AGB',
    kicker: 'Allgemeine Geschäftsbedingungen',
    title: 'AGB für den be-different Online-Shop',
    intro: 'AGB der Kirlana Consulting Ltd. für Bestellungen über be-different.shop. Stand: 29. August 2026.',
    blocks: [
      {
        title: '1. Geltungsbereich',
        items: [
          'Diese AGB gelten für Bestellungen über https://be-different.shop/ durch Verbraucher und Unternehmer.',
          'Vertragspartner ist Kirlana Consulting Ltd., Anschrift wie im Impressum.',
          'Abweichende Kundenbedingungen gelten nur nach ausdrücklicher Zustimmung.',
        ],
      },
      {
        title: '2. Vertragsschluss',
        items: [
          'Produktdarstellungen sind kein bindendes Angebot. Eingaben können vor Abgabe im Warenkorb und Checkout geprüft und korrigiert werden.',
          'Mit Klick auf „zahlungspflichtig bestellen“ gibt der Kunde ein verbindliches Angebot ab.',
          'Der Vertrag kommt mit ausdrücklicher Auftragsbestätigung oder Versand der Ware zustande. Eine reine Eingangsbestätigung ist noch keine Annahme, sofern sie dies nicht ausdrücklich erklärt.',
        ],
      },
      {
        title: '3. Sprache und Vertragstext',
        items: [
          'Vertragssprache ist Deutsch.',
          'Bestelldaten, AGB und Widerrufsbelehrung werden mit der Bestellbestätigung auf einem dauerhaften Datenträger bereitgestellt.',
          'Bestellungen sind im Kundenkonto einsehbar, falls ein Konto angeboten wird; darüber hinaus wird der Vertragstext nicht dauerhaft öffentlich zugänglich gehalten.',
        ],
      },
      {
        title: '4. Preise und Zahlung',
        items: [
          'Alle Preise sind Gesamtpreise in Euro einschließlich gesetzlich anfallender Umsatzsteuer; zusätzliche Versandkosten werden vor Bestellung angezeigt.',
          'Im Checkout stehen nur tatsächlich aktivierte Zahlungsarten zur Verfügung. Es gelten ergänzend die Bedingungen des gewählten Zahlungsdienstes.',
          'Bei angekündigten Preisermäßigungen wird der niedrigste Gesamtpreis der letzten 30 Tage angegeben.',
        ],
      },
      {
        title: '5. Lieferung',
        items: [
          'Geliefert wird nach Deutschland und in die im Checkout auswählbaren EU-Länder.',
          'Die konkrete Lieferzeit steht am Produkt und im Checkout. Regelmäßig: Deutschland 4–7 Werktage, EU 5–10 Werktage.',
          'Zusätzliche Kosten für Teillieferungen entstehen nur nach vorheriger Vereinbarung.',
        ],
      },
      {
        title: '6. Eigentum und Mängelrechte',
        items: [
          'Die Ware bleibt bis zur vollständigen Zahlung unser Eigentum. Es gelten die gesetzlichen Mängelhaftungsrechte.',
          'Displaybedingte Farbdifferenzen sind möglich. Produktionsabweichungen sind nur hinzunehmen, soweit die vereinbarte Beschaffenheit und gesetzliche Anforderungen gewahrt bleiben.',
        ],
      },
      {
        title: '7. Print-on-Demand, Individualisierung und Drops',
        items: [
          'Print-on-Demand allein schließt das gesetzliche Widerrufsrecht nicht aus.',
          'Ein Ausschluss greift nur bei tatsächlich nach Kundenspezifikation angefertigten oder eindeutig personalisierten Waren.',
          'Limited Drops und Rabattcodes können nach den ausgewiesenen Bedingungen begrenzt sein; eine Barauszahlung ist ausgeschlossen.',
        ],
      },
      {
        title: '8. Haftung, Recht und Streitbeilegung',
        items: [
          'Wir haften unbeschränkt bei Vorsatz, grober Fahrlässigkeit, Verletzung von Leben, Körper oder Gesundheit, nach Produkthaftungsrecht und im Umfang einer Garantie.',
          'Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den typischen vorhersehbaren Schaden begrenzt; im Übrigen ist leichte Fahrlässigkeit soweit gesetzlich zulässig ausgeschlossen.',
          'Es gilt zyprisches Recht unter Ausschluss des UN-Kaufrechts; zwingender Verbraucherschutz am gewöhnlichen Aufenthaltsort bleibt unberührt. Gesetzliche Gerichtsstände bleiben bestehen.',
          'Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        ],
      },
    ],
  },
  {
    slug: 'widerruf',
    label: 'Widerruf',
    kicker: 'Widerrufsbelehrung + Online-Funktion',
    title: 'Widerruf und Musterformular',
    intro: 'Widerrufsbelehrung für Warenkäufe. Stand: 29. August 2026.',
    blocks: [
      {
        title: 'Widerrufsrecht',
        items: [
          'Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.',
          'Die Frist beginnt mit Erhalt der Ware durch Sie oder einen benannten Dritten, der nicht Beförderer ist; bei getrennter Lieferung mehrerer Waren mit Erhalt der letzten Ware.',
        ],
      },
      {
        title: 'Widerruf ausüben',
        items: [
          'Richten Sie eine eindeutige Erklärung an Kirlana Consulting Ltd., 26 Anthipolochagou Georgiou M. Savva, Shop 1–2, 8201 Paphos, Cyprus, +49 1520 6677415, info@be-different.shop.',
          'Das Musterformular ist optional. Zur Fristwahrung genügt die rechtzeitige Absendung.',
          'Online geschlossene Verträge können zusätzlich über „Vertrag widerrufen“ auf dieser Seite widerrufen werden. Nach Übermittlung wird unverzüglich eine Eingangsbestätigung mit Inhalt, Datum und Uhrzeit per E-Mail versendet.',
        ],
      },
      {
        title: 'Folgen des Widerrufs',
        items: [
          'Wir erstatten alle Zahlungen einschließlich der günstigsten angebotenen Standardlieferung unverzüglich und spätestens binnen vierzehn Tagen ab Eingang des Widerrufs.',
          'Die Rückzahlung erfolgt mit demselben Zahlungsmittel, sofern nichts anderes vereinbart wurde, und ohne Entgelt.',
          'Wir dürfen die Rückzahlung bis zum Erhalt der Ware oder Nachweis der Rücksendung verweigern, je nachdem, welches früher eintritt.',
          'Sie tragen die unmittelbaren Rücksendekosten und senden die Ware spätestens binnen vierzehn Tagen an die auf dem Rücksendeetikett genannte Retourenadresse.',
          'Wertersatz ist nur für einen Umgang geschuldet, der zur Prüfung von Beschaffenheit, Eigenschaften und Funktionsweise nicht notwendig war.',
        ],
      },
      {
        title: 'Ausnahme für Individualanfertigungen',
        items: [
          'Kein Widerrufsrecht besteht bei nicht vorgefertigten Waren, für deren Herstellung eine individuelle Auswahl maßgeblich ist, oder eindeutig personalisierten Waren.',
          'Für Standardshirts, die lediglich erst nach Bestellung gedruckt werden, besteht das Widerrufsrecht grundsätzlich fort.',
        ],
      },
      {
        title: 'Muster-Widerrufsformular',
        items: [
          'An Kirlana Consulting Ltd., Anschrift und E-Mail wie oben.',
          'Hiermit widerrufe(n) ich/wir (*) den abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*).',
          'Bestellt am (*)/erhalten am (*); Name und Anschrift; Datum; Unterschrift nur bei Papier. (*) Unzutreffendes streichen.',
        ],
      },
    ],
  },
  {
    slug: 'versand-rueckgabe',
    label: 'Versand & Rückgabe',
    kicker: 'Lieferung, Zahlung und Retouren',
    title: 'Versand, Zahlung und Rückgabe',
    intro: 'Die im Checkout angezeigten konkreten Angaben sind maßgeblich.',
    blocks: [
      {
        title: 'Versandgebiete und Kosten',
        items: [
          'Deutschland: bis zu 5,25 €; EU: bis zu 8,50 €, soweit das Land im Checkout auswählbar ist; außerhalb der EU derzeit kein Versand.',
          'Die konkreten Versandkosten und eine etwaige Freigrenze werden vor Abgabe der Bestellung angezeigt.',
        ],
      },
      {
        title: 'Lieferzeiten',
        items: ['Deutschland: regelmäßig 4–7 Werktage', 'EU: regelmäßig 5–10 Werktage', 'Abweichungen werden direkt am Produkt ausgewiesen.'],
      },
      {
        title: 'Zahlungsarten',
        items: ['Kreditkarte über Stripe: aktiv', 'Apple Pay / Google Pay: aktiv, soweit verfügbar', 'Klarna: aktiv', 'PayPal und Rechnungskauf: erst nach Aktivierung im Checkout'],
      },
      {
        title: 'Rückgabeablauf',
        items: [
          '1. Widerruf über „Vertrag widerrufen“, per E-Mail an info@be-different.shop oder per Brief erklären.',
          '2. Bestellnummer und betroffene Produkte angeben.',
          '3. Ware sicher verpackt an die auf dem Rücksendeetikett genannte Shirtigo-Retourenadresse senden.',
          '4. Erstattung nach Eingang der Ware oder Nachweis der Rücksendung; gesetzliche Rechte bleiben unberührt.',
        ],
      },
    ],
  },
  {
    slug: 'barrierefreiheit',
    label: 'Barrierefreiheit',
    kicker: 'BFSG / barrierefreier E-Commerce',
    title: 'Informationen zur Barrierefreiheit',
    intro: 'Beschreibung der elektronischen Shop-Dienstleistung und ihrer Barrierefreiheitsmerkmale. Stand: 29. August 2026.',
    blocks: [
      {
        title: 'Dienstleistung',
        items: [
          'be-different.shop dient dem Suchen, Auswählen und Bestellen von Bekleidung.',
          'Die Schritte sind Produkt- und Variantenwahl, Warenkorb, Kontakt- und Lieferdaten, Zahlungsart, Prüfung und zahlungspflichtige Bestellung.',
        ],
      },
      {
        title: 'Barrierefreie Nutzung',
        items: [
          'Navigation, Formulare, Produktwahl und Rechtstexte sind per Tastatur nutzbar und semantisch beschriftet.',
          'Vorgesehen sind ausreichende Kontraste, sichtbare Fokuszustände, skalierbare Darstellung, verständliche Fehlermeldungen und Textalternativen.',
          'Identifizierungs-, Sicherheits- und Zahlungsfunktionen müssen über barrierefrei konfigurierte WooCommerce- und Zahlungsanbieter-Komponenten bereitgestellt werden.',
        ],
      },
      {
        title: 'Konformitätsstand',
        items: [
          'Diese React-Anwendung ist eine Vorschau. Die abschließende BFSG-Prüfung muss am produktiven WooCommerce-Shop einschließlich Checkout, Plugins und Zahlungsdialogen erfolgen.',
          'Vor Veröffentlichung sind Tastatur-, Screenreader-, Zoom-, Kontrast- und Formularprüfungen für alle Kaufwege zu dokumentieren.',
        ],
      },
      {
        title: 'Feedback und Marktüberwachung',
        items: [
          'Hinweise zu Barrieren oder Wünsche nach einem anderen Format bitte an info@be-different.shop oder +49 1520 6677415.',
          'Für Angebote in Deutschland ist die Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF) vorgesehen. Zuständigkeit und aktuelle Kontaktdaten sind zum Livegang final zu verifizieren.',
        ],
      },
    ],
  },
] as const;
const collaborationRoles = [
  {
    title: 'Designer',
    text: 'Du denkst in Motiven, Layouts, Typo und visuellen Brüchen, die sofort hängen bleiben.',
  },
  {
    title: 'Künstler',
    text: 'Du hast eine eigene Handschrift und willst sie auf Shirts, Prints oder Objekte bringen.',
  },
  {
    title: 'Unternehmer',
    text: 'Du willst Drops, Community, Vertrieb oder Kooperationen mit aufbauen und skalieren.',
  },
  {
    title: 'Verrückte Idee',
    text: 'Du hast keinen Titel, aber einen Gedanken, der zu unbequem ist, um ihn liegen zu lassen.',
  },
];
const sizeGuide = [
  { size: 'S', chest: '48 cm', length: '70 cm' },
  { size: 'M', chest: '51 cm', length: '72 cm' },
  { size: 'L', chest: '54 cm', length: '74 cm' },
  { size: 'XL', chest: '57 cm', length: '76 cm' },
  { size: 'XXL', chest: '60 cm', length: '78 cm' },
];
const reviewSnippets = [
  {
    name: 'Mara',
    text: 'Motiv wirkt live noch stärker. Genau dieser schwarze Street-Art-Look.',
  },
  {
    name: 'Deniz',
    text: 'Regular Fit sitzt clean, Druck fühlt sich nicht billig an.',
  },
];

type CartItem = {
  key: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

type LegalSlug = (typeof legalPages)[number]['slug'];
type AppRoute = 'home' | 'shop' | LegalSlug;
type ShopCategory = (typeof shopCategories)[number];
type ShopColor = (typeof shopColors)[number];
type ShopSize = (typeof shopSizes)[number];
type ShopSort = (typeof shopSortOptions)[number]['value'];
type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
};

function formatPrice(value: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

function getRouteFromHash(): AppRoute {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash === 'shop') return 'shop';
  if (legalPages.some((page) => page.slug === hash)) return hash as LegalSlug;
  return 'home';
}

function ProductCard({
  product,
  onSelect,
  onAdd,
}: {
  product: Product;
  onSelect: (product: Product) => void;
  onAdd: (product: Product) => void;
}) {
  return (
    <article className="product-card">
      <button className="wishlist" aria-label={`${product.name} merken`}>
        <Heart size={18} />
      </button>
      <button className="product-image-button" onClick={() => onSelect(product)}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </button>
      <div className="product-copy">
        <div className="product-meta">
          <span>{product.badge}</span>
          <span className="rating">
            <Star size={14} fill="currentColor" /> {product.rating} / {product.reviews}
          </span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.shortClaim}</p>
        <div className="price-row">
          <strong>{formatPrice(product.price)}</strong>
          {product.lowestPrice30Days && (
            <span title="Niedrigster Gesamtpreis der letzten 30 Tage">
              30-Tage-Preis: {formatPrice(product.lowestPrice30Days)}
            </span>
          )}
        </div>
        <div className="product-actions">
          <button className="icon-text-button" onClick={() => onSelect(product)}>
            <Eye size={17} />
            Ansehen
          </button>
          <button className="icon-text-button hot" onClick={() => onAdd(product)}>
            <ShoppingBag size={17} />
            Quick Add
          </button>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [route, setRoute] = useState<AppRoute>(() => getRouteFromHash());
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Alle');
  const [shopCategory, setShopCategory] = useState<ShopCategory>('Alle');
  const [shopColor, setShopColor] = useState<ShopColor>('Alle');
  const [shopSize, setShopSize] = useState<ShopSize>('Alle');
  const [shopSort, setShopSort] = useState<ShopSort>('featured');
  const [shopQuery, setShopQuery] = useState('');
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[1]);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [earlyAccessEmail, setEarlyAccessEmail] = useState('');
  const [earlyAccessAgeConsent, setEarlyAccessAgeConsent] = useState(false);
  const [earlyAccessMarketingConsent, setEarlyAccessMarketingConsent] = useState(false);
  const [earlyAccessSubmitted, setEarlyAccessSubmitted] = useState(false);
  const [collaborationRole, setCollaborationRole] = useState(collaborationRoles[0].title);
  const [collaborationSubmitted, setCollaborationSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<ConsentPreferences | null>(() => {
    try {
      const saved = window.localStorage.getItem('different-mind-consent-v1');
      return saved ? (JSON.parse(saved) as ConsentPreferences) : null;
    } catch {
      return null;
    }
  });
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(cookieConsent?.analytics ?? false);
  const [marketingConsent, setMarketingConsent] = useState(cookieConsent?.marketing ?? false);
  const [withdrawalStatus, setWithdrawalStatus] = useState<'idle' | 'sending' | 'sent' | 'email'>('idle');

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'Alle') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const shopProducts = useMemo(() => {
    const query = shopQuery.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const categoryMatch =
        shopCategory === 'Alle' ||
        product.category === shopCategory ||
        (shopCategory === 'Shadow Drop' &&
          (product.dropStatus.toLowerCase().includes('shadow') ||
            product.dropStatus.toLowerCase().includes('monochrome') ||
            product.id === 'cat-rebel'));
      const colorMatch = shopColor === 'Alle' || product.colors.includes(shopColor);
      const sizeMatch = shopSize === 'Alle' || product.sizes.includes(shopSize);
      const queryMatch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortClaim.toLowerCase().includes(query) ||
        product.dropStatus.toLowerCase().includes(query);

      return categoryMatch && colorMatch && sizeMatch && queryMatch;
    });

    return [...filtered].sort((a, b) => {
      if (shopSort === 'price-low') return a.price - b.price;
      if (shopSort === 'price-high') return b.price - a.price;
      if (shopSort === 'rating') return b.rating - a.rating;
      if (shopSort === 'newest') return b.reviews - a.reviews;
      return Number(Boolean(b.lowestPrice30Days)) - Number(Boolean(a.lowestPrice30Days));
    });
  }, [shopCategory, shopColor, shopQuery, shopSize, shopSort]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= freeShippingThreshold ? 0 : 4.9;
  const total = subtotal + shipping;
  const progressToFreeShipping = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const topProduct = products[0];
  const currentHeroSlide = heroSlides[activeHeroSlide];
  const currentLegalPage = legalPages.find((page) => page.slug === route);
  const collectionRows = [shadowCollection.slice(0, 4), shadowCollection.slice(4)];
  const relatedProducts = useMemo(
    () => products.filter((product) => product.id !== selectedProduct.id).slice(0, 2),
    [selectedProduct.id],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((slide) => (slide + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (
      route !== 'home' ||
      !cookieConsent ||
      window.sessionStorage.getItem('bd-early-access-closed') === 'true'
    ) {
      return undefined;
    }

    const timer = window.setTimeout(() => setEarlyAccessOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, [cookieConsent, route]);

  useEffect(() => {
    if (!earlyAccessOpen) return undefined;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeEarlyAccessPopup();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [earlyAccessOpen]);

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRouteFromHash());
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    if (route !== 'home' || !pendingScrollId) return undefined;

    const timer = window.setTimeout(() => {
      document.getElementById(pendingScrollId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setPendingScrollId(null);
    }, 50);

    return () => window.clearTimeout(timer);
  }, [pendingScrollId, route]);

  function scrollToSection(sectionId: string) {
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }

  function navigateHome(sectionId = 'home') {
    const shouldWaitForHomeRender = route !== 'home';

    window.location.hash = sectionId;
    setRoute('home');
    setMenuOpen(false);

    if (shouldWaitForHomeRender) {
      setPendingScrollId(sectionId);
      return;
    }

    scrollToSection(sectionId);
  }

  function navigateShop() {
    window.location.hash = '/shop';
    setRoute('shop');
    setMenuOpen(false);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }

  function navigateLegal(slug: LegalSlug) {
    window.location.hash = `/${slug}`;
    setRoute(slug);
    setMenuOpen(false);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }

  function navigateWithdrawal() {
    window.location.hash = '/widerruf';
    setRoute('widerruf');
    setMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById('vertrag-widerrufen')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[1] ?? product.sizes[0]);
    setSelectedColor(product.colors[0]);
    if (route === 'shop') {
      navigateHome('produkt');
      return;
    }
    scrollToSection('produkt');
  }

  function addProduct(product: Product, size = product.sizes[1] ?? product.sizes[0], color = product.colors[0]) {
    const key = `${product.id}-${size}-${color}`;
    setCartItems((items) => {
      const existing = items.find((item) => item.key === key);
      if (existing) {
        return items.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...items, { key, product, size, color, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function updateQuantity(key: string, change: number) {
    setCartItems((items) =>
      items
        .map((item) => (item.key === key ? { ...item, quantity: item.quantity + change } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  function removeItem(key: string) {
    setCartItems((items) => items.filter((item) => item.key !== key));
  }

  function jumpToCheckout() {
    setCartOpen(false);
    if (route === 'shop') {
      navigateHome('checkout');
      return;
    }
    scrollToSection('checkout');
  }

  function openCollectionDesign(productId: Product['id']) {
    const product = products.find((item) => item.id === productId);
    if (product) handleSelectProduct(product);
  }

  function closeEarlyAccessPopup() {
    window.sessionStorage.setItem('bd-early-access-closed', 'true');
    setEarlyAccessOpen(false);
  }

  function handleEarlyAccessSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!earlyAccessEmail || !earlyAccessAgeConsent || !earlyAccessMarketingConsent) return;
    setEarlyAccessSubmitted(true);
  }

  function handleCollaborationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCollaborationSubmitted(true);
  }

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewsletterSubmitted(true);
  }

  function saveCookieConsent(analytics: boolean, marketing: boolean) {
    const preferences: ConsentPreferences = {
      analytics,
      marketing,
      savedAt: new Date().toISOString(),
    };

    window.localStorage.setItem('different-mind-consent-v1', JSON.stringify(preferences));
    setCookieConsent(preferences);
    setAnalyticsConsent(analytics);
    setMarketingConsent(marketing);
    setCookieSettingsOpen(false);
  }

  function openCookieSettings() {
    setAnalyticsConsent(cookieConsent?.analytics ?? false);
    setMarketingConsent(cookieConsent?.marketing ?? false);
    setCookieSettingsOpen(true);
  }

  async function handleWithdrawalSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      order: String(data.get('order') ?? ''),
      email: String(data.get('email') ?? ''),
      goods: String(data.get('goods') ?? ''),
      submittedAt: new Date().toISOString(),
    };
    const endpoint = import.meta.env.VITE_WITHDRAWAL_ENDPOINT as string | undefined;

    if (!endpoint) {
      const subject = encodeURIComponent(`Widerruf Bestellung ${payload.order}`);
      const body = encodeURIComponent(
        `Hiermit widerrufe ich meinen Vertrag.\n\nName: ${payload.name}\nBestellung: ${payload.order}\nE-Mail: ${payload.email}\nWaren: ${payload.goods}\nDatum/Uhrzeit: ${payload.submittedAt}`,
      );
      window.location.href = `mailto:info@be-different.shop?subject=${subject}&body=${body}`;
      setWithdrawalStatus('email');
      return;
    }

    setWithdrawalStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Widerruf konnte nicht übermittelt werden.');
      setWithdrawalStatus('sent');
      form.reset();
    } catch {
      setWithdrawalStatus('email');
    }
  }

  return (
    <>
      {route === 'home' && earlyAccessOpen && (
        <div className="early-access-backdrop" onClick={closeEarlyAccessPopup}>
          <section
            className="early-access-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="early-access-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="early-access-media">
              <img src={earlyAccessImage} alt="be-different Limited Edition Early Access" />
              <span>Limited Edition Early Access</span>
            </div>
            <div className="early-access-content">
              <button
                className="early-access-close"
                aria-label="Early Access Popup schließen"
                onClick={closeEarlyAccessPopup}
              >
                <X size={28} />
              </button>

              {earlyAccessSubmitted ? (
                <div className="early-access-success">
                  <span className="eyebrow neon">Du bist auf der Liste</span>
                  <h2 id="early-access-title">Early Access ist reserviert.</h2>
                  <p>
                    Sobald der nächste Limited Drop live geht, bekommst du den Zugang vor allen
                    anderen. Rabattcode und Verfügbarkeit werden später über das Newsletter-System
                    verschickt.
                  </p>
                  <button className="primary-button" onClick={closeEarlyAccessPopup}>
                    Weiter zur Seite
                  </button>
                </div>
              ) : (
                <>
                  <span className="eyebrow neon">Drop 01 / Vorabzugang</span>
                  <h2 id="early-access-title">Early Access für Limited Shirts.</h2>
                  <p>
                    Trag dich ein und sichere dir Vorabzugang zu limitierten be-different Shirts,
                    früheren Drop-Infos und günstigeren Early-Bird Preisen.
                  </p>

                  <form className="early-access-form" onSubmit={handleEarlyAccessSubmit}>
                    <label>
                      <span>E-Mail Adresse</span>
                      <input
                        type="email"
                        value={earlyAccessEmail}
                        onChange={(event) => setEarlyAccessEmail(event.target.value)}
                        placeholder="statement@beispiel.de"
                        aria-label="E-Mail Adresse für Early Access"
                        required
                      />
                    </label>

                    <label className="consent-line">
                      <input
                        type="checkbox"
                        checked={earlyAccessAgeConsent}
                        onChange={(event) => setEarlyAccessAgeConsent(event.target.checked)}
                        required
                      />
                      <span>
                        Ich bestätige, dass ich mindestens 16 Jahre alt bin und die Hinweise zum
                        Newsletter gelesen habe.
                      </span>
                    </label>

                    <label className="consent-line">
                      <input
                        type="checkbox"
                        checked={earlyAccessMarketingConsent}
                        onChange={(event) => setEarlyAccessMarketingConsent(event.target.checked)}
                        required
                      />
                      <span>
                        Ich willige ein, dass be-different meine E-Mail Adresse für Drop-Alerts,
                        Early-Access-Angebote und Limited-Edition-News verarbeitet. Abmeldung ist
                        jederzeit möglich. Einzelheiten stehen in der Datenschutzerklärung.
                      </span>
                    </label>

                    <button className="primary-button" type="submit">
                      <Sparkles size={18} />
                      Jetzt Early Access sichern
                    </button>
                  </form>

                  <small>
                    Die Anmeldung wird im Live-Shop erst nach Bestätigung der Double-Opt-in-E-Mail
                    wirksam. Der Newsletter-Anbieter muss vor Aktivierung in der Datenschutzerklärung
                    benannt werden.
                  </small>
                </>
              )}
            </div>
          </section>
        </div>
      )}

      <div className="announcement">
        <div className="ticker-track" aria-label="Shop Nachrichten">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="be-different Startseite"
          onClick={(event) => {
            event.preventDefault();
            navigateHome();
          }}
        >
          <span className="brand-logo-crop">
            <img src={differentMindLogo} alt="Different Mind" />
          </span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Hauptnavigation">
          <a
            href="#/shop"
            className={route === 'shop' ? 'active' : ''}
            onClick={(event) => {
              event.preventDefault();
              navigateShop();
            }}
          >
            Shop
          </a>
          <a href="#drops" onClick={(event) => { event.preventDefault(); navigateHome('drops'); }}>
            Drops
          </a>
          <a href="#collection" onClick={(event) => { event.preventDefault(); navigateHome('collection'); }}>
            Collection
          </a>
          <a href="#brand" onClick={(event) => { event.preventDefault(); navigateHome('brand'); }}>
            Brand
          </a>
          <a href="#about" onClick={(event) => { event.preventDefault(); navigateHome('about'); }}>
            About
          </a>
          <a href="#campaign" onClick={(event) => { event.preventDefault(); navigateHome('campaign'); }}>
            Campaign
          </a>
          <a href="#collab" onClick={(event) => { event.preventDefault(); navigateHome('collab'); }}>
            Mitmachen
          </a>
          <a href="#system" onClick={(event) => { event.preventDefault(); navigateHome('system'); }}>
            Stack
          </a>
          <a href="#faq" onClick={(event) => { event.preventDefault(); navigateHome('faq'); }}>
            FAQ
          </a>
        </nav>
        <div className="header-actions">
          <button className="header-deal" onClick={() => addProduct(topProduct)}>
            <BadgePercent size={18} />
            Bundle
          </button>
          <button
            className="cart-button"
            aria-label={`${cartCount} Artikel im Warenkorb`}
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag size={20} />
            <span>{cartCount}</span>
          </button>
          <button
            className="menu-button"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id={route === 'shop' ? 'shop-page' : currentLegalPage ? 'legal-page' : 'home'}>
        {route === 'shop' ? (
          <>
            <section className="shop-page-hero">
              <div>
                <span className="eyebrow neon">Eigene Shop-Seite</span>
                <h1>
                  Shop
                  <span>the contradiction.</span>
                </h1>
                <p>
                  Keine Umwege, keine leeren Versprechen: Motive wählen, Größe checken,
                  Statement sichern. Der Shop ist für schnelle Drop-Käufe gebaut.
                </p>
                <div className="shop-hero-actions">
                  <button className="primary-button" onClick={() => addProduct(topProduct)}>
                    <ShoppingBag size={18} />
                    Bestseller sichern
                  </button>
                  <button className="secondary-button" onClick={() => navigateHome('campaign')}>
                    Manifesto ansehen
                  </button>
                </div>
              </div>
              <aside aria-label="Shop Vorteile">
                <strong>Statement-Shop ohne Umweg</strong>
                <span>Filter, Sortierung, Quick Add und Cart Drawer führen ohne Ablenkung zum Kauf.</span>
                <div>
                  <b>{products.length}</b>
                  <small>Startprodukte</small>
                </div>
              </aside>
            </section>

            <section className="shop-page-shell">
              <aside className="shop-filter-panel" aria-label="Shop Filter">
                <div className="shop-search">
                  <span>Suche</span>
                  <input
                    value={shopQuery}
                    onChange={(event) => setShopQuery(event.target.value)}
                    placeholder="Motiv, Drop, Claim"
                    aria-label="Shop durchsuchen"
                  />
                </div>

                <div className="filter-group">
                  <strong>Kategorie</strong>
                  <div>
                    {shopCategories.map((category) => (
                      <button
                        key={category}
                        className={shopCategory === category ? 'active' : ''}
                        onClick={() => setShopCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <strong>Farbe</strong>
                  <div>
                    {shopColors.map((color) => (
                      <button
                        key={color}
                        className={shopColor === color ? 'active' : ''}
                        onClick={() => setShopColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <strong>Größe</strong>
                  <div>
                    {shopSizes.map((size) => (
                      <button
                        key={size}
                        className={shopSize === size ? 'active' : ''}
                        onClick={() => setShopSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="shop-filter-note">
                  <ShieldCheck size={18} />
                  <span>WooCommerce-Filter später über Attribute: Größe, Farbe, Drop, Preis.</span>
                </div>
              </aside>

              <section className="shop-results" aria-label="Shop Produkte">
                <div className="shop-toolbar">
                  <div>
                    <span className="eyebrow">Alle Produkte</span>
                    <strong>{shopProducts.length} Treffer</strong>
                  </div>
                  <label>
                    Sortieren
                    <select
                      value={shopSort}
                      onChange={(event) => setShopSort(event.target.value as ShopSort)}
                    >
                      {shopSortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                {shopProducts.length > 0 ? (
                  <div className="shop-product-grid">
                    {shopProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelect={handleSelectProduct}
                        onAdd={addProduct}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="shop-empty-state">
                    <strong>Kein Motiv passt zu den Filtern.</strong>
                    <button
                      className="primary-button"
                      onClick={() => {
                        setShopCategory('Alle');
                        setShopColor('Alle');
                        setShopSize('Alle');
                        setShopQuery('');
                      }}
                    >
                      Filter zurücksetzen
                    </button>
                  </div>
                )}
              </section>
            </section>

            <section className="shop-page-trust">
              <article>
                <PackageCheck size={22} />
                <strong>Drop-Produktion</strong>
                <p>Start ohne Lagerdruck, später Limited Runs und Stock-Produkte.</p>
              </article>
              <article>
                <CreditCard size={22} />
                <strong>Schnelle Zahlung</strong>
                <p>Checkout mit Stripe, PayPal und Wallets, sobald der Live-Shop angebunden ist.</p>
              </article>
              <article>
                <Truck size={22} />
                <strong>Mobile zuerst</strong>
                <p>Filter, Cart und Checkout sind auf schnelle Social-Traffic-Käufe ausgelegt.</p>
              </article>
            </section>
          </>
        ) : currentLegalPage ? (
          <section className="legal-page" aria-labelledby="legal-page-title">
            <div className="legal-page-hero">
              <span className="eyebrow neon">{currentLegalPage.kicker}</span>
              <h1 id="legal-page-title">{currentLegalPage.title}</h1>
              <p>{currentLegalPage.intro}</p>
              <div className="legal-page-actions">
                {currentLegalPage.slug === 'widerruf' && (
                  <button className="primary-button" onClick={navigateWithdrawal}>
                    Vertrag widerrufen
                  </button>
                )}
                <button className="primary-button" onClick={() => navigateHome()}>
                  Zur Startseite
                </button>
                <button className="secondary-button" onClick={navigateShop}>
                  Zum Shop
                </button>
              </div>
            </div>

            <div className="legal-page-nav" aria-label="Rechteseiten">
              {legalPages.map((page) => (
                <button
                  key={page.slug}
                  className={currentLegalPage.slug === page.slug ? 'active' : ''}
                  onClick={() => navigateLegal(page.slug)}
                >
                  {page.label}
                </button>
              ))}
            </div>

            <div className="legal-page-content">
              {currentLegalPage.blocks.map((block) => (
                <article key={block.title}>
                  <h2>{block.title}</h2>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {currentLegalPage.slug === 'widerruf' && (
              <section className="withdrawal-function" id="vertrag-widerrufen" aria-labelledby="withdrawal-title">
                <div>
                  <span className="eyebrow">Elektronische Widerrufsfunktion</span>
                  <h2 id="withdrawal-title">Vertrag widerrufen</h2>
                  <p>
                    Füllen Sie die Pflichtfelder aus. Im produktiven Shop muss die Übermittlung
                    serverseitig gespeichert und unverzüglich per E-Mail bestätigt werden.
                  </p>
                </div>
                <form onSubmit={handleWithdrawalSubmit}>
                  <label>
                    Name
                    <input name="name" autoComplete="name" required />
                  </label>
                  <label>
                    Bestellnummer
                    <input name="order" autoComplete="off" required />
                  </label>
                  <label>
                    E-Mail für die Eingangsbestätigung
                    <input name="email" type="email" autoComplete="email" required />
                  </label>
                  <label>
                    Betroffene Waren oder Teil der Bestellung
                    <textarea name="goods" rows={3} required />
                  </label>
                  <button className="primary-button" type="submit" disabled={withdrawalStatus === 'sending'}>
                    {withdrawalStatus === 'sending' ? 'Wird übermittelt …' : 'Widerruf bestätigen'}
                  </button>
                  {withdrawalStatus === 'sent' && (
                    <p className="form-success" role="status">
                      Der Widerruf wurde übermittelt. Die Eingangsbestätigung wurde an Ihre E-Mail-Adresse versendet.
                    </p>
                  )}
                  {withdrawalStatus === 'email' && (
                    <p className="form-warning" role="status">
                      Die Server-Schnittstelle ist in dieser Vorschau noch nicht verbunden. Ihr E-Mail-Programm wurde geöffnet;
                      der Widerruf ist erst nach dem tatsächlichen Versand der E-Mail übermittelt.
                    </p>
                  )}
                </form>
              </section>
            )}

            <aside className="legal-page-note">
              <ShieldCheck size={22} />
              <div>
                <strong>Rechtsstand und Live-Prüfung</strong>
                <p>
                  Diese Fassung berücksichtigt die bekannten Shop-Angaben und den Rechtsstand vom
                  29. August 2026. Anbieter, Plugins, Checkout, Steuer- und Versandkonfiguration
                  müssen vor Livegang mit der tatsächlichen Verarbeitung abgeglichen werden.
                </p>
              </div>
            </aside>
          </section>
        ) : (
          <>
        <section className="hero" style={{ backgroundImage: `url(${currentHeroSlide.background})` }}>
          <div className="hero-content">
            <span className="eyebrow neon">{currentHeroSlide.kicker}</span>
            <h1>
              {currentHeroSlide.top}
              <span>{currentHeroSlide.highlight}</span>
              <em>{currentHeroSlide.signature}</em>
            </h1>
            <p>{currentHeroSlide.copy}</p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href="#/shop"
                onClick={(event) => {
                  event.preventDefault();
                  navigateShop();
                }}
              >
                Drop shoppen <ChevronRight size={19} />
              </a>
              <button className="secondary-button" onClick={() => addProduct(currentHeroSlide.product)}>
                <Flame size={18} />
                {currentHeroSlide.product.name} sichern
              </button>
            </div>
            <div className="trust-strip" aria-label="Shop Vorteile">
              <span>
                <ShieldCheck size={17} /> Sichere Zahlung
              </span>
              <span>
                <Truck size={17} /> POD ohne Lagerdruck
              </span>
              <span>
                <RotateCcw size={17} /> Rückgabe klar erklärt
              </span>
            </div>
            <div className="hero-slider-controls" aria-label="Hero Slider">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.kicker}
                  className={activeHeroSlide === index ? 'active' : ''}
                  aria-label={`Slide ${index + 1} anzeigen`}
                  onClick={() => setActiveHeroSlide(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {slide.product.badge}
                </button>
              ))}
            </div>
          </div>
          <div className="hero-product">
            <span>{currentHeroSlide.product.dropStatus}</span>
            <img src={currentHeroSlide.product.image} alt={currentHeroSlide.product.name} />
            <button onClick={() => addProduct(currentHeroSlide.product)}>
              <ShoppingBag size={18} />
              {formatPrice(currentHeroSlide.product.price)}
            </button>
          </div>
        </section>

        <section className="proof-strip" aria-label="Marken Kennzahlen">
          {proofPoints.map((point) => (
            <div key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </section>

        <section className="shadow-collection" id="collection">
          <div className="shadow-copy">
            <span className="eyebrow neon">Neue Kollektion</span>
            <h2>Shadow Drop. Motive, die von allen Seiten kommen.</h2>
            <p>
              Die schwarzen Ink-Designs laufen als eigene Capsule: roh, kontrastreich und
              schwer zu ignorieren. Jedes Motiv ist ein kleiner Bruch mit dem Erwartbaren.
            </p>
            <div className="shadow-highlights" aria-label="Collection Highlights">
              <span>8 Motive</span>
              <span>Animal Art</span>
              <span>Street Contrast</span>
            </div>
            <button className="secondary-button" onClick={() => openCollectionDesign('cat-rebel')}>
              <Sparkles size={18} />
              Eyecatcher ansehen
            </button>
          </div>
          <div className="shadow-stage">
            <button
              className="shadow-spotlight"
              onClick={() => openCollectionDesign(shadowCollection[0].productId)}
            >
              <span>{shadowCollection[0].badge}</span>
              <img src={shadowCollection[0].image} alt={shadowCollection[0].title} loading="lazy" />
              <strong>{shadowCollection[0].title}</strong>
            </button>

            {collectionRows.map((row, rowIndex) => (
              <div className="shadow-slider" key={`collection-row-${rowIndex}`}>
                <div className={rowIndex === 0 ? 'shadow-track from-left' : 'shadow-track from-right'}>
                  {[...row, ...row].map((design, index) => (
                    <button
                      className="shadow-card"
                      key={`${design.id}-${index}`}
                      onClick={() => openCollectionDesign(design.productId)}
                    >
                      <img src={design.image} alt={design.title} loading="lazy" />
                      <span>{design.badge}</span>
                      <strong>{design.title}</strong>
                      <em>{design.line}</em>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section shop-section" id="shop">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Shop the contradiction</span>
              <h2 id="bestseller">Nicht basic. Nicht leise.</h2>
            </div>
            <button className="filter-trigger" onClick={() => setFilterOpen(true)}>
              <SlidersHorizontal size={18} />
              Filter
            </button>
          </div>

          <div className="category-tabs" aria-label="Produktkategorien">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={handleSelectProduct}
                onAdd={addProduct}
              />
            ))}
          </div>
        </section>

        <section className="contrast-lab" id="brand">
          <div>
            <span className="eyebrow neon">Marken-DNA</span>
            <h2>Gegensätze verkaufen besser, wenn sie sofort verstanden werden.</h2>
            <p>
              Be Different verbindet Street-Art, Humor und Widerspruch mit einem Shop, der
              nicht labert. Erst Haltung zeigen, dann Größe wählen, dann kaufen.
            </p>
          </div>
          <div className="pillar-grid">
            {brandPillars.map((pillar) => (
              <article key={pillar.title}>
                <Zap size={22} />
                <strong>{pillar.title}</strong>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-manifest">
            <span className="eyebrow">About us</span>
            <h2>Keine Uniform. Ein Angriff auf Autopilot.</h2>
            <p>
              Be Different ist Streetwear für Menschen, die Widersprüche sehen und nicht so
              tun wollen, als wäre alles glatt. Die Marke greift Zeitgeist, Politik, Sprache,
              Identität und Konsum als Spannungsfelder auf. Nicht als Parteiprogramm, sondern
              als visuelle Reibung: zwischen Worten und Taten, zwischen Haltung und Bequemlichkeit.
            </p>
            <blockquote>
              <strong>Sapere Aude.</strong>
              <span>Habe Mut, dich deines eigenen Verstandes zu bedienen.</span>
            </blockquote>
          </div>

          <div className="about-values">
            <article>
              <Sparkles size={22} />
              <strong>Kreativität</strong>
              <p>
                Gegensätze werden bewusst kombiniert, damit Motive stoppen, irritieren und im
                besten Fall ein Schmunzeln auslösen.
              </p>
            </article>
            <article>
              <Zap size={22} />
              <strong>Rebellion</strong>
              <p>
                Be Different darf anstößig sein. Die Designs stellen glatte Antworten infrage
                und fordern kritisches Denken statt Reflex.
              </p>
            </article>
            <article>
              <Eye size={22} />
              <strong>Individualität</strong>
              <p>
                Mode wird zur Fläche für Menschen, die sich nicht in Schubladen stecken lassen
                und ihr Anderssein sichtbar tragen.
              </p>
            </article>
            <article>
              <Heart size={22} />
              <strong>Humor</strong>
              <p>
                Witz macht den Widerspruch zugänglich. Humor verbindet, ohne die Kante aus der
                Aussage zu nehmen.
              </p>
            </article>
          </div>

          <div className="about-bottom-line">
            <span>Denken statt nicken.</span>
            <span>Kontrast statt Konsens.</span>
            <span>Anders sein als Anfang.</span>
          </div>
        </section>

        <section className="campaign-section" id="campaign">
          <div className="campaign-visual">
            <img src={campaignHeroImage} alt="Mona Lisa vermummt als be-different Campaign Visual" loading="lazy" />
            <div>
              <span>Manifesto Visual</span>
              <strong>Kunst auf Kleidung, die polarisiert.</strong>
            </div>
          </div>
          <div className="campaign-copy">
            <span className="eyebrow neon">Campaign Manifesto</span>
            <h2>Kleine Rebellionen auf Stoff.</h2>
            <p>
              Unsere Designs zeigen Gegensätze, brechen Regeln und machen sichtbar, was sonst
              untergeht. Provokant, ehrlich, mit Stil. Kein Fashion-Trend, sondern eine Haltung
              für Menschen, die sich trauen, anders zu sein.
            </p>
            <div className="campaign-actions">
              <a
                className="primary-button"
                href="#/shop"
                onClick={(event) => {
                  event.preventDefault();
                  navigateShop();
                }}
              >
                Statements shoppen <ChevronRight size={19} />
              </a>
              <a className="secondary-button" href="#collection">
                Shadow Drop ansehen
              </a>
            </div>
          </div>
          <div className="campaign-posters" aria-label="Campaign Claims">
            {campaignPosters.map((poster) => (
              <article key={poster.title}>
                <img src={poster.image} alt="" loading="lazy" />
                <div>
                  <strong>{poster.title}</strong>
                  <p>{poster.line}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section product-detail" id="produkt">
          <div className="product-gallery">
            <img className="main-product-image" src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="design-preview">
              <img src={selectedProduct.design} alt={`${selectedProduct.name} Design`} />
            </div>
          </div>
          <div className="detail-copy">
            <span className="eyebrow">{selectedProduct.dropStatus}</span>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <div className="detail-price-row">
              <strong className="detail-price">{formatPrice(selectedProduct.price)}</strong>
              {selectedProduct.lowestPrice30Days && (
                <span>30-Tage-Preis: {formatPrice(selectedProduct.lowestPrice30Days)}</span>
              )}
            </div>
            <div className="micro-proof">
              <span>
                <Star size={15} fill="currentColor" /> {selectedProduct.rating} aus{' '}
                {selectedProduct.reviews} Stimmen
              </span>
              <span>
                <Radio size={15} /> Drop-Produktion
              </span>
            </div>
            <div className="variant-block">
              <span>Größe</span>
              <div className="size-grid">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={selectedSize === size ? 'active' : ''}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="variant-block">
              <span>Farbe</span>
              <div className="swatches">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    className={`swatch swatch-${color.toLowerCase()} ${
                      selectedColor === color ? 'active' : ''
                    }`}
                    title={color}
                    aria-label={color}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <button
              className="primary-button detail-button"
              onClick={() => addProduct(selectedProduct, selectedSize, selectedColor)}
            >
              <ShoppingBag size={19} />
              In den Warenkorb
            </button>
            <dl className="detail-list">
              <div>
                <dt>Material</dt>
                <dd>{selectedProduct.material}</dd>
              </div>
              <div>
                <dt>Passform</dt>
                <dd>{selectedProduct.fit}</dd>
              </div>
              <div>
                <dt>Druck</dt>
                <dd>{selectedProduct.print}</dd>
              </div>
              <div>
                <dt>Versand</dt>
                <dd>{selectedProduct.shippingNote}</dd>
              </div>
            </dl>
            <details className="product-safety" open>
              <summary>Hersteller- und Produktsicherheitsangaben</summary>
              <dl>
                <div>
                  <dt>Hersteller / verantwortlicher Wirtschaftsakteur</dt>
                  <dd>Kirlana Consulting Ltd., 26 Anthipolochagou Georgiou M. Savva, Shop 1–2, 8201 Paphos, Cyprus</dd>
                </div>
                <div>
                  <dt>Elektronischer Kontakt</dt>
                  <dd>info@be-different.shop</dd>
                </div>
                <div>
                  <dt>Produktkennung</dt>
                  <dd>{selectedProduct.id}</dd>
                </div>
                <div>
                  <dt>Material und Pflege</dt>
                  <dd>{selectedProduct.material}; Pflegeetikett am Produkt beachten. Von offenem Feuer fernhalten.</dd>
                </div>
              </dl>
            </details>
            <div className="detail-assurance">
              <div className="assurance-grid" aria-label="Kaufargumente">
                <span>
                  <ShieldCheck size={16} />
                  Sichere Zahlung
                </span>
                <span>
                  <PackageCheck size={16} />
                  Produktion auf Bestellung
                </span>
                <span>
                  <Truck size={16} />
                  Versand transparent
                </span>
                <span>
                  <RotateCcw size={16} />
                  Rückgabe-Flow
                </span>
              </div>

              <details className="size-guide" open>
                <summary>Größencheck</summary>
                <div className="size-table" role="table" aria-label="Größentabelle">
                  {sizeGuide.map((row) => (
                    <div role="row" key={row.size}>
                      <strong role="cell">{row.size}</strong>
                      <span role="cell">Brust {row.chest}</span>
                      <span role="cell">Länge {row.length}</span>
                    </div>
                  ))}
                </div>
              </details>

              <div className="review-snippets" aria-label="Kundenstimmen">
                {reviewSnippets.map((review) => (
                  <article key={review.name}>
                    <span>
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </span>
                    <p>{review.text}</p>
                    <strong>{review.name}</strong>
                  </article>
                ))}
              </div>

              <div className="related-products" aria-label="Dazu passende Produkte">
                <strong>Dazu passt</strong>
                {relatedProducts.map((product) => (
                  <button key={product.id} onClick={() => handleSelectProduct(product)}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <span>
                      <em>{product.badge}</em>
                      {product.name}
                    </span>
                    <b>{formatPrice(product.price)}</b>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="collaboration-section" id="collab">
          <div className="collaboration-copy">
            <span className="eyebrow neon">Arbeite mit uns zusammen</span>
            <h2>Kunst gehört nicht in die Schublade. Bring sie auf Stoff.</h2>
            <p>
              Be Different sucht Menschen mit Haltung, Stil und Reibung: Designer, Künstler,
              Unternehmer oder einfach jemanden mit einer verrückten Idee. Wenn dein Motiv Fragen
              auslöst, Humor hat oder den Zeitgeist kratzt, kann daraus ein Drop entstehen.
            </p>
            <div className="collaboration-manifest">
              <strong>Wir suchen keine glatten Bewerbungen.</strong>
              <span>Wir suchen Blickwinkel, die hängen bleiben.</span>
            </div>
          </div>

          <div className="collaboration-grid" aria-label="Gesuchte Kooperationsprofile">
            {collaborationRoles.map((role, index) => (
              <article key={role.title}>
                {index === 0 && <Sparkles size={22} />}
                {index === 1 && <Eye size={22} />}
                {index === 2 && <Zap size={22} />}
                {index === 3 && <Flame size={22} />}
                <strong>{role.title}</strong>
                <p>{role.text}</p>
              </article>
            ))}
          </div>

          <form className="collaboration-form" onSubmit={handleCollaborationSubmit}>
            <div>
              <span className="eyebrow">Bewerbung</span>
              <h3>Zeig uns, was nicht normal ist.</h3>
            </div>
            <label>
              Name / Künstlername
              <input type="text" name="name" placeholder="Dein Name" required />
            </label>
            <label>
              E-Mail
              <input type="email" name="email" placeholder="artist@beispiel.de" required />
            </label>
            <label>
              Ich bin
              <select
                value={collaborationRole}
                onChange={(event) => setCollaborationRole(event.target.value)}
              >
                {collaborationRoles.map((role) => (
                  <option key={role.title}>{role.title}</option>
                ))}
              </select>
            </label>
            <label>
              Idee / Portfolio / Link
              <textarea
                name="idea"
                rows={4}
                placeholder="Beschreib kurz dein Motiv, deine Kunst, dein Portfolio oder den Gedanken hinter deiner Idee."
                required
              />
            </label>
            <label className="consent-line collaboration-consent">
              <input type="checkbox" required />
              <span>
                Ich stimme zu, dass meine Angaben zur Prüfung einer Kooperation verarbeitet werden.
                Einzelheiten stehen in der Datenschutzerklärung; die Einwilligung kann jederzeit
                mit Wirkung für die Zukunft widerrufen werden.
              </span>
            </label>
            <button className="primary-button" type="submit">
              <Sparkles size={18} />
              Bewerbung vormerken
            </button>
            {collaborationSubmitted && (
              <p className="form-success">
                Bewerbung vorgemerkt. Im Live-Shop wird das Formular mit E-Mail-Versand,
                Datenschutzlink und Spam-Schutz verbunden.
              </p>
            )}
          </form>
        </section>

        <section className="drop-section" id="drops">
          <div className="drop-copy">
            <span className="eyebrow">Neue Drops</span>
            <h2>Designs, die erst stören und dann bleiben.</h2>
            <p>
              Minimalistisch, kontrastreich, surreal. Jedes Motiv braucht einen Gegner, einen
              Witz und genug Wahrheit, damit man zweimal hinschaut.
            </p>
            <div className="campaign-tags">
              {campaignIdeas.map((idea) => (
                <span key={idea}>{idea}</span>
              ))}
            </div>
          </div>
          <div className="drop-marquee" aria-label="Design Vorschau">
            {dropDesigns.map((design) => (
              <div className="drop-tile" key={design}>
                <img src={design} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div>
            <span className="eyebrow">3-Step Kauf-Flow</span>
            <h2>Social-Traffic rein. Kauf raus.</h2>
          </div>
          <ol className="steps">
            <li>
              <strong>1. Motiv knallt</strong>
              <span>Hero, Bestseller und Drop-Status sind sofort sichtbar.</span>
            </li>
            <li>
              <strong>2. Variante sitzt</strong>
              <span>Größe, Farbe, Preis und Trust ohne Suche.</span>
            </li>
            <li>
              <strong>3. Checkout zieht</strong>
              <span>Cart-Drawer, Free-Shipping-Ziel und schnelle Zahlung.</span>
            </li>
          </ol>
        </section>

        <section className="stack-section" id="system">
          <div className="stack-heading">
            <span className="eyebrow neon">Smart Shop System</span>
            <h2>WordPress-Look. WooCommerce-Power.</h2>
            <p>
              Für Umsatz zählt ein System, das du pflegen kannst: WordPress für Content,
              WooCommerce für Produkte und Checkout, HPOS für saubere Order-Performance.
            </p>
          </div>
          <div className="stack-grid">
            {shopStack.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="checkout-section" id="checkout">
          <div className="checkout-intro">
            <span className="eyebrow">Checkout</span>
            <h2>Alles führt zum Abschluss.</h2>
            <p>
              Der finale Shop läuft über WooCommerce: Produkt wählen, Variante prüfen,
              Zahlungsart auswählen und ohne Reibung abschließen.
            </p>
          </div>
          <div className="checkout-grid">
            <div className="checkout-panel">
              <div className="checkout-step active">
                <PackageCheck size={22} />
                <div>
                  <strong>1. Warenkorb</strong>
                  <span>{cartCount > 0 ? `${cartCount} Artikel gewählt` : 'Noch leer'}</span>
                </div>
              </div>
              <div className="checkout-step">
                <Truck size={22} />
                <div>
                  <strong>2. Versand</strong>
                  <span>POD, Stock oder Limited Runs</span>
                </div>
              </div>
              <div className="checkout-step">
                <CreditCard size={22} />
                <div>
                  <strong>3. Zahlung</strong>
                  <span>PayPal, Stripe, Apple Pay, Google Pay, Klarna</span>
                </div>
              </div>
            </div>
            <div className="order-summary">
              <strong>Bestellübersicht</strong>
              <div>
                <span>Zwischensumme</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div>
                <span>Versand</span>
                <span>{shipping === 0 ? 'Kostenlos' : formatPrice(shipping)}</span>
              </div>
              <div className="summary-total">
                <span>Gesamt</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button className="primary-button" disabled={cartCount === 0}>
                <LockKeyhole size={18} />
                Zur Kasse
              </button>
            </div>
          </div>
        </section>

        <section className="section info-section" id="faq">
          <div className="faq-block">
            <span className="eyebrow">FAQ</span>
            <h2>Einwände vor dem Kauf killen.</h2>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="shipping-card">
            <Truck size={24} />
            <strong>Recht & Vertrauen</strong>
            <p>
              Pflichttexte müssen vor dem Kauf erreichbar sein: Impressum, Datenschutz, AGB,
              Widerruf, Versandkosten, Zahlungsarten und Cookie Consent.
            </p>
            <ul>
              <li>
                <Check size={15} /> Keine Tracking-Cookies ohne Consent
              </li>
              <li>
                <Check size={15} /> Preisangaben inkl. Steuerhinweis
              </li>
              <li>
                <Check size={15} /> Widerruf und Rückgabe klar erreichbar
              </li>
            </ul>
          </aside>
        </section>

        <section className="newsletter">
          <img src={brandDropImage} alt="be-different Sammlung" loading="lazy" />
          <div>
            <span className="eyebrow neon">Drop Alert</span>
            <h2>Verpass keinen Drop.</h2>
            <p>
              Neue Motive, Community-Votes und Limited Runs. Nur nach Einwilligung, jederzeit
              abmeldbar, keine versteckte Datenakrobatik.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="statement@beispiel.de" aria-label="E-Mail Adresse" required />
              <label className="consent-line newsletter-consent">
                <input type="checkbox" required />
                <span>
                  Ich willige in Drop- und Angebots-E-Mails ein. Die Abmeldung ist jederzeit möglich;
                  Einzelheiten stehen in der Datenschutzerklärung.
                </span>
              </label>
              <button className="primary-button" type="submit">
                <Sparkles size={18} />
                Aktivieren
              </button>
            </form>
            {newsletterSubmitted && (
              <p className="form-success">
                In der Vorschau gespeichert. Im Live-Shop wird die Anmeldung erst nach Double-Opt-in wirksam.
              </p>
            )}
          </div>
        </section>
          </>
        )}
      </main>

      {(!cookieConsent || cookieSettingsOpen) && (
        <section className="consent-panel" role="dialog" aria-labelledby="consent-title">
          <div className="consent-copy">
            <span className="eyebrow">Privatsphäre-Einstellungen</span>
            <h2 id="consent-title">Sie entscheiden, was geladen wird.</h2>
            <p>
              Notwendige Speicherungen halten Warenkorb, Sicherheit und Ihre Auswahl funktionsfähig.
              Analyse und Marketing bleiben bis zu Ihrer freiwilligen Einwilligung aus. Diese Vorschau
              lädt derzeit keine optionalen Tracking-Skripte.
            </p>
            <button
              className="inline-link-button"
              type="button"
              onClick={() => {
                saveCookieConsent(false, false);
                navigateLegal('datenschutz');
              }}
            >
              Datenschutzerklärung öffnen
            </button>
          </div>
          <div className="consent-options">
            <label>
              <input type="checkbox" checked disabled />
              <span><strong>Notwendig</strong> Immer aktiv</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={analyticsConsent}
                onChange={(event) => setAnalyticsConsent(event.target.checked)}
              />
              <span><strong>Analyse</strong> Reichweite und Nutzung verstehen</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(event) => setMarketingConsent(event.target.checked)}
              />
              <span><strong>Marketing</strong> Kampagnen und personalisierte Werbung</span>
            </label>
          </div>
          <div className="consent-actions">
            <button className="secondary-button" type="button" onClick={() => saveCookieConsent(false, false)}>
              Nur notwendige
            </button>
            <button className="secondary-button" type="button" onClick={() => saveCookieConsent(analyticsConsent, marketingConsent)}>
              Auswahl speichern
            </button>
            <button className="primary-button" type="button" onClick={() => saveCookieConsent(true, true)}>
              Alles akzeptieren
            </button>
          </div>
        </section>
      )}

      <footer className="site-footer">
        <div className="footer-brand-block">
          <span className="footer-logo-crop">
            <img src={differentMindLogo} alt="Different Mind" />
          </span>
          <div className="social-links" aria-label="Social Media">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                className="social-link"
                href={href}
                key={label}
                aria-label={`${label} öffnen`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={18} strokeWidth={2.2} />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer Navigation">
          <a
            href="#/shop"
            onClick={(event) => {
              event.preventDefault();
              navigateShop();
            }}
          >
            Shop
          </a>
          <a href="#drops" onClick={(event) => { event.preventDefault(); navigateHome('drops'); }}>
            Drops
          </a>
          <a href="#collab" onClick={(event) => { event.preventDefault(); navigateHome('collab'); }}>
            Mitmachen
          </a>
          <a href="#produkt" onClick={(event) => { event.preventDefault(); navigateHome('produkt'); }}>
            Größentabelle
          </a>
          <a
            className="withdrawal-link"
            href="#/widerruf"
            onClick={(event) => {
              event.preventDefault();
              navigateWithdrawal();
            }}
          >
            Vertrag widerrufen
          </a>
          {legalPages.map((page) => (
            <a
              href={`#/${page.slug}`}
              key={page.slug}
              onClick={(event) => {
                event.preventDefault();
                navigateLegal(page.slug);
              }}
            >
              {page.label}
            </a>
          ))}
          <button className="footer-text-button" type="button" onClick={openCookieSettings}>
            Cookie-Einstellungen
          </button>
        </nav>
        <button
          className="back-to-top"
          aria-label="Nach oben"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={20} />
        </button>
      </footer>

      {route === 'home' && (
        <div className="mobile-buy-bar">
          <span>{selectedProduct.name}</span>
          <button onClick={() => addProduct(selectedProduct, selectedSize, selectedColor)}>
            <ShoppingBag size={18} />
            {formatPrice(selectedProduct.price)}
          </button>
        </div>
      )}

      {cartOpen && (
        <div className="drawer-backdrop" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
            <div className="drawer-heading">
              <div>
                <span className="eyebrow">Warenkorb</span>
                <strong>{cartCount} Artikel</strong>
              </div>
              <button aria-label="Warenkorb schließen" onClick={() => setCartOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <ShoppingBag size={32} />
                <strong>Dein Warenkorb ist leer.</strong>
                <button className="primary-button" onClick={() => setCartOpen(false)}>
                  Weiter shoppen
                </button>
              </div>
            ) : (
              <>
                <div className="free-shipping">
                  <div>
                    <span>
                      {subtotal >= freeShippingThreshold
                        ? 'Kostenloser Versand erreicht.'
                        : `Noch ${formatPrice(freeShippingThreshold - subtotal)} bis kostenloser Versand.`}
                    </span>
                    <strong>{formatPrice(subtotal)}</strong>
                  </div>
                  <div className="progress-track">
                    <span style={{ width: `${progressToFreeShipping}%` }} />
                  </div>
                </div>

                <div className="cart-lines">
                  {cartItems.map((item) => (
                    <article className="cart-line" key={item.key}>
                      <img src={item.product.image} alt={item.product.name} />
                      <div>
                        <strong>{item.product.name}</strong>
                        <span>
                          {item.size} / {item.color}
                        </span>
                        <div className="line-controls">
                          <button
                            aria-label="Menge reduzieren"
                            onClick={() => updateQuantity(item.key, -1)}
                          >
                            <Minus size={15} />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            aria-label="Menge erhöhen"
                            onClick={() => updateQuantity(item.key, 1)}
                          >
                            <Plus size={15} />
                          </button>
                          <button
                            aria-label="Artikel entfernen"
                            onClick={() => removeItem(item.key)}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                      <strong>{formatPrice(item.product.price * item.quantity)}</strong>
                    </article>
                  ))}
                </div>

                <div className="drawer-summary">
                  <div>
                    <span>Zwischensumme</span>
                    <strong>{formatPrice(subtotal)}</strong>
                  </div>
                  <div>
                    <span>Versand</span>
                    <strong>{shipping === 0 ? 'Kostenlos' : formatPrice(shipping)}</strong>
                  </div>
                  <button className="primary-button" onClick={jumpToCheckout}>
                    <LockKeyhole size={18} />
                    Checkout starten
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {filterOpen && (
        <div className="sheet-backdrop" onClick={() => setFilterOpen(false)}>
          <aside className="filter-sheet" onClick={(event) => event.stopPropagation()}>
            <div className="sheet-heading">
              <strong>Filter</strong>
              <button aria-label="Filter schließen" onClick={() => setFilterOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="sheet-options">
              {categories.map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? 'active' : ''}
                  onClick={() => {
                    setActiveCategory(category);
                    setFilterOpen(false);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default App;
