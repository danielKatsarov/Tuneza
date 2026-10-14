import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';

const CATEGORIES = [
  { name: 'Guitars', icon: 'guitar', cls: 'c1' },
  { name: 'Keyboards', icon: 'keys', cls: 'c2' },
  { name: 'Drums', icon: 'drum', cls: 'c3' },
  { name: 'Amplifiers', icon: 'amp', cls: 'c4' },
  { name: 'Studio', icon: 'mic', cls: 'c5' },
  { name: 'Accessories', icon: 'headphones', cls: 'c6' },
];

// Demo data — replace with a Supabase query later
const NEW_PRODUCTS = [
  { id: 'n1', kind: 'guitar', tint: 0, meta: 'GUITARS', name: 'Electric guitar, 22 frets', price: '690 BGN', badge: 'New' },
  { id: 'n2', kind: 'keys', tint: 1, meta: 'KEYBOARDS', name: 'Digital piano, 88 keys', price: '1,190 BGN', badge: 'New' },
  { id: 'n3', kind: 'amp', tint: 2, meta: 'AMPLIFIERS', name: 'Guitar combo amp, 30 W', price: '320 BGN', badge: 'Best price' },
  { id: 'n4', kind: 'drum', tint: 3, meta: 'DRUMS', name: 'Electronic drum kit', price: '980 BGN', badge: 'New' },
];

const USED_LISTINGS = [
  { id: 'u1', kind: 'keys', tint: 0, meta: 'PLOVDIV · PRIVATE SELLER', name: 'Synthesizer, 61 keys', price: '420 BGN', badge: 'Good condition' },
  { id: 'u2', kind: 'guitar', tint: 1, meta: 'SOFIA · PRIVATE SELLER', name: 'Acoustic guitar with gig bag', price: '280 BGN', badge: 'Like new' },
  { id: 'u3', kind: 'drum', tint: 2, meta: 'VARNA · PRIVATE SELLER', name: 'Acoustic drum kit', price: '750 BGN', badge: 'Good condition' },
  { id: 'u4', kind: 'amp', tint: 3, meta: 'BURGAS · PRIVATE SELLER', name: 'Tube guitar amplifier', price: '540 BGN', badge: 'Used' },
];

export default function Home() {
  const [tab, setTab] = useState('new');
  const [wish, setWish] = useState({});
  const [cart, setCart] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const isUsed = tab === 'used';
  const products = isUsed ? USED_LISTINGS : NEW_PRODUCTS;
  const wishCount = Object.values(wish).filter(Boolean).length;

  const toggleWish = (id) => setWish((w) => ({ ...w, [id]: !w[id] }));
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    // TODO: save the email in Supabase
  };

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">NEW & USED · IN ONE PLACE</span>
            <h1 className="display">Play with<br />character.<br /><span>Find your sound.</span></h1>
            <p>New instruments from the shop and verified listings from musicians like you — guitars, keyboards, drums, amps and more.</p>
            <div className="actions">
              <a href="#shop" className="btn btn-magenta">Shop now</a>
              <a href="#shop" onClick={() => setTab('used')} className="btn btn-outline">Browse Marketplace</a>
            </div>
          </div>
          <div className="hero-art" style={{ color: '#FFA033' }}>
            <Icon name="guitar" size={360} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <div className="wrap">
          <div className="benefit"><b>Fast delivery</b><span>Free over 150 BGN</span></div>
          <div className="benefit"><b>Secure payment</b><span>Protected checkout</span></div>
          <div className="benefit"><b>Easy returns</b><span>For new products</span></div>
          <div className="benefit"><b>Advice from musicians</b><span>Help choosing gear</span></div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" id="categories">
        <div className="wrap">
          <div className="section-head"><h2>Shop by category</h2><a href="#shop"><b>All categories →</b></a></div>
          <div className="categories">
            {CATEGORIES.map((c) => (
              <a key={c.name} href="#shop" className={`cat ${c.cls}`}>
                <span className="circle"><Icon name={c.icon} /></span>
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" id="shop">
        <div className="wrap">
          <div className="section-head">
            <h2>{isUsed ? 'Fresh listings from musicians' : 'New in the shop'}</h2>
            <div className="tabs" role="group" aria-label="New or used">
              <button className={`tab ${!isUsed ? 'active' : ''}`} aria-pressed={!isUsed} onClick={() => setTab('new')}>New instruments</button>
              <button className={`tab ${isUsed ? 'active' : ''}`} aria-pressed={isUsed} onClick={() => setTab('used')}>Marketplace listings</button>
            </div>
          </div>
          <div className="products">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                isUsed={isUsed}
                liked={!!wish[p.id]}
                onLike={() => toggleWish(p.id)}
                onAdd={() => !isUsed && setCart((c) => c + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promo banners */}
      <section style={{ paddingBottom: 64 }}>
        <div className="wrap promos">
          <div className="promo dark">
            <span className="eyebrow">MARKETPLACE</span>
            <h2>Got an instrument you no longer use?</h2>
            <p style={{ color: '#E9CFDD' }}>Post a listing with a few photos and manage it from your profile.</p>
            <a href="#how" className="btn btn-orange">Post a listing</a>
          </div>
          <div className="promo pink">
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2 }}>ONLINE SHOP</span>
            <h2>New gear for the stage and the studio.</h2>
            <p>Compare by brand, price and specs — and order directly.</p>
            <a href="#shop" className="btn btn-dark">Go to catalog</a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section how" id="how">
        <div className="wrap">
          <div className="section-head" style={{ justifyContent: 'center' }}><h2>Sell in three steps</h2></div>
          <div className="steps">
            <div className="step"><div className="num" style={{ background: '#8F005D', color: '#FFF5F9' }}>1</div><h3>Create a profile</h3><p>Sign up with your email and get access to your personal dashboard.</p></div>
            <div className="step"><div className="num" style={{ background: '#FA00BB', color: '#0B0007' }}>2</div><h3>Post a listing</h3><p>Add photos, description, condition and price. Edit or delete it anytime.</p></div>
            <div className="step"><div className="num" style={{ background: '#FFA033', color: '#14000D' }}>3</div><h3>Connect with the buyer</h3><p>Interested buyers contact you directly through the listing.</p></div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="wrap">
          <div>
            <b className="display" style={{ fontSize: 18 }}>Stay in tune</b>
            <div style={{ color: '#E9CFDD', fontSize: 14, marginTop: 4 }}>New products, top listings and offers — straight to your inbox.</div>
          </div>
          <form onSubmit={handleSubscribe}>
            <input type="email" required aria-label="Email address" placeholder="Your email address"
                   value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="btn btn-orange">{subscribed ? 'Thank you!' : 'Subscribe'}</button>
          </form>
        </div>
      </section>
    </>
  );
}