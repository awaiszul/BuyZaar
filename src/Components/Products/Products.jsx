import React from "react";
import products from "../../Components/API/Products.json";
import "./Products.css";
import Demoimg from "../../assets/women/women.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import Headers from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import WhatsappButton from "../Whatsapp Button/WhtsappButton";
import PurchasePopup from "../PopUp/PurchasePopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { myContextAPI } from "../ContextAPI/ContextAPI";

const TopProducts = () => {
  const productsWithId = products.map((item, index) => ({
    ...item,
    id: index + 1, // 👈 Adds id: 1, 2, 3, ...
  }));

  const { addToWishlist, addToCart } = useContext(myContextAPI);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  // Filter based on category if present
  const filteredProducts = productsWithId.filter((item) => {
    const matchesCategory = category
      ? item.category?.toLowerCase() === category.toLowerCase()
      : true;

    const matchesSearch = search
      ? item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.detail?.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Headers />
      <Navbar />
      <div className="top-products">
        <div className="top-products-wrapper">
          {/* LEFT SIDE - Heading */}
          <div className="left-content">
            <h2>
              {search
                ? `Search Results for "${search}"`
                : category
                ? `${category} Products`
                : "All Products"}
            </h2>
          </div>

          {/* RIGHT SIDE - Products Grid */}
          {filteredProducts.length === 0 ? (
            <p>No products found for "{category || search}"</p>
          ) : (
            <div className="right-products">
              {filteredProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    onError={(e) => {
                      e.target.onerror = null;
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
          )}
        </div>
      </div>
      <Footer />
      <WhatsappButton />
      <PurchasePopup />
      <ToastContainer position="bottom-left" autoClose={4000} />
    </>
  );
};

export default TopProducts;
