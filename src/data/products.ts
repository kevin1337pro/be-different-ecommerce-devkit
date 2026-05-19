export type Product = {
  id: string;
  name: string;
  category: 'Statement Shirts' | 'Animal Art' | 'Custom Drops';
  price: number;
  compareAtPrice?: number;
  badge: string;
  image: string;
  design: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  shortClaim: string;
  description: string;
  material: string;
  fit: string;
  print: string;
  shippingNote: string;
  dropStatus: string;
};

export type CollectionDesign = {
  id: string;
  title: string;
  line: string;
  badge: string;
  image: string;
  productId: Product['id'];
};

export type CampaignPoster = {
  title: string;
  line: string;
  image: string;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const heroImage = asset(
  'assets/hero/website-background-2-background-for-an-t-shirt-shop-c8302e20-e774-4efd-b4bf-c61028bdaebe.jpg',
);
export const heroEyecatcherImage = asset('assets/hero/eyecatcher.jpeg');

export const brandDropImage = asset('assets/brand/new-be-different-sammlung.png');
export const campaignHeroImage = asset('assets/campaign/mona-lisa-vermummt.jpeg');

export const products: Product[] = [
  {
    id: 'cat-rebel',
    name: 'Cat Rebel Shirt',
    category: 'Animal Art',
    price: 34.9,
    compareAtPrice: 44.9,
    badge: 'Bestseller',
    image:
      asset('assets/products/produktbildreihe2-1-cat-t-shirt-mockup-white-sideview-399d4b8a-bb89-42d3-98b9-8e1f7b5f9321.jpg'),
    design: asset('assets/designs/hip-hop-cat.png'),
    colors: ['White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 128,
    shortClaim: 'Hund? Katze? Egal. Hauptsache, du passt in keine Schublade.',
    description:
      'Cat Rebel ist der be-different Klassiker für alle, die Widerspruch mit Humor tragen. Das Motiv kippt Erwartungen, spielt mit Labels und macht aus einem Shirt eine kleine Rebellion auf Stoff.',
    material: '100% Baumwolle',
    fit: 'Regular Fit',
    print: 'DTG Premiumdruck',
    shippingNote: 'Produktion für dich, Versand in wenigen Werktagen',
    dropStatus: 'Drop 01: Catdog Core',
  },
  {
    id: 'whale-ink',
    name: 'Whale Ink Shirt',
    category: 'Statement Shirts',
    price: 32.9,
    badge: 'Neu',
    image:
      asset('assets/products/produktreihe2-2-kev1337-t-shirt-mockup-professional-studio-shot-8bd113b1-dd13-437a-9082-4e.jpg'),
    design: asset('assets/designs/01-whale-head-black-ink-on-white-background.png'),
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.8,
    reviews: 94,
    shortClaim: 'Schwarz, schwer, wach. Ein Motiv wie ein Gedanke, der bleibt.',
    description:
      'Whale Ink verbindet dunkle Tattoo-Ästhetik mit ruhiger Streetwear-Fläche. Minimal genug für Alltag, intensiv genug für Menschen, die nicht dekorieren, sondern ein Zeichen setzen.',
    material: '100% Baumwolle',
    fit: 'Regular Fit',
    print: 'Feiner Motivdruck',
    shippingNote: 'Produktion für dich, Versand in wenigen Werktagen',
    dropStatus: 'Monochrome Capsule',
  },
  {
    id: 'sheep-street',
    name: 'Schaf Street Shirt',
    category: 'Animal Art',
    price: 34.9,
    compareAtPrice: 42.9,
    badge: 'Limited',
    image: asset('assets/products/produktreihe2-schaf-1.jpg'),
    design:
      asset('assets/designs/design2-peace-sign-banksy-style-white-background-vektor-v6-mit-schrift.png'),
    colors: ['White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviews: 73,
    shortClaim: 'Friedlich aussehen. Unbequem wirken. Genau der Punkt.',
    description:
      'Schaf Street nutzt den scheinbar harmlosen Look als Tarnung für Haltung. Erst wirkt es verspielt, dann bleibt die Frage: Wer folgt hier eigentlich wem?',
    material: '100% Baumwolle',
    fit: 'Regular Fit',
    print: 'DTG Premiumdruck',
    shippingNote: 'Produktion für dich, Versand in wenigen Werktagen',
    dropStatus: 'Limited Street Run',
  },
  {
    id: 'open-brief',
    name: 'Deine Idee Drop',
    category: 'Custom Drops',
    price: 39.9,
    badge: 'Community',
    image:
      asset('assets/products/deine-ideen-via-insta-shirt-for-black-and-white-tshirts-modern-background-4fb73e0f-692d-42.png'),
    design: asset('assets/designs/guardian-of-weed.png'),
    colors: ['Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 41,
    shortClaim: 'Deine Idee. Unser Drop. Kein Design für die breite Mitte.',
    description:
      'Der Community Drop sammelt Widersprüche aus echten Gesprächen, Votes und Kommentaren. Was genug Reibung erzeugt, wird zum Motiv. Was zu glatt ist, bleibt draußen.',
    material: '100% Baumwolle',
    fit: 'Regular Fit',
    print: 'Motivdruck nach Drop-Auswahl',
    shippingNote: 'Produktion für dich, Versand in wenigen Werktagen',
    dropStatus: 'Community Vote',
  },
];

export const brandPillars = [
  {
    title: 'Kreativ',
    text: 'Gegensätze, surrealer Humor und Motive, die sofort auffallen.',
  },
  {
    title: 'Rebellisch',
    text: 'Street-Art-Energie, kritisches Denken und eine klare Haltung gegen Gleichförmigkeit.',
  },
  {
    title: 'Persönlich',
    text: 'Mode als Ausdruck von Individualität, nicht als Uniform für alle.',
  },
];

export const proofPoints = [
  { value: '50+', label: 'Motive aus Kontrast, Humor und Haltung' },
  { value: '3', label: 'Entdecken. Wählen. Tragen.' },
  { value: '24/7', label: 'Drop-Alarm für Menschen mit Meinung' },
  { value: 'POD', label: 'Produktion erst, wenn ein Statement gewählt wird' },
];

export const campaignIdeas = [
  'Guess what is different?',
  'Elefant oder Maus?',
  'Normal war gestern.',
  'Wo Hund Katze sagt.',
];

export const campaignPosters: CampaignPoster[] = [
  {
    title: 'Schubladen sind für Möbel.',
    line: 'Nicht für Menschen mit Ecken, Kanten und Meinung.',
    image: asset('assets/campaign/stop.png'),
  },
  {
    title: 'Sag nichts. Trag es trotzdem.',
    line: 'Kleidung als Stimme für das, was im Raum steht.',
    image: asset('assets/campaign/hand-v2.png'),
  },
  {
    title: 'Normal ist langweilig.',
    line: 'Eine Einladung an alle, die nicht glattgebügelt leben.',
    image: asset('assets/campaign/walk.png'),
  },
  {
    title: 'Widerspruch steht dir.',
    line: 'Zwischen Lachen und Ernst beginnt Haltung.',
    image: asset('assets/campaign/rotkelchen.png'),
  },
];

export const shopStack = [
  {
    label: 'CMS + Storefront',
    value: 'WordPress Block Theme',
    text: 'Flexible Content-Pflege, starke Landingpages und ein eigenes be-different Theme.',
  },
  {
    label: 'Commerce Core',
    value: 'WooCommerce + HPOS',
    text: 'Produkte, Varianten, Cart, Checkout, Zahlungen, Steuern und Fulfillment direkt in WordPress.',
  },
  {
    label: 'Conversion',
    value: 'Cart & Checkout Blocks',
    text: 'Moderner Block-Checkout, schneller Cart-Flow und WooCommerce-kompatible Erweiterungen.',
  },
  {
    label: 'Marketing',
    value: 'Woo + GA4 + Meta + TikTok',
    text: 'Events, Remarketing, Newsletter, Abbruchstrecken und Drop-Alerts über WordPress integrieren.',
  },
];

export const faqItems = [
  {
    question: 'Wie lange dauert der Versand?',
    answer:
      'Die Produkte werden für dich produziert. Plane für Produktion und Versand wenige Werktage ein.',
  },
  {
    question: 'Wie fallen die Größen aus?',
    answer:
      'Die Shirts sind als Regular Fit geplant. Zwischen zwei Größen empfehlen wir die größere Variante.',
  },
  {
    question: 'Kann ich zurücksenden?',
    answer:
      'Ja. Für Verbraucherinnen und Verbraucher wird der Widerruf im finalen Shop klar erklärt. Personalisierte oder individuell angefertigte Produkte können rechtlich gesondert behandelt werden.',
  },
  {
    question: 'Welche Zahlungsarten gibt es?',
    answer:
      'Geplant sind Karte, PayPal, Apple Pay, Google Pay und optional Klarna. Im Live-Shop werden nur aktivierte Zahlungsarten angezeigt.',
  },
  {
    question: 'Warum Print-on-Demand zum Start?',
    answer:
      'POD reduziert Lagerdruck, erlaubt schnelle Motivtests und macht aus guten Designs später Stock- oder Limited-Runs.',
  },
  {
    question: 'Was macht be-different anders?',
    answer:
      'Die Marke arbeitet mit Gegensätzen, Street-Art-Optik, Humor und kritischem Nachdenken statt austauschbarer Basic-Ware.',
  },
  {
    question: 'Was passiert mit meinen Daten?',
    answer:
      'Im finalen Shop werden nur Daten verarbeitet, die für Bestellung, Zahlung, Versand, Support, Consent und rechtliche Pflichten erforderlich sind. Details stehen in der Datenschutzerklärung.',
  },
];

export const dropDesigns = [
  asset('assets/designs/black-cat.png'),
  asset('assets/designs/elefant-muecke.png'),
  asset('assets/designs/01-whale-head-black-ink-on-white-background.png'),
  asset('assets/designs/guy-with-hoody-and-heart.png'),
  asset('assets/designs/young-girl-with-rope-transparent.png'),
  asset('assets/designs/black-ink.png'),
];

export const shadowCollection: CollectionDesign[] = [
  {
    id: 'shadow-cat',
    title: 'Cool Cat',
    line: 'Sonnenbrille, Street-Art, sofortiger Stopper.',
    badge: 'Eyecatcher',
    image: asset('assets/designs/black-cat.png'),
    productId: 'cat-rebel',
  },
  {
    id: 'shadow-elephant',
    title: 'Elefant / Mücke',
    line: 'Gross gegen klein, leise gegen laut.',
    badge: 'Kontrastmotiv',
    image: asset('assets/designs/elefant-muecke.png'),
    productId: 'open-brief',
  },
  {
    id: 'shadow-whale',
    title: 'Whale Ink',
    line: 'Monochrom, schwer, premium auf Shirt.',
    badge: 'Tattoo Energy',
    image: asset('assets/designs/01-whale-head-black-ink-on-white-background.png'),
    productId: 'whale-ink',
  },
  {
    id: 'shadow-heart',
    title: 'Hoodie Heart',
    line: 'Hartes Bild, weicher Kern.',
    badge: 'Limited',
    image: asset('assets/designs/guy-with-hoody-and-heart.png'),
    productId: 'open-brief',
  },
  {
    id: 'shadow-flower',
    title: 'Flower Kid',
    line: 'Still, emotional, anders als erwartet.',
    badge: 'Soft Rebel',
    image: asset('assets/designs/young-girl-with-rope-transparent.png'),
    productId: 'sheep-street',
  },
  {
    id: 'shadow-frame',
    title: 'Black Ink Frame',
    line: 'Rohes Print-Element für Drop-Layouts.',
    badge: 'Graphic Tool',
    image: asset('assets/designs/black-ink.png'),
    productId: 'open-brief',
  },
  {
    id: 'shadow-guardian',
    title: 'Guardian',
    line: 'Figur, Haltung, klare Kante.',
    badge: 'Statement',
    image: asset('assets/designs/guardian-of-weed.png'),
    productId: 'open-brief',
  },
  {
    id: 'shadow-catdog',
    title: 'Catdog Core',
    line: 'Bestseller-Logik für den ersten Drop.',
    badge: 'Bestseller',
    image: asset('assets/designs/hip-hop-cat.png'),
    productId: 'cat-rebel',
  },
];
