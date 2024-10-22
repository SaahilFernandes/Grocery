import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../css/style.css';

const Products = () => {
  return (
    <div>
      <Navbar />
      
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <Link to="fruits.html">
                <img src="images/friuts.jpg" alt="Fruits" />
                <h4>Fruits</h4>
              </Link>
            </div>
            <div className="col-3">
              <Link to="vegetables.html">
                <img src="images/vegitable.jpg" alt="Vegetables" />
                <h4>Vegetables</h4>
              </Link>
            </div>
            <div className="col-3">
              <Link to="dairy.html">
                <img src="images/dairy.jpg" alt="Dairy" />
                <h4>Dairy Products</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {/* Example product card */}
          <div className="col-4">
            <Link to="product-details.html">
              <img src="images/apples.jpg" alt="Fresh Apples" />
            </Link>
            <h4><Link to="product-details.html">Fresh Red Apples</Link></h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹ 120/kg</p>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">Latest Products</h2>
        <div className="row">
          {/* Example product card */}
          <div className="col-4">
            <img src="images/milk.jpg" alt="Milk" />
            <h4>Organic Whole Milk</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹ 60/litre</p>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src="images/offer.jpg" className="offer-img" alt="Exclusive Offer" />
            </div>
            <div className="col-2">
              <p>Special Offer on Fresh Vegetables!</p>
              <h1>Get 20% Off</h1>
              <small>Enjoy fresh and organic vegetables delivered to your doorsteps. Limited time offer!</small>
              <br />
              <Link to="vegetables.html" className="btn">Shop Now &#8594;</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>The grocery store has the freshest produce and the prices are unbeatable! I've been a regular customer and I'm always satisfied with my purchases.</p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="images/user1.jpg" alt="User 1" />
              <h3>Alice Johnson</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>Best place to shop for groceries! They have a wide variety of products and everything is always fresh. Highly recommend!</p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="images/user2.jpg" alt="User 2" />
              <h3>Mark Smith</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>I love the organic options available here! The staff is friendly and always ready to help with recommendations.</p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="images/user3.jpg" alt="User 3" />
              <h3>Linda Green</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
