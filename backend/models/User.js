// models/User.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true
    },
    quantity: {
        type: Number,
        default: 1 // Default quantity is 1
    }
});

// Define the user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true   
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: [cartItemSchema] // Embed cart items within the user schema
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
