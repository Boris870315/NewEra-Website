// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";


import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Personal from './pages/personal'
import Cart from './pages/cart'
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/privacyPolicy';
import DeliveryInformation from './pages/deliveryInformation';
import ReturnsPolicy from './pages/returnsPolicy';

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <main >
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/personal" element={<Personal/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/termsAndConditions" element={<TermsAndConditions/>} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
            <Route path="/deliveryInformation" element={<DeliveryInformation/>} />
            <Route path="/returnsPolicy" element={<ReturnsPolicy/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;