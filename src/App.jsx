import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <>
      <header>
        <h1>Tuneza</h1>

        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/shop">Shop</Link>
          {' | '}
          <Link to="/marketplace">Marketplace</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;