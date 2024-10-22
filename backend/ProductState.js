import React, { useState, useEffect } from "react";

const ProdState = (props) => {
  const host = "http://localhost:5000"; // Remove '/website' from the host URL
  const [products, setProducts] = useState([]); // Changed 'notesInitial' to 'products' and initialized it as an empty array

  // Function to fetch products based on section
  const getProducts = async () => {
    try {
      const response = await fetch(`${host}/api/products/fetchallprod?section=${props.section}`, { // Pass section as a query parameter
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Call the getProducts function when the component mounts
  useEffect(() => {
    getProducts();
  }, [props.section]); // Re-run effect when 'section' prop changes

  // Return any JSX here, or you can return the products state to use it in your component
  return null;
};

export default ProdState;
