// src/components/WishlistPage.jsx
import React, { useContext } from "react";
import { myContextAPI } from "../ContextAPI/ContextAPI";
import Demoimg from "../../assets/women/women.png"; // ✅ Demo image for fallback
import "./WishlistPage.css"; // ✅ External CSS
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const WishlistPage = () => {
  const { wishlist, removeWishlist, addToCart   } = useContext(myContextAPI);
  const navigate = useNavigate();

  const handleAddToWishlist = (item) => {
    addToCart(item); // ✅ Add item to wishlist
    navigate("/cart"); // ✅ Navigate to wishlist
  };
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="wishlist-container">
      <h2 className="wishlist-title">💖 Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="wishlist-empty">No items in wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
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

              <button className="wishlist-btn-cart" onClick={()=>handleAddToWishlist(item)}>Add to Cart</button>
              <button
                className="wishlist-btn-remove"
                onClick={() => removeWishlist(item)}
              >
                ❌ Remove from Wishlist
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

export default WishlistPage;
