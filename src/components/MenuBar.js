import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';
import logo from '../assets/logo.png';
import personal from '../assets/icon/personal.png'
import cart from '../assets/icon/cart.png'

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <div className="logo-container">
      <NavLink to="/" exact>
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <ul>
        <li><NavLink to="/" exact className="nav-link" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link" activeClassName="active-link">About</NavLink></li>
        <li><NavLink to="/shop" className="nav-link" activeClassName="active-link">Shop</NavLink></li>
        <li><NavLink to="/contact-us" className="nav-link" activeClassName="active-link">Contact</NavLink></li>
      </ul>
      <NavLink to="/cart" exact>
          <img src={cart} alt="cart" className="cart" />
        </NavLink>
      <NavLink to="/personal" exact>
          <img src={personal} alt="personal" className="personal" />
        </NavLink>
        
    </nav>
  );
};

export default MenuBar;