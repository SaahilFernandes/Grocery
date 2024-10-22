import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../css/style.css'; // Ensure you are linking the improved CSS file
import { useNavigate } from 'react-router-dom';
import { productsList } from '../pages/Cart';
import { CreditCard } from 'lucide-react';

const PaymentQRSection = ({ selectedMethod }) => {
  // Mock QR code using a basic grid pattern
  const QRCode = () => (
    <div className="qr-code grid grid-cols-8 grid-rows-8 p-2 w-32 h-32 border-2 border-gray-300 bg-white">
      {[...Array(64)].map((_, i) => (
        <div
          key={i}
          className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-white'} w-full h-full`}
        />
      ))}
    </div>
  );

  const getPaymentIcon = () => {
    switch (selectedMethod) {
      case 'Card':
        return (
          <div className="flex flex-col items-center">
            <CreditCard size={48} className="text-blue-600 mb-2" />
            <span className="font-medium">Credit Card</span>
          </div>
        );
      case 'GPay':
        return (
          <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-md mb-2">
            <span className="text-2xl font-bold text-blue-600">GPay</span>
          </div>
        );
      case 'PayPal':
        return (
          <div className="w-24 h-24 flex items-center justify-center bg-[#00457C] rounded-full shadow-md mb-2">
            <span className="text-xl font-bold text-white">PayPal</span>
          </div>
        );
      default:
        return null;
    }
  };

  if (!selectedMethod) return null;

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-inner">
      {getPaymentIcon()}
      <div className="mt-4">
        <QRCode />
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Scan to pay with {selectedMethod}
      </p>
    </div>
  );
};

const Checkout = ({ userId }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems(userId);
  }, [userId]);

  const fetchCartItems = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/cartfind/${userId}/cart`, {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        const aggregatedCart = aggregateCartItems(data.cart);
        setCartItems(aggregatedCart);
        calculateTotalPrice(aggregatedCart);
      } else {
        throw new Error('Failed to fetch cart items');
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const aggregateCartItems = (items) => {
    const itemMap = new Map();
    
    items.forEach(item => {
      if (itemMap.has(item.product)) {
        const existingItem = itemMap.get(item.product);
        existingItem.quantity += 1;
      } else {
        itemMap.set(item.product, {
          product: item.product,
          quantity: 1
        });
      }
    });

    return Array.from(itemMap.values());
  };

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((sum, item) => {
      const product = productsList.find(p => p._id === item.product);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    setTotalPrice(total);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/users/cart/clear/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (response.ok) {
        alert("Order Successful!");
        navigate('/');
      } else {
        throw new Error('Error processing order');
      }
    } catch (error) {
      console.error('Error processing order:', error);
      alert("Failed to process order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <ul className="space-y-4">
            {cartItems.map((item) => {
              const product = productsList.find(p => p._id === item.product);
              if (!product) return null;
              
              return (
                <li key={item.product} className="flex justify-between items-center border-b pb-4">
                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${product.price * item.quantity}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="font-medium mb-4">Payment Method</h3>
          <div className="space-y-2">
            {['Card', 'GPay', 'PayPal'].map((method) => (
              <label key={method} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  onChange={handlePaymentChange}
                  className="text-blue-600"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className={`w-full bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors
            ${!paymentMethod ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          disabled={!paymentMethod}
        >
          Pay Now
        </button>

        <div className="mt-6">
          <PaymentQRSection selectedMethod={paymentMethod} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
