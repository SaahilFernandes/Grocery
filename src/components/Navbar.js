import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';

const Navbar = () => {
  // State to manage the menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const menutoggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <NavLink to="/home"><img src="/images/logo.jpg" width="125px" alt="Logo" /></NavLink>
          </div>
          <nav>
            <ul id="MenuItems" className={menuOpen ? "active" : ""}>
              <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
              <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
              <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
              <li><NavLink to="/" activeClassName="active">Login</NavLink></li>
              <li>
                <NavLink to="/cart">
                  <img src="/images/cart.jpg" width="30px" height="30px" alt="Cart" />
                </NavLink>
              </li>
            </ul>
            <img src="/images/menu.png" onClick={menutoggle} className="menu-icon" alt="Menu Icon" />
          </nav>
        </div>
        <div className="row">
          <div className="col-2">
            <h1>Fresh Groceries Delivered!</h1>
            <h4>Stock up on your favorite fruits, vegetables, and essentials. Enjoy the freshest produce and exclusive deals right from the comfort of your home.</h4>
            <NavLink to="/products" className="btn">Shop Now &#8594;</NavLink>
          </div>
          <div className="col-2">
            <img src="/images/gro.jpg" alt="Grocery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
