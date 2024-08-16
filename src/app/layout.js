'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);
      if (productInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <html lang="en">
      <body className={inter.className}>
      {React.cloneElement(children, { addToCart, cart })}
        </body>
    </html>
  );
}
