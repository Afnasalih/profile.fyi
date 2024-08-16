'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CartPage = ({ cart, setCart }) => {
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState('fixed');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleQuantityChange = (index, amount) => {
    const updatedCart = [...cart];
    const newQuantity = updatedCart[index].quantity + amount;

    
    if (newQuantity <= 0) {
      setError('Quantity cannot be less than 1.');
      return;
    }

    setError(''); 
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const applyDiscount = (type, value) => {
    setDiscountType(type);
    setDiscount(value);
  };

  const subtotal = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const discountAmount = discountType === 'percentage' ? (subtotal * (discount / 100)) : discount;
  const total = Math.max(subtotal - discountAmount, 0);

  

  return (
    <div className='p-10'>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((product, index) => (
              <div key={index} className="border-b py-4 flex items-center justify-between">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold">{product.name}</h3>
                  <p className="text-gray-700">${product.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    className="bg-gray-200 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    readOnly
                    value={product.quantity}
                    className="w-10 text-center border-t border-b"
                  />
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    className="bg-gray-200 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
            <p className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Discount:</span>
              <span>- ${discountAmount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </p>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Apply Discount:</h4>
              <div className="flex items-center mb-2">
                <button
                  onClick={() => applyDiscount('fixed', 10)}
                  className="bg-red-500 shadow-lg border-2 hover:bg-red-800 text-white px-3 py-1 rounded mr-2"
                >
                  $10 off
                </button>
                <button
                  onClick={() => applyDiscount('percentage', 10)}
                  className="bg-red-500 text-white hover:bg-red-800 shadow-lg border-2 px-3 py-1 rounded"
                >
                  10% off
                </button>
              </div>
              <p className='text-sm'>choose the above coupons and apply</p>
            </div>

            <a href="/login">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
              >
                Proceed to Checkout
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;




