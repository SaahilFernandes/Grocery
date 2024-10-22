import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../css/style.css';
import { useNavigate } from 'react-router-dom';
const productsList = [
  {
    "_id": "67179991c243582ff273d608",
    "name": "Arabic Salad",
    "section": "food",
    "price": 450,
    "rating": 3.5,
    "image": "image/Arabic salad2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d609",
    "name": "Boneless Wings",
    "section": "food",
    "price": 300,
    "rating": 4,
    "image": "image/bonless wing_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d60a",
    "name": "Caesar Salad",
    "section": "food",
    "price": 550,
    "rating": 4.2,
    "image": "image/Caesar salad2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d60b",
    "name": "Chicken Alfredo",
    "section": "food",
    "price": 400,
    "rating": 3.8,
    "image": "image/Chicken Alfredo2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d60c",
    "name": "Chicken Sandwich",
    "section": "food",
    "price": 320,
    "rating": 4.3,
    "image": "image/Chicken sandwich2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d60d",
    "name": "Diet Pepsi",
    "section": "food",
    "price": 220,
    "rating": 3,
    "image": "image/Diet_Pepsi_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d60e",
    "name": "French Fries",
    "section": "food",
    "price": 275,
    "rating": 4.5,
    "image": "image/french fries2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d60f",
    "name": "Greek Salad",
    "section": "food",
    "price": 380,
    "rating": 4,
    "image": "image/Greek salad2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d610",
    "name": "Hotdog Sandwich",
    "section": "food",
    "price": 350,
    "rating": 4.1,
    "image": "image/hotdog sandwich2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d611",
    "name": "Margarita",
    "section": "food",
    "price": 250,
    "rating": 3.9,
    "image": "image/Margarita2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d612",
    "name": "Mountain Dew",
    "section": "food",
    "price": 300,
    "rating": 3.7,
    "image": "image/mtnDew_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d613",
    "name": "Pepperoni Lovers Pizza",
    "section": "food",
    "price": 480,
    "rating": 4.4,
    "image": "image/Pepperoni lovers2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d614",
    "name": "Philly Steak Sandwich",
    "section": "food",
    "price": 390,
    "rating": 4.2,
    "image": "image/Philly steak sandwich2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d615",
    "name": "Plain Nutella",
    "section": "food",
    "price": 275,
    "rating": 4.6,
    "image": "image/plain Nutella2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d616",
    "name": "Tuna Salad",
    "section": "food",
    "price": 550,
    "rating": 4.3,
    "image": "image/Tuna salad2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d617",
    "name": "Turkey Sandwich",
    "section": "food",
    "price": 380,
    "rating": 4,
    "image": "image/turkey sandwich2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d618",
    "name": "Water Bottle",
    "section": "food",
    "price": 220,
    "rating": 3.8,
    "image": "image/Water-min_636021951390013926.jpg"
  },
  {
    "_id": "67179991c243582ff273d619",
    "name": "Wedges",
    "section": "food",
    "price": 300,
    "rating": 4.1,
    "image": "image/wedges2_big.jpg"
  },
  {
    "_id": "67179991c243582ff273d61a",
    "name": "Spicy Chicken Curry",
    "section": "food",
    "price": 450,
    "rating": 4.2,
    "image": "image/img1.jpg"
  },
  {
    "_id": "67179991c243582ff273d61b",
    "name": "Fried Rice",
    "section": "food",
    "price": 400,
    "rating": 3.8,
    "image": "image/img2.jpg"
  },
  {
    "_id": "67179991c243582ff273d61c",
    "name": "Paneer Tikka",
    "section": "food",
    "price": 500,
    "rating": 4.3,
    "image": "image/img3.jpg"
  },
  {
    "_id": "67179991c243582ff273d61d",
    "name": "Chicken Wings",
    "section": "food",
    "price": 350,
    "rating": 4.1,
    "image": "image/img4.jpg"
  },
  {
    "_id": "67179991c243582ff273d61e",
    "name": "Chili Chicken",
    "section": "food",
    "price": 480,
    "rating": 4,
    "image": "image/img5.jpg"
  },
  {
    "_id": "67179991c243582ff273d61f",
    "name": "Spicy Fish Curry",
    "section": "food",
    "price": 550,
    "rating": 4.5,
    "image": "image/img6.jpg"
  },
  {
    "_id": "67179991c243582ff273d620",
    "name": "Prawn Salad",
    "section": "food",
    "price": 650,
    "rating": 4.2,
    "image": "image/img7.jpg"
  },
  {
    "_id": "67179991c243582ff273d621",
    "name": "Shrimp Delight",
    "section": "food",
    "price": 600,
    "rating": 4.6,
    "image": "image/img8.jpg"
  },
  {
    "_id": "67179991c243582ff273d622",
    "name": "Red Chili Powder",
    "section": "ingredient",
    "price": 220,
    "rating": 3.5,
    "image": "image/img9.jpg"
  },
  {
    "_id": "67179991c243582ff273d623",
    "name": "Curry Powder",
    "section": "ingredient",
    "price": 300,
    "rating": 3.7,
    "image": "image/img10.jpg"
  },
  {
    "_id": "67179991c243582ff273d624",
    "name": "Pepper Powder",
    "section": "ingredient",
    "price": 270,
    "rating": 3.8,
    "image": "image/img11.jpg"
  },
  {
    "_id": "67179991c243582ff273d625",
    "name": "Paprika",
    "section": "ingredient",
    "price": 250,
    "rating": 4,
    "image": "image/img12.jpg"
  },
  {
    "_id": "67179991c243582ff273d626",
    "name": "Coriander Powder",
    "section": "ingredient",
    "price": 300,
    "rating": 4.1,
    "image": "image/img13.jpg"
  },
  {
    "_id": "67179991c243582ff273d627",
    "name": "Butter",
    "section": "ingredient",
    "price": 350,
    "rating": 4.3,
    "image": "image/img14.jpg"
  },
  {
    "_id": "67179991c243582ff273d628",
    "name": "Fresh Cream",
    "section": "ingredient",
    "price": 280,
    "rating": 4.4,
    "image": "image/img15.jpg"
  }
];



