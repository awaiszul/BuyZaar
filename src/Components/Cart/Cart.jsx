// src/components/Cart.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { myContextAPI } from "../ContextAPI/ContextAPI";
import { FaShoppingBasket } from "react-icons/fa";
import Demoimg from "../../assets/women/women.png";
import "../WishlistPage/WishlistPage.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const {
    cart,
    addToWishlist,
    removeFromCart
  } = useContext(myContextAPI);

  const navigate = useNavigate();

  const handleAddToWishlist = (item) => {
    addToWishlist(item); // ✅ Add item to wishlist
    navigate("/wishlist"); // ✅ Navigate to wishlist
  };

  return (
    <>
    <Header/>
    <Navbar/>
    <div className="wishlist-container">
      <h2 className="wishlist-title">
        <FaShoppingBasket /> Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="wishlist-empty">No items in cart.</p>
      ) : (
        <div className="wishlist-grid">
          {cart.map((item) => (
            <div key={item.id || item.title} className="wishlist-card">
              <img
                src={item.image || Demoimg}
                alt={item.title}
                className="wishlist-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = Demoimg;
                }}
              />
              <h3 className="wishlist-product-title">{item.title}</h3>
              <p className="wishlist-product-detail">{item.detail}</p>
              <p className="wishlist-product-price">${item.price || "N/A"}</p>

              <button
                className="wishlist-btn-cart"
                onClick={() => handleAddToWishlist(item)}
              >
                💖 Add to Wishlist
              </button>

              <button
                className="wishlist-btn-remove"
                onClick={() => removeFromCart(item)}
              >
                ❌ Remove from Cart
              </button>

              <button className="wishlist-btn-buy">Shop Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
