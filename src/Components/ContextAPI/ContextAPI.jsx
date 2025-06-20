import { createContext, useState } from "react";
import React from "react";
import { toast } from "react-toastify";

export const myContextAPI = createContext();

const MyWishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (item) => {
    if (!item || !item.id) return;

    const alreadyExists = wishlist.some(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (alreadyExists) {
      toast.info("✅ This product is already in your wishlist!", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      setWishlist((prev) => [...prev, item]);
      toast.success("💖 Added to wishlist!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const removeWishlist = (item) => {
    if (!item || !item.id) return;

    setWishlist((prev) =>
      prev.filter((wishlistItem) => wishlistItem.id !== item.id)
    );

    toast.error("❌ Removed from wishlist", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // ✅ Moved outside
  const addToCart = (item) => {
    if (!item || !item.id) return;

    const exists = cart.some((i) => i.id === item.id);
    if (exists) {
      toast.info("🛒 Already in cart");
    } else {
      setCart((prev) => [...prev, item]);
      toast.success("🛒 Added to cart");
    }
  };

  const removeFromCart = (item) => {
    if (!item || !item.id) return;

    setCart((prev) => prev.filter((i) => i.id !== item.id));
    toast.error("❌ Removed from cart");
  };

  return (
    <myContextAPI.Provider
      value={{
        wishlist,
        addToWishlist,
        removeWishlist,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </myContextAPI.Provider>
  );
};

export default MyWishlistProvider;
