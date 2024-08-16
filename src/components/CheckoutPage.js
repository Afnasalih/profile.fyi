'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Checkout Successful!</h2>
      <p className="text-lg">Thank you for your purchase.</p>
    </div>
  );
}
