const mongoose = require('mongoose');
const Product = require('./Product'); // Import the Product model

// Array of products to be added
const productsToAdd = [
  {
    "name": "Arabic Salad",
    "image": "image/Arabic salad2_big.jpg",
    "rating": 3.5,
    "price": 450,
    "section": "food"
  },
  {
    "name": "Boneless Wings",
    "image": "image/bonless wing_big.jpg",
    "rating": 4.0,
    "price": 300,
    "section": "food"
  },
  {
    "name": "Caesar Salad",
    "image": "image/Caesar salad2_big.jpg",
    "rating": 4.2,
    "price": 550,
    "section": "food"
  },
  {
    "name": "Chicken Alfredo",
    "image": "image/Chicken Alfredo2_big.jpg",
    "rating": 3.8,
    "price": 400,
    "section": "food"
  },
  {
    "name": "Chicken Sandwich",
    "image": "image/Chicken sandwich2_big.jpg",
    "rating": 4.3,
    "price": 320,
    "section": "food"
  },
  {
    "name": "Diet Pepsi",
    "image": "image/Diet_Pepsi_big.jpg",
    "rating": 3.0,
    "price": 220,
    "section": "food"
  },
  {
    "name": "French Fries",
    "image": "image/french fries2_big.jpg",
    "rating": 4.5,
    "price": 275,
    "section": "food"
  },
  {
    "name": "Greek Salad",
    "image": "image/Greek salad2_big.jpg",
    "rating": 4.0,
    "price": 380,
    "section": "food"
  },
  {
    "name": "Hotdog Sandwich",
    "image": "image/hotdog sandwich2_big.jpg",
    "rating": 4.1,
    "price": 350,
    "section": "food"
  },
  {
    "name": "Margarita",
    "image": "image/Margarita2_big.jpg",
    "rating": 3.9,
    "price": 250,
    "section": "food"
  },
  {
    "name": "Mountain Dew",
    "image": "image/mtnDew_big.jpg",
    "rating": 3.7,
    "price": 300,
    "section": "food"
  },
  {
    "name": "Pepperoni Lovers Pizza",
    "image": "image/Pepperoni lovers2_big.jpg",
    "rating": 4.4,
    "price": 480,
    "section": "food"
  },
  {
    "name": "Philly Steak Sandwich",
    "image": "image/Philly steak sandwich2_big.jpg",
    "rating": 4.2,
    "price": 390,
    "section": "food"
  },
  {
    "name": "Plain Nutella",
    "image": "image/plain Nutella2_big.jpg",
    "rating": 4.6,
    "price": 275,
    "section": "food"
  },
  {
    "name": "Tuna Salad",
    "image": "image/Tuna salad2_big.jpg",
    "rating": 4.3,
    "price": 550,
    "section": "food"
  },
  {
    "name": "Turkey Sandwich",
    "image": "image/turkey sandwich2_big.jpg",
    "rating": 4.0,
    "price": 380,
    "section": "food"
  },
  {
    "name": "Water Bottle",
    "image": "image/Water-min_636021951390013926.jpg",
    "rating": 3.8,
    "price": 220,
    "section": "food"
  },
  {
    "name": "Wedges",
    "image": "image/wedges2_big.jpg",
    "rating": 4.1,
    "price": 300,
    "section": "food"
  },{
    "name": "Spicy Chicken Curry",
    "image": "image/img1.jpg",
    "rating": 4.2,
    "price": 450,
    "section": "food"
  },
  {
    "name": "Fried Rice",
    "image": "image/img2.jpg",
    "rating": 3.8,
    "price": 400,
    "section": "food"
  },
  {
    "name": "Paneer Tikka",
    "image": "image/img3.jpg",
    "rating": 4.3,
    "price": 500,
    "section": "food"
  },
  {
    "name": "Chicken Wings",
    "image": "image/img4.jpg",
    "rating": 4.1,
    "price": 350,
    "section": "food"
  },
  {
    "name": "Chili Chicken",
    "image": "image/img5.jpg",
    "rating": 4.0,
    "price": 480,
    "section": "food"
  },
  {
    "name": "Spicy Fish Curry",
    "image": "image/img6.jpg",
    "rating": 4.5,
    "price": 550,
    "section": "food"
  },
  {
    "name": "Prawn Salad",
    "image": "image/img7.jpg",
    "rating": 4.2,
    "price": 650,
    "section": "food"
  },
  {
    "name": "Shrimp Delight",
    "image": "image/img8.jpg",
    "rating": 4.6,
    "price": 600,
    "section": "food"
  },
  {
    "name": "Red Chili Powder",
    "image": "image/img9.jpg",
    "rating": 3.5,
    "price": 220,
    "section": "ingredient"
  },
  {
    "name": "Curry Powder",
    "image": "image/img10.jpg",
    "rating": 3.7,
    "price": 300,
    "section": "ingredient"
  },
  {
    "name": "Pepper Powder",
    "image": "image/img11.jpg",
    "rating": 3.8,
    "price": 270,
    "section": "ingredient"
  },
  {
    "name": "Paprika",
    "image": "image/img12.jpg",
    "rating": 4.0,
    "price": 250,
    "section": "ingredient"
  },
  {
    "name": "Coriander Powder",
    "image": "image/img13.jpg",
    "rating": 4.1,
    "price": 300,
    "section": "ingredient"
  },
  {
    "name": "Butter",
    "image": "image/img14.jpg",
    "rating": 4.3,
    "price": 320,
    "section": "ingredient"
  },
  {
    "name": "Turmeric Powder",
    "image": "image/img15.jpg",
    "rating": 4.5,
    "price": 290,
    "section": "ingredient"
  },
  {
    "name": "Cumin Powder",
    "image": "image/img16.jpg",
    "rating": 3.9,
    "price": 230,
    "section": "ingredient"
  },
  {
    "name": "Paneer Masala",
    "image": "image/img25.jpg",
    "rating": 4.4,
    "price": 480,
    "section": "food"
  },
  {
    "name": "Bharwa Baingan",
    "image": "image/img26.jpg",
    "rating": 4.2,
    "price": 410,
    "section": "food"
  },
  {
    "name": "Kadai Paneer",
    "image": "image/img27.jpg",
    "rating": 4.6,
    "price": 600,
    "section": "food"
  },
  {
    "name": "Fish Stew",
    "image": "image/img28.jpg",
    "rating": 4.1,
    "price": 550,
    "section": "food"
  }
];




// Function to add products
const addProducts = async () => {
    try {
        const result = await Product.insertMany(productsToAdd);
        console.log('Products added successfully:', result);
    } catch (error) {
        console.error('Error adding products:', error);
    }
};

// Connect to MongoDB and specify the database name
mongoose.connect('mongodb://localhost:27017/grocery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(() => {
    console.log('Connected to MongoDB');
    // Call the addProducts function after successfully connecting to the database
    addProducts();
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
