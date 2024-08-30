// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from './contexts/CartContext'; // 确保引入 CartProvider

import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Personal from './pages/personal';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/privacyPolicy';
import DeliveryInformation from './pages/deliveryInformation';
import ReturnsPolicy from './pages/returnsPolicy';
import SignUP from './pages/SignUp';
import LoginForm from './pages/LoginForm';
import DetailProducts from './pages/DetailProducts';
import Cart from './pages/Cart'; // 确保引入 Cart 组件

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <MenuBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/product/:id" element={<DetailProducts />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/termsAndConditions" element={<TermsAndConditions />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/deliveryInformation" element={<DeliveryInformation />} />
              <Route path="/returnsPolicy" element={<ReturnsPolicy />} />
              <Route path="/signUp" element={<SignUP />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;