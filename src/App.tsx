import { useMemo, useState } from 'react';
import {
  BadgePercent,
  Check,
  ChevronRight,
  CreditCard,
  Eye,
  Flame,
  Heart,
  LockKeyhole,
  Menu,
  Minus,
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
  X,
  Zap,
} from 'lucide-react';
import {
  brandDropImage,
  brandPillars,
  campaignIdeas,
  dropDesigns,
  faqItems,
  heroImage,
  legalLinks,
  Product,
  products,
  proofPoints,
  shopStack,
} from './data/products';

const categories = ['Alle', 'Statement Shirts', 'Animal Art', 'Custom Drops'] as const;
const freeShippingThreshold = 75;

type CartItem = {
  key: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

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
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Alle');
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[1]);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'Alle') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= freeShippingThreshold ? 0 : 4.9;
  const total = subtotal + shipping;
  const progressToFreeShipping = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const topProduct = products[0];

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[1] ?? product.sizes[0]);
    setSelectedColor(product.colors[0]);
    document.getElementById('produkt')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <div className="announcement">
        <span>Drop 01 ist offen</span>
        <span>Be different - be better - be you</span>
        <span>Free shipping ab {formatPrice(freeShippingThreshold)}</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="be-different Startseite">
          <span>be</span>
          <strong>different</strong>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Hauptnavigation">
          <a href="#shop" onClick={() => setMenuOpen(false)}>
            Shop
          </a>
          <a href="#drops" onClick={() => setMenuOpen(false)}>
            Drops
          </a>
          <a href="#brand" onClick={() => setMenuOpen(false)}>
            Brand
          </a>
          <a href="#system" onClick={() => setMenuOpen(false)}>
            Stack
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
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
            aria-label={menuOpen ? 'Menue schliessen' : 'Menue oeffnen'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-content">
            <span className="eyebrow neon">Street-Art Fashion / POD Drop 01</span>
            <h1>
              Be different.
              <span>Be better.</span>
              <em>Be you.</em>
            </h1>
            <p>
              Kontrastreiche Statement-Shirts fuer Menschen, die nicht aussehen wollen wie der
              Feed von allen anderen.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#shop">
                Drop shoppen <ChevronRight size={19} />
              </a>
              <button className="secondary-button" onClick={() => addProduct(topProduct)}>
                <Flame size={18} />
                Bestseller sichern
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
                <RotateCcw size={17} /> Rueckgabe vorbereitet
              </span>
            </div>
          </div>
          <div className="hero-product">
            <span>{topProduct.dropStatus}</span>
            <img src={topProduct.image} alt={topProduct.name} />
            <button onClick={() => addProduct(topProduct)}>
              <ShoppingBag size={18} />
              {formatPrice(topProduct.price)}
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
            <h2>Gegensaetze verkaufen besser, wenn sie sofort verstanden werden.</h2>
            <p>
              Be Different verbindet Street-Art, Humor, Widerspruch und tragbare Motive. Die
              Seite muss deshalb schnell sein, laut aussehen und trotzdem ohne Reibung verkaufen.
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
              <span>Groesse</span>
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
          </div>
        </section>

        <section className="drop-section" id="drops">
          <div className="drop-copy">
            <span className="eyebrow">Neue Drops</span>
            <h2>Designs, die erst stoeren und dann bleiben.</h2>
            <p>
              Aus der CI: minimalistisch, kontrastreich, surreal, Street-Art. Jedes Motiv braucht
              einen Gegenpol, einen Witz und einen Grund, warum man zweimal hinschaut.
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
              <span>Groesse, Farbe, Preis und Trust ohne Suche.</span>
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
              Fuer Umsatz zaehlt ein System, das du pflegen kannst: WordPress fuer Content,
              WooCommerce fuer Produkte und Checkout, HPOS fuer saubere Order-Performance.
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
            <h2>Alles fuehrt zum Abschluss.</h2>
            <p>
              Der Prototyp ist auf WooCommerce als Commerce-Core ausgerichtet: Produkte,
              Varianten, Warenkorb, Checkout Blocks und POD/Stock-Fulfillment werden als naechster
              Schritt angebunden.
            </p>
          </div>
          <div className="checkout-grid">
            <div className="checkout-panel">
              <div className="checkout-step active">
                <PackageCheck size={22} />
                <div>
                  <strong>1. Warenkorb</strong>
                  <span>{cartCount > 0 ? `${cartCount} Artikel gewaehlt` : 'Noch leer'}</span>
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
              <strong>Bestelluebersicht</strong>
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
            <h2>Einwaende vor dem Kauf killen.</h2>
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
            <strong>Launch-Ready Pflichtblock</strong>
            <p>
              Vor Livegang: Impressum, Datenschutz, AGB, Widerruf, Cookie Consent,
              MwSt.-Hinweise, Versandhinweise und Produktdaten finalisieren.
            </p>
            <ul>
              <li>
                <Check size={15} /> Mobile Checkout zuerst testen
              </li>
              <li>
                <Check size={15} /> Pixel-Events validieren
              </li>
              <li>
                <Check size={15} /> POD-Fulfillment synchronisieren
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
              Neue Motive, Community-Votes, Limited Runs und Aktionen direkt in dein Postfach.
              Kurz. Laut. Relevant.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="deine@email.de" aria-label="E-Mail Adresse" />
              <button className="primary-button" type="submit">
                <Sparkles size={18} />
                Aktivieren
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <strong>be-different</strong>
        <nav aria-label="Footer Navigation">
          <a href="#shop">Shop</a>
          <a href="#drops">Drops</a>
          <a href="#produkt">Groessentabelle</a>
          {legalLinks.map((link) => (
            <a href="#faq" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </footer>

      <div className="mobile-buy-bar">
        <span>{selectedProduct.name}</span>
        <button onClick={() => addProduct(selectedProduct, selectedSize, selectedColor)}>
          <ShoppingBag size={18} />
          {formatPrice(selectedProduct.price)}
        </button>
      </div>

      {cartOpen && (
        <div className="drawer-backdrop" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
            <div className="drawer-heading">
              <div>
                <span className="eyebrow">Warenkorb</span>
                <strong>{cartCount} Artikel</strong>
              </div>
              <button aria-label="Warenkorb schliessen" onClick={() => setCartOpen(false)}>
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
                            aria-label="Menge erhoehen"
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
              <button aria-label="Filter schliessen" onClick={() => setFilterOpen(false)}>
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
