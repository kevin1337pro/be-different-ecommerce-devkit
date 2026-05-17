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

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const heroImage = asset(
  'assets/hero/website-background-2-background-for-an-t-shirt-shop-c8302e20-e774-4efd-b4bf-c61028bdaebe.jpg',
);
export const heroEyecatcherImage = asset('assets/hero/eyecatcher.jpeg');

export const brandDropImage = asset('assets/brand/new-be-different-sammlung.png');

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
    shortClaim: 'Ein Motiv fuer alle, die Haltung mit Humor tragen.',
    description:
      'Catdog spielt mit dem Moment, in dem Erwartungen kippen. Ein Motiv fuer Menschen, die Gegensaetze nicht verstecken, sondern tragen.',
    material: '100% Baumwolle',
    fit: 'Regular Fit',
    print: 'DTG Premiumdruck',
    shippingNote: 'Produktion fuer dich, Versand in wenigen Werktagen',
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
    shortClaim: 'Schwarzweisse Energie fuer cleane Outfits.',
    description:
      'Whale Ink bringt Tattoo-Energie auf ein reduziertes Shirt. Clean genug fuer Alltag, laut genug fuer Haltung.',
    material: '100% Baumwolle',
    fit: 'Regular Fit',
    print: 'Feiner Motivdruck',
    shippingNote: 'Produktion fuer dich, Versand in wenigen Werktagen',
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
    shortClaim: 'Streetart-Vibe fuer Outfits, die nicht brav aussehen muessen.',
    description:
      'Schaf Street ist Humor mit Kante. Das Motiv wirkt erst verspielt und bleibt dann im Kopf.',
    material: '100% Baumwolle',
    fit: 'Regular Fit',
    print: 'DTG Premiumdruck',
    shippingNote: 'Produktion fuer dich, Versand in wenigen Werktagen',
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
    shortClaim: 'Community-Ideen als Drop gedacht, nicht als Massenware.',
    description:
      'Deine Idee Drop ist der direkte Draht zur Community. Ideen aus Instagram, Abstimmungen und Gegensaetze werden zu tragbaren Motiven.',
    material: '100% Baumwolle',
    fit: 'Regular Fit',
    print: 'Motivdruck nach Drop-Auswahl',
    shippingNote: 'Produktion fuer dich, Versand in wenigen Werktagen',
    dropStatus: 'Community Vote',
  },
];

export const brandPillars = [
  {
    title: 'Kreativ',
    text: 'Gegensaetze, surrealer Humor und Motive, die sofort auffallen.',
  },
  {
    title: 'Rebellisch',
    text: 'Street-Art-Energie, kritisches Denken und eine klare Haltung gegen Gleichfoermigkeit.',
  },
  {
    title: 'Persoenlich',
    text: 'Mode als Ausdruck von Individualitaet, nicht als Uniform fuer alle.',
  },
];

export const proofPoints = [
  { value: '50+', label: 'Designs als Drop-Ziel' },
  { value: '3', label: 'Schritte bis zum Kauf' },
  { value: '24/7', label: 'Shop-ready Funnel' },
  { value: 'POD', label: 'Start ohne Lagerdruck' },
];

export const campaignIdeas = [
  'Guess what is different?',
  'Elefant oder Maus?',
  'Normal war gestern.',
  'Wo Hund Katze sagt.',
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
    text: 'Events, Remarketing, Newsletter, Abbruchstrecken und Drop-Alerts ueber WordPress integrieren.',
  },
];

export const faqItems = [
  {
    question: 'Wie lange dauert der Versand?',
    answer:
      'Die Produkte werden fuer dich produziert. Plane fuer Produktion und Versand wenige Werktage ein.',
  },
  {
    question: 'Wie fallen die Groessen aus?',
    answer:
      'Die Shirts sind als Regular Fit geplant. Zwischen zwei Groessen empfehlen wir die groessere Variante.',
  },
  {
    question: 'Kann ich zuruecksenden?',
    answer:
      'Ruecksendungen werden ueber WooCommerce, Rechtstexte und klare Widerrufsablaeufe abgebildet. Vor Launch muessen alle Texte final geprueft werden.',
  },
  {
    question: 'Welche Zahlungsarten gibt es?',
    answer:
      'Im finalen Checkout sollten Karte, PayPal, Apple Pay, Google Pay und Klarna geprueft werden.',
  },
  {
    question: 'Warum Print-on-Demand zum Start?',
    answer:
      'POD reduziert Lagerdruck, erlaubt schnelle Motivtests und macht aus guten Designs spaeter Stock- oder Limited-Runs.',
  },
  {
    question: 'Was macht be-different anders?',
    answer:
      'Die Marke arbeitet mit Gegensaetzen, Street-Art-Optik, Humor und kritischem Nachdenken statt austauschbarer Basic-Ware.',
  },
];

export const legalLinks = [
  'Impressum',
  'Datenschutz',
  'AGB',
  'Widerruf',
  'Versand & Rueckgabe',
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
    title: 'Elefant / Muecke',
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
    line: 'Rohes Print-Element fuer Drop-Layouts.',
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
    line: 'Bestseller-Logik fuer den ersten Drop.',
    badge: 'Bestseller',
    image: asset('assets/designs/hip-hop-cat.png'),
    productId: 'cat-rebel',
  },
];
