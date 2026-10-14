export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="logo">Tuneza</span>
            <p style={{ color: '#D9BBCB', lineHeight: 1.6, margin: 0 }}>
              Musical instruments and gear — new from the shop, used from musicians.
            </p>
          </div>
          <div className="footer-col">
            <h4>SHOP</h4>
            <a href="#shop">All products</a><a href="#categories">Guitars</a>
            <a href="#categories">Keyboards</a><a href="#categories">Amplifiers</a>
          </div>
          <div className="footer-col">
            <h4>MARKETPLACE</h4>
            <a href="#shop">All listings</a><a href="#how">Post a listing</a>
            <a href="#how">How it works</a><a href="/profile">My profile</a>
          </div>
          <div className="footer-col">
            <h4>HELP</h4>
            <a href="#">Shipping & payment</a><a href="#">Returns</a>
            <a href="#">Contact</a><a href="#">Terms of use</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Tuneza. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}