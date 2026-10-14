import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Marketplace from './pages/Marketplace';

export default function App() {
const [searchQuery, setSearchQuery] = useState('');
const [cartCount, setCartCount] = useState(0);
const [wishCount, setWishCount] = useState(0);

return (
<BrowserRouter>
<Header
     cartCount={cartCount}
     wishCount={wishCount}
     searchQuery={searchQuery}
     setSearchQuery={setSearchQuery}
   />

  <Routes>
    <Route path="/" element={<Home />} />

    <Route
      path="/shop"
      element={<Shop searchQuery={searchQuery} />}
    />

    <Route
      path="/marketplace"
      element={<Marketplace searchQuery={searchQuery} />}
    />
  </Routes>

  <Footer />
</BrowserRouter>

);
}