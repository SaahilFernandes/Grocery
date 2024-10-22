import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';


function App() {
  return (
    
    <Router>
     
      <Routes>
        
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/check" element={<Checkout />} />
      </Routes>
      <Footer/>
      </Router>
      
  );
}

export default App;
