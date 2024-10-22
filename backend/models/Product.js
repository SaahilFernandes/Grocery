const mongoose = require('mongoose');
const { Schema } = mongoose;

const prodSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    section: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number // Removed default value as it's not required
    },
    image: {
        type: String // Changed to String to store URL of the photo
    }
});

module.exports = mongoose.model('Product', prodSchema); // Changed 'products' to 'Product' for model name
