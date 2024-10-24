const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const { createTokens, validateToken } = require('../middleware/JWT');


router.use(cookieParser());

// Endpoint for user login
router.post('/login', [
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password is required").exists(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(400).json({ error: "User doesn't exist" });
    }

    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {
      if (!match) {
        return res.status(400).json({ error: "Invalid password" });
      } else {
        const accessToken = createTokens(user);
        res.cookie("access-token", accessToken, { maxAge: 60 * 60 * 24 * 30 * 1000 });
        res.status(200).json({ message: "Login successful", user });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});


  


// Endpoint for user registration
router.post('/register', [
  body('name', 'Name is required').notEmpty(),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password is required').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      name: name,
      email: email.toLowerCase(),
      password: hashedPassword
    });

    // Save the user to the database
    const user = await newUser.save();

    // Send back the newly created user
    res.status(201).json(user);
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/cart/add', validateToken, async (req, res) => {
  const { productId } = req.body; 
  const userId = req.userId;
  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the product already exists in the cart
    const existingProduct = user.cart.find(item => item.product === productId);

    if (existingProduct) {
      // If the product already exists, increase its quantity
      existingProduct.quantity += 1;
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      user.cart.push({ product: productId, quantity: 1 });
    }

    // Save the updated user object
    await user.save();

    res.status(200).json({ message: 'Item added to cart successfully', user });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/cart/decrease/:userId', validateToken, async (req, res) => {
  const userId = req.userId;
  const { productId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const productIndex = user.cart.findIndex(item => item.product.toString() === productId.toString());

    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    user.cart[productIndex].quantity--;

    if (user.cart[productIndex].quantity <= 0) {
      user.cart.splice(productIndex, 1);
    }

    await user.save();

    res.status(200).json({ message: 'Quantity decreased successfully', user });
  } catch (error) {
    console.error('Error decreasing quantity:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint for increasing the quantity of an item in the cart
router.put('/cart/increase/:userId', validateToken, async (req, res) => {
  const userId = req.userId;
  const { productId } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the product in the cart
    const productIndex = user.cart.findIndex(item => item.product === productId);

    if (productIndex === -1) {
      // If the product is not in the cart, add it with quantity 1
      user.cart.push({ product: productId, quantity: 1 });
    } else {
      // If the product is already in the cart, increase its quantity
      user.cart[productIndex].quantity++;
    }

    // Save the updated user object
    await user.save();

    res.status(200).json({ message: 'Quantity increased successfully', user });
  } catch (error) {
    console.error('Error increasing quantity:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/cartfind/:userId/cart', validateToken, async (req, res) => {
  const userId = req.userId;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user's cart
    res.status(200).json({ cart: user.cart });
  } catch (error) {
    console.error('Error fetching user cart:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint for clearing the user's cart
router.delete('/cart/clear/:userId', validateToken, async (req, res) => {
  const userId = req.userId;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Clear the user's cart
    user.cart = [];

    // Save the updated user object
    await user.save();

    res.status(200).json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
