'use client';

import React, { useState } from 'react';
import ProductListing from '../components/ProductListing';
import CartPage from '../components/CartPage';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
      setCart(cart.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const cartItemCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div>
      <header className="flex justify-between items-center p-9 bg-blue-800 text-white">
        <h1 className="lg:text-2xl sm:text-lg text-sm font-bold">E-commerce Website - ( NextJS & Tailwindcss )</h1>
        <button
          onClick={handleToggleCart}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          {showCart
            ? `Back to Products`
            : `Cart ( ${cartItemCount} )`}
        </button>
      </header>
      <main className="p-4">
        {showCart ? (
          <CartPage cart={cart} setCart={setCart} />
        ) : (
          <ProductListing addToCart={addToCart} />
        )}
      </main>
    </div>
  );
}
