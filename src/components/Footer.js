import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col1">
            <h3>Download Our App</h3>
            <p>Shop fresh groceries and get exclusive deals on Android and iOS.</p>
            <div className="app-logo">
            <img src="images/google.jpg" alt="Play Store" style={{ width: '70px', height: 'auto', marginRight: '10px' }} />
            <img src="images/app.jpg" alt="App Store" style={{ width: '40px', height: 'auto' }} />

            </div>
          </div>
          <div className="footer-col2">
            <img src="images/logo.jpg" alt="Grocery Store Logo" />
            <p>At [Store Name], we believe in providing the freshest produce and quality products at affordable prices.</p>
          </div>
          <div className="footer-col3">
            <h3>Useful Links</h3>
            <ul>
              <li><Link to="/weekly-deals">Weekly Deals</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/delivery-info">Delivery Information</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col4">
            <h3>Follow Us</h3>
            <ul>
              <li><Link to="/facebook">Facebook</Link></li>
              <li><Link to="/twitter">Twitter</Link></li>
              <li><Link to="/instagram">Instagram</Link></li>
              <li><Link to="/youtube">YouTube</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} [Store Name]. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
