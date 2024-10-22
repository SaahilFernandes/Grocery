import React, { useState, useEffect } from "react";

const Card = ({ section, userId, currentPage, itemsPerPage }) => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/products/fetchallprod?section=${section}`
                );
                const json = await response.json();
                setProducts(json);
                setTotalPages(Math.ceil(json.length / itemsPerPage));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        getProducts();
    }, [section, itemsPerPage]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const addToCart = async (productId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/cart/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId,
                    userId,
                }),
                credentials: 'include'
            });
            if (response.ok) {
                alert("Item added to cart successfully");
            } else {
                console.error("Error adding item to cart:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
            console.log("Product ID:", productId);
            console.log("User ID:", userId);
        }
    };

    const generateStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<strong key={i}>★</strong>);
            } else {
                stars.push(<strong key={i}>☆</strong>);
            }
        }
        return stars;
    };

    return (
        <section>
            <div className="row">
                {currentItems.map((product, index) => (
                    <div className="col-4" key={index}>
                        <img src={`${product.image}`} alt={product.name} />
                        <h4>{product.name}</h4>
                        <div className="rating">
                            {generateStars(product.rating)}
                        </div>
                        <button
                            style={{
                                backgroundColor: '#4CAF50',  // Green color
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                outline: 'none',
                                fontSize: '16px',
                                marginTop: '10px',
                                marginBottom: '10px'
                            }}
                            onClick={() => addToCart(product._id)}
                        >
                            Add to Cart
                        </button>
                        <p>₹ {product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Card;