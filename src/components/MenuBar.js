import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';
import logo from '../assets/logo.png';
import personal from '../assets/icon/personal.png';
import cart from '../assets/icon/cart.png';

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <div className="logo-container">
        <NavLink to="/" exact>
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <ul className="menu-items">
        <li>
          <NavLink to="/" exact className="nav-link" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" >About</NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="/shop" className="nav-link" >Shop</NavLink>
          <ul className="dropdown-content">
            <NavLink to="/shop/clubs" className="dropdown-link" >Clubs</NavLink>
            <NavLink to="/shop/balls" className="dropdown-link" >Balls</NavLink>
            <NavLink to="/shop/bags" className="dropdown-link" >Bags</NavLink>
            <NavLink to="/shop/buggies" className="dropdown-link" >Buggies</NavLink>
            <NavLink to="/shop/shoesAndClotheing" className="dropdown-link" >Shoes and Clotheing</NavLink>
            <NavLink to="/shop/technology" className="dropdown-link" >Technology</NavLink>
            <NavLink to="/shop/accessories" className="dropdown-link" >Accessories</NavLink>
          </ul>
        </li>
        <li>
          <NavLink to="/contact-us" className="nav-link" >Contact</NavLink>
        </li>
      </ul>
      <div className="icons">
        <NavLink to="/cart" exact>
          <img src={cart} alt="cart" className="cart" />
        </NavLink>
        <NavLink to="/personal" exact>
          <img src={personal} alt="personal" className="personal" />
        </NavLink>
      </div>
    </nav>
  );
};

export default MenuBar;