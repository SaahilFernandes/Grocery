import React from 'react';
import Navbar from '../components/Navbar';
import '../css/style.css'; // Ensure the CSS is linked correctly



const Contact = () => {
  const handleFakeSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert('Thank you for reaching out! We will contact you soon (fake response).');
  };

  return (
    <>
      <Navbar />
      <div className="account-page">
        <div className="container">
          <div className="row align-items-center">
            {/* Left column with the contact image */}
            <div className="col-6">
              <img src='images/offer.jpg' width="100%" alt="Contact Us" />
            </div>

            {/* Right column with the form */}
            <div className="col-6">
              <div className="form-container">
                <h2>Contact Us</h2>
                <form id="ContactForm" onSubmit={handleFakeSubmit}>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea 
                    placeholder="Your Message" 
                    rows="5" 
                    required 
                    style={{ resize: 'none' }}></textarea>
                  <button type="submit" className="btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find our location */}
      <div className="find-location blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Find Our Location</h2>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345082515!2d144.95373631550468!3d-37.816279742021224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f4b153%3A0x5045675218ce6e0!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1632909880326!5m2!1sen!2sau"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
