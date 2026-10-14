import { Link } from 'react-router-dom';

export default function Header({ cartCount, wishCount }) {
  return (
    <>
      <div className="announce">
        <div className="wrap">
          <span className="hl">Free delivery over 150 BGN</span>
          <span className="mid">List your used instrument for free</span>
          <span>Help · Track order</span>
        </div>
      </div>
      <header className="header">
        <div className="wrap">
          <a href="/" className="logo">Tuneza</a>
          <nav className="nav" aria-label="Main navigation">
            
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/marketplace">Marketplace</Link>

            <a href="#categories">Categories</a>
            <a href="#how">How it works</a>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <input className="search" type="search" aria-label="Search" placeholder="Search…" />
            <button className="icon-btn" aria-label="Favorites">
              ♡ <span className="count">{wishCount}</span>
            </button>
            <button className="icon-btn dark" aria-label="Cart">
              🛒 <span className="count">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}