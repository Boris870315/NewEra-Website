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
import SignUP from './pages/SignUp';
import LoginForm from './pages/LoginForm';
import DetailProducts from './pages/DetailProducts'


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
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:id" element={<DetailProducts />} /> 
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/personal" element={<Personal/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/termsAndConditions" element={<TermsAndConditions/>} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
            <Route path="/deliveryInformation" element={<DeliveryInformation/>} />
            <Route path="/returnsPolicy" element={<ReturnsPolicy/>} />
            <Route path="/signUp" element={<SignUP/>} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;