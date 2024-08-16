'use client'; 

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import productData from '../app/products.json'; 

const ProductListing = ({ addToCart }) => {
  const [clickedProduct, setClickedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    setClickedProduct(product.id);
    addToCart(product);

    // Reset the animation state after it completes
    setTimeout(() => {
      setClickedProduct(null);
    }, 500); // Match this duration with the animation duration
  };

  const filteredProducts = productData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-7 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <div className=''>
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
              <motion.button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                initial={{ scale: 1 }}
                animate={{ scale: clickedProduct === product.id ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {clickedProduct === product.id ? "Added!" : "Add to Cart"}
              </motion.button>
              </div>
              
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
