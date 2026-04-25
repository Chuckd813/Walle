/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ComplianceModal } from './components/ComplianceModal';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { COA } from './pages/COA';
import { Wholesale } from './pages/Wholesale';
import { FAQ } from './pages/FAQ';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ShippingPolicy, ReturnPolicy, PrivacyPolicy, TermsOfService } from './pages/Policy';

import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen selection:bg-brand-cyan/30 selection:text-brand-black">
          <ScrollToTop />
          <CartDrawer />
          <ComplianceModal />
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/categories" element={<Shop />} />
              <Route path="/category/:slug" element={<Shop />} />
              <Route path="/testing" element={<COA />} />
              <Route path="/wholesale" element={<Wholesale />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/shipping" element={<ShippingPolicy />} />
              <Route path="/returns" element={<ReturnPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cart" element={<div className="pt-40 text-center">Cart Shell</div>} />
              <Route path="/login" element={<div className="pt-40 text-center">Login Shell</div>} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
