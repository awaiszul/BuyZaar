import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const fakePurchases = [
  "Ali from Lahore just bought a Men's Shirt",
  "Zara from Karachi just purchased a Lipstick",
  "Ahmad from Islamabad just ordered a Jacket",
  "Fatima from Multan bought a Kids Toy",
  "Usman from Faisalabad ordered a Watch",
];

const PurchasePopup = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMsg = fakePurchases[Math.floor(Math.random() * fakePurchases.length)];
      toast.success(randomMsg, {
        icon: '🛍️',
      });
    },15000); // show every 15 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return null; // popup works silently
};

export default PurchasePopup;
