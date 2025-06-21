import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TopProduct from "../../Components/API/Products.json";
import "./TopProducts.css";
import Demoimg from "../../assets/women/women.png"; // Default image if product image is not available
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { useContext } from "react";
import { myContextAPI } from "../ContextAPI/ContextAPI";
const TopProducts = () => {
  const {
    wishlist,
    addToWishlist,
    removeWishlist,
    cart,
    addToCart,
    removeFromCart,
  } = useContext(myContextAPI);
  // Sirf 6 products dikha rahe hain example ke liye
  const navigate = useNavigate();
  const visibleProducts = TopProduct.slice(0, 10).map((item, index) => ({
    ...item,
    id: index + 1,
  }));
  // console.log(TopProduct);
  return (
    <div className="top-products">
      <div className="top-products-wrapper">
        {/* LEFT SIDE - Heading */}
        <div className="left-content">
          <h2>Top Products</h2>
          <p>Our most loved items – handpicked for you.</p>
        </div>

        {/* RIGHT SIDE - Products Grid */}
        <div className="right-products">
          {visibleProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                onError={(e) => {
                  e.target.onerror = null; // prevent infinite loop
                  e.target.src = Demoimg;
                }}
              />
              <h3>{product.title}</h3>
              <p>{product.detail}</p>
              <div className="icons">
                <div
                  className="cart-wrapper"
                  onClick={() => addToCart(product)}
                >
                  <HiOutlineShoppingCart className="cart-icon" />
                  <span>Add to Cart</span>
                </div>
                <div
                  className="wishlist-wrapper"
                  onClick={() => addToWishlist(product)}
                >
                  <FiHeart className="heart-icon" />
                  <span>Wishlist</span>
                </div>
              </div>

              <div className="shop-now-wrapper">
                <button className="shop-now-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="load-more-btn"
        onClick={() => navigate("/all-products")}
      >
        Load More
      </button>
    </div>
  );
};

export default TopProducts;