const Cart = ({ userId }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems(userId);
  }, [userId]);

  const fetchCartItems = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/cartfind/${userId}/cart`, {
        credentials: 'include' // Include cookies in the request
      });
      if (response.ok) {
        const data = await response.json();
        setCartItems(data.cart);
        console.log("Cart items:", data.cart);
      } else {
        throw new Error('Failed to fetch cart items');
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const decreaseQuantity = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/cart/decrease/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
        credentials: 'include' // Include cookies in the request
      });

      if (response.ok) {
        fetchCartItems(userId);
      } else {
        console.error('Error decreasing quantity');
      }
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  const increaseQuantity = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/cart/increase/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
        credentials: 'include' // Include cookies in the request
      });

      if (response.ok) {
        fetchCartItems(userId); // Refetch the updated cart items
      } else {
        console.error('Error increasing quantity');
      }
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const clearAll = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/cart/clear/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' // Include cookies in the request
      });

      if (response.ok) {
        setCartItems([]);
        console.log('Cart cleared successfully');
      } else {
        console.error('Error clearing cart');
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };
  const navigate = useNavigate();
  const proceed = () => {
    navigate('/check', { state: { userId } }); // Navigate to the Checkout page with userId
  };

  // Create a map to count the occurrence of each product
  const productCountMap = {};
  cartItems.forEach(item => {
    const productId = item.product;
    productCountMap[productId] = (productCountMap[productId] || 0) + 1;
  });

  return (
    <div className="cart-container">
      <Navbar />
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-items">
        {Object.entries(productCountMap).map(([productId, quantity], index) => {
          const product = productsList.find(p => p._id === productId);
          if (product) {
            return (
              <div key={index} className="cart-item">
                <img
                  src={product.image} // Updated image source
                  alt={product.name}
                  className="cart-item-image"
                  style={{ width: '100px', height: 'auto' }}
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{product.name}</h3>
                  <p className="cart-item-price">${product.price}</p>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => decreaseQuantity(productId)} // Fix here
                    >
                      -
                    </button>
                    <span className="cart-item-count">{quantity}</span> {/* Use quantity from productCountMap */}
                    <button
                      className="quantity-btn"
                      onClick={() => increaseQuantity(productId)} // Fix here
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="cart-item">
                Product not found
              </div>
            );
          }
        })}
      </div>
      <div className="cart-summary">
        <h3 className="cart-summary-title">Order Summary</h3>
        <div className="cart-summary-details">
          {/* Add logic to display order summary details */}
        </div>
      </div>
      <div className="cart-buttons">
        <button className="btn btn-primary btn-clearall" type="button" onClick={clearAll}>
          Clear Cart
        </button>
        <button className="btn btn-primary btn-purchase" type="button" onClick={proceed}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
export { productsList };
export default Cart;