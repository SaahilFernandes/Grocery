import React from 'react';
import Navbar from '../components/Navbar';
import '../css/style.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h1>About Us</h1>
              <p>At [Store Name], we are dedicated to bringing you the freshest produce, quality groceries, and everyday essentials. With a commitment to sustainability and community support, we strive to offer a shopping experience that values health and well-being. Our store is a place where families can find everything they need, from organic fruits and vegetables to pantry staples and gourmet foods.</p>
              <div className="about-buttons">
                <a href="#" className="btn">Read More</a>
                <a href="contact.html" className="btn">Contact Us</a>
              </div>
            </div>
            <div className="col-2">
              <img src="images/logo.jpg" alt="[Store Name] Logo" />
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default About;
