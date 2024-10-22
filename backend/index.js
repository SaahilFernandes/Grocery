const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

const app = express(); // Initialize express app

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with the domain of your React application
  credentials: true, // This is required to include cookies in the requests
}));

// Routes
app.use('/api/users', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/`);
});

connectToMongo(); // Connect to MongoDB
