import { type FormEvent, useEffect, useMemo, useState } from 'react';
import {
  BadgePercent,
  Check,
  ChevronRight,
  CreditCard,
  Eye,
  Facebook,
  Flame,
  Heart,
  Instagram,
  LockKeyhole,
  Menu,
  Minus,
  Music2,
  PackageCheck,
  Plus,
  Radio,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Trash2,
  Truck,
  Twitter,
  X,
  Zap,
  Youtube,
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
  legalLinks,
  legalSections,
  Product,
  products,
  proofPoints,
  shadowCollection,
  shopStack,
} from './data/products';
import earlyAccessImage from '../assets/image_pop_up_1.png';

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
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: Instagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/', Icon: Music2 },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: Youtube },
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: Facebook },
  { label: 'X', href: 'https://x.com/', Icon: Twitter },
];
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

type AppRoute = 'home' | 'shop';
type ShopCategory = (typeof shopCategories)[number];
type ShopColor = (typeof shopColors)[number];
type ShopSize = (typeof shopSizes)[number];
type ShopSort = (typeof shopSortOptions)[number]['value'];

function formatPrice(value: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
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
          {product.compareAtPrice && <span>{formatPrice(product.compareAtPrice)}</span>}
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
  const [route, setRoute] = useState<AppRoute>(() =>
    window.location.hash === '#/shop' ? 'shop' : 'home',
  );
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
      return Number(Boolean(b.compareAtPrice)) - Number(Boolean(a.compareAtPrice));
    });
  }, [shopCategory, shopColor, shopQuery, shopSize, shopSort]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= freeShippingThreshold ? 0 : 4.9;
  const total = subtotal + shipping;
  const progressToFreeShipping = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const topProduct = products[0];
  const currentHeroSlide = heroSlides[activeHeroSlide];
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
    if (route !== 'home' || window.sessionStorage.getItem('bd-early-access-closed') === 'true') {
      return undefined;
    }

    const timer = window.setTimeout(() => setEarlyAccessOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, [route]);

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
      setRoute(window.location.hash === '#/shop' ? 'shop' : 'home');
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
    const shouldWaitForHomeRender = route === 'shop';

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
                        jederzeit möglich.
                      </span>
                    </label>

                    <button className="primary-button" type="submit">
                      <Sparkles size={18} />
                      Jetzt Early Access sichern
                    </button>
                  </form>

                  <small>
                    Double-Opt-in, Anbieter, Datenschutzhinweise und Abmeldelink werden im Live-Shop
                    mit dem finalen Newsletter-Tool ergänzt.
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
          <span>be</span>
          <strong>different</strong>
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

      <main id={route === 'shop' ? 'shop-page' : 'home'}>
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
              {selectedProduct.compareAtPrice && <span>{formatPrice(selectedProduct.compareAtPrice)}</span>}
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
                Details werden in der finalen Datenschutzerklärung ergänzt.
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

        <section className="legal-section" id="legal">
          <div className="legal-heading">
            <span className="eyebrow neon">DSGVO & Shop-Recht</span>
            <h2>Rebellisch im Look. Sauber im Kleingedruckten.</h2>
            <p>
              Die Texte sind als Launch-Vorlage vorbereitet. Alle Felder in geschweiften Klammern
              müssen vor Veröffentlichung mit echten Angaben gefüllt und rechtlich geprüft werden.
            </p>
          </div>
          <div className="legal-grid">
            {legalSections.map((section) => (
              <article key={section.title}>
                <span>{section.kicker}</span>
                <strong>{section.title}</strong>
                <p>{section.intro}</p>
                <ul>
                  {section.placeholders.map((placeholder) => (
                    <li key={placeholder}>{placeholder}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
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
            <form className="newsletter-form">
              <input type="email" placeholder="statement@beispiel.de" aria-label="E-Mail Adresse" />
              <button className="primary-button" type="submit">
                <Sparkles size={18} />
                Aktivieren
              </button>
            </form>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-brand-block">
          <strong>be-different</strong>
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
          {legalLinks.map((link) => (
            <a href="#legal" key={link} onClick={(event) => { event.preventDefault(); navigateHome('legal'); }}>
              {link}
            </a>
          ))}
        </nav>
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
