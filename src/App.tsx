import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

type Product = "yaourts" | "biscuits";

const productInfo: Record<
  Product,
  { title: string; phone: string; phoneLabel: string; message: string }
> = {
  yaourts: {
    title: "Les yaourts IFEDÉ",
    phone: "0197034405",
    phoneLabel: "01 97 03 44 05",
    message: "Bonjour, je souhaite commander les yaourts Les Papilles d'IFEDÉ.",
  },
  biscuits: {
    title: "Les Langues de Chat",
    phone: "0151865514",
    phoneLabel: "01 51 86 55 14",
    message: "Bonjour, je souhaite commander des Langues de Chat.",
  },
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>("yaourts");

  const openOrder = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderOpen(true);
    setIsMenuOpen(false);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsOrderOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const selected = productInfo[selectedProduct];

  return (
    <main className="site-shell">
      <section className="hero" id="accueil">
        <img
          className="hero-image"
          src="/images/maison-gourmande-hero.jpg"
          alt="Yaourts artisanaux et biscuits langues de chat sur une table en bois"
        />
        <div className="hero-wash" />

        <header className="topbar">
          <a className="nav-mark" href="#accueil" aria-label="Retour en haut de page">
            <span className="nav-mark-dot" />
            Maison du goût
          </a>

          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#produits">Nos produits</a>
            <a href="#histoire">Notre promesse</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="menu-button" type="button" onClick={() => setIsMenuOpen(true)}>
            <Menu size={22} strokeWidth={1.8} />
            <span>Menu</span>
          </button>
        </header>

        <div className="hero-content">
          <div>
            <p className="hero-overline">Porto-Novo · Le goût qui rassemble</p>
            <h1 className="brand-title">
              Les Papilles
              <span>d&apos;IFEDÉ</span>
            </h1>
            <p className="brand-subtitle">et ses Langues de Chat</p>
          </div>

          <div className="hero-bottom-copy">
            <h2>Deux douceurs, une même envie de partager.</h2>
            <p>
              Des yaourts onctueux et des biscuits croustillants, préparés avec le soin des bonnes
              choses faites maison.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#produits">
                Découvrir nos douceurs <ArrowRight size={18} />
              </a>
              <button className="text-button" type="button" onClick={() => openOrder("yaourts")}>
                Commander <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        </div>

        <p className="hero-side-note">Fait avec coeur</p>
        <a className="scroll-cue" href="#produits" aria-label="Faire defiler vers les produits">
          <span />
          Découvrir
        </a>
      </section>

      <section className="intro-section" id="produits">
        <div className="section-heading">
          <p className="eyebrow"><Sparkles size={15} /> La maison en deux gourmandises</p>
          <h2>Tout simplement bon.</h2>
          <p>
            Une selection pensee pour les petits creux, les tables de fete et les instants que l&apos;on
            aime prolonger.
          </p>
        </div>
      </section>

      <section className="product-section yogurt-section" aria-labelledby="yogurt-title">
        <div className="product-media">
          <img
            src="/images/ifede-yogurts.jpg"
            alt="Trois yaourts artisanaux Les Papilles d'IFEDÉ"
            loading="lazy"
          />
          <span className="media-number" aria-hidden="true">01</span>
        </div>
        <div className="product-copy">
          <p className="product-kicker">Les Papilles d&apos;IFEDÉ</p>
          <h2 id="yogurt-title">Nos délicieux<br />yaourts.</h2>
          <p className="product-lede">
            Doux, frais et généreux. Le plaisir d&apos;un yaourt qui a le bon goût du fait maison.
          </p>
          <p className="flavor-line">Simple <span>·</span> Nature <span>·</span> Au couscous</p>
          <button className="button button-dark" type="button" onClick={() => openOrder("yaourts")}>
            Choisir mes yaourts <ArrowRight size={18} />
          </button>
          <p className="product-footnote">Disponibles a Porto-Novo · Pour tous vos moments</p>
        </div>
      </section>

      <section className="product-section cookie-section" aria-labelledby="cookies-title">
        <div className="product-copy cookie-copy">
          <p className="product-kicker">Petits biscuits, grands moments</p>
          <h2 id="cookies-title">Langues<br />de Chat.</h2>
          <p className="product-lede">
            Fines, dorees et irresistiblement croustillantes. Une petite attention a sortir a toute
            occasion.
          </p>
          <p className="flavor-line">En pot <span>·</span> En sachet <span>·</span> A partager</p>
          <button className="button button-red" type="button" onClick={() => openOrder("biscuits")}>
            Commander mes biscuits <ArrowRight size={18} />
          </button>
          <p className="product-footnote">Le petit plaisir qui fait toujours plaisir</p>
        </div>
        <div className="product-media cookie-media">
          <img
            src="/images/langues-de-chat.jpg"
            alt="Pot et sachet de biscuits langues de chat dores"
            loading="lazy"
          />
          <span className="media-number" aria-hidden="true">02</span>
        </div>
      </section>

      <section className="promise-section" id="histoire">
        <p className="eyebrow eyebrow-light">Notre promesse</p>
        <h2>Le bon, sans<br /><em>faire semblant.</em></h2>
        <p className="promise-lede">
          Des ingredients choisis, une preparation attentive et ce petit quelque chose qui donne
          envie de se resservir.
        </p>
        <div className="promise-list" aria-label="Nos engagements">
          <div>
            <span>01</span>
            <p>Des recettes au gout authentique</p>
          </div>
          <div>
            <span>02</span>
            <p>Des produits penses pour toute la famille</p>
          </div>
          <div>
            <span>03</span>
            <p>Des douceurs pour offrir et reunir</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-ornament" aria-hidden="true">MAISON<br />DU GOÛT</div>
        <div className="contact-content">
          <p className="eyebrow"><Sparkles size={15} /> Une envie gourmande ?</p>
          <h2>Votre commande<br />commence ici.</h2>
          <p>Appelez-nous, choisissez votre douceur et laissez le plaisir arriver jusqu&apos;a vous.</p>
          <div className="contact-actions">
            <button className="button button-red" type="button" onClick={() => openOrder("yaourts")}>
              Commander les yaourts <ArrowUpRight size={18} />
            </button>
            <button className="button button-outline" type="button" onClick={() => openOrder("biscuits")}>
              Commander les biscuits <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Les Papilles d&apos;IFEDÉ &amp; Langues de Chat</p>
        <p>Porto-Novo · Benin</p>
        <a href="#accueil">Retour en haut <ArrowUpRight size={15} /></a>
      </footer>

      {isMenuOpen && (
        <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Navigation">
          <div className="menu-panel">
            <button className="close-button" type="button" onClick={closeAll} aria-label="Fermer le menu">
              <X size={26} />
            </button>
            <p className="eyebrow">Maison du goût</p>
            <nav className="mobile-nav" aria-label="Navigation mobile">
              <a href="#produits" onClick={closeAll}>Nos produits <ArrowUpRight /></a>
              <a href="#histoire" onClick={closeAll}>Notre promesse <ArrowUpRight /></a>
              <a href="#contact" onClick={closeAll}>Nous contacter <ArrowUpRight /></a>
            </nav>
            <button className="button button-red menu-order" type="button" onClick={() => openOrder("yaourts")}>
              Passer commande <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {isOrderOpen && (
        <div className="order-overlay" role="dialog" aria-modal="true" aria-labelledby="order-title">
          <div className="order-modal">
            <button className="close-button order-close" type="button" onClick={closeAll} aria-label="Fermer">
              <X size={23} />
            </button>
            <p className="eyebrow">Passer commande</p>
            <h2 id="order-title">Quelle douceur<br />vous fait envie ?</h2>
            <div className="product-choice" role="group" aria-label="Choisir un produit">
              <button
                className={selectedProduct === "yaourts" ? "selected" : ""}
                type="button"
                onClick={() => setSelectedProduct("yaourts")}
              >
                <span>01</span> Yaourts IFEDÉ
              </button>
              <button
                className={selectedProduct === "biscuits" ? "selected" : ""}
                type="button"
                onClick={() => setSelectedProduct("biscuits")}
              >
                <span>02</span> Langues de Chat
              </button>
            </div>
            <div className="order-summary">
              <p>Pour commander <strong>{selected.title}</strong>, contactez-nous au</p>
              <a href={`tel:${selected.phone}`}><Phone size={18} /> {selected.phoneLabel}</a>
            </div>
            <a
              className="button button-red order-call"
              href={`tel:${selected.phone}`}
              aria-label={`Appeler pour commander ${selected.title}`}
            >
              Appeler pour commander <Phone size={18} />
            </a>
            <p className="order-message">{selected.message}</p>
          </div>
        </div>
      )}
    </main>
  );
}