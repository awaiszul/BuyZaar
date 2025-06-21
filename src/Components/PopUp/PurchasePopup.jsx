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
    const showNotification = () => {
      if (document.visibilityState === "visible") {
        const randomMsg =
          fakePurchases[Math.floor(Math.random() * fakePurchases.length)];
        toast.success(randomMsg, {
          icon: '🛍️',
        });
      }
    };

    const interval = setInterval(showNotification, 15000);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default PurchasePopup;
