import React, { useState } from 'react';
import '../css/style.css';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { ChevronRight } from 'lucide-react';

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('food');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navbar />
            <div className="small-container">
                <div className="row row-2">
                    <h2>All Products</h2>
                    <select onChange={handleCategoryChange}>
                        <option value="food">Food</option>
                        <option value="ingredients">Ingredients</option>
                    </select>
                </div>

                {selectedCategory === 'food' && (
                    <section>
                        <h2 className="product-title">Food</h2>
                        <Card 
                            section="food"
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                        />
                    </section>
                )}

                {selectedCategory === 'ingredients' && (
                    <section>
                        <h2 className="product-title">Ingredients</h2>
                        <Card 
                            section="ingredient"
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                        />
                    </section>
                )}

                <PaginationButtons 
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
}

const PaginationButtons = ({ currentPage, onPageChange }) => {
    return (
        <div className="page-btn flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((pageNum) => (
                <span
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-colors
                        ${currentPage === pageNum 
                            ? 'bg-green-500 text-white shadow-md' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                        }`}
                >
                    {pageNum}
                </span>
            ))}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-600">
                <ChevronRight className="w-4 h-4" />
            </span>
        </div>
    );
};

export default Home;