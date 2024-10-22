const express = require('express');
const Product = require("../models/Product"); // Corrected import to Product model
const router = express.Router();


router.get('/fetchallprod', async (req, res) => {
    try {
          // Fetch products based on section, assuming section is passed as a query parameter
        const products = await Product.find({ section: req.query.section });
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});





module.exports = router;
