// src/Footer.js
import React from 'react';
import './Footer.css'; 
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>CONTACT INFO</h2>
          <ul>
            {/* Add list items here */}
            <p className='subtitle'>address:</p>
            <p>50 Birchgrove Cres, <br/>Eastwood NSW 2122</p>
            <p className='subtitle'>email:</p>
            <p>neweraau@hotmail.com</p>
          </ul>
        </div>
        <div className="footer-section">
          <h2>CUSTOMER SERVICE</h2>
          <ul>
            {/* Add list items here */}
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/termsAndConditions">Terms and Conditions</NavLink></li>
            <li><NavLink to="/privacyPolicy">Privacy Policy</NavLink></li>
            <li><NavLink to="/deliveryInformation">Delivery Information</NavLink></li>
            <li><NavLink to="/returnsPolicy">Returns Policy</NavLink></li>
            {/*<li><NavLink to="/lessons">Lessons</NavLink></li>*/}
          </ul>
        </div>
        <div className="footer-section">
          <h2>MAIN FEATURES</h2>
          <ul>
            {/* Add list items here */}
            <li><NavLink to="/drivingRange">Driving Range</NavLink></li>
            <li><NavLink to="/shop">Shops</NavLink></li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2024 New Era. All rights reserved.</p>
    </footer>
  );
};

export default Footer;