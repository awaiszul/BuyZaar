import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContextAPI } from "../ContextAPI/ContextAPI";

const Header = () => {
  const { wishlist, cart } = useContext(myContextAPI);
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="hright">
          <FaShoppingCart size={24} color="#FF4C60" />
          <span className="logo" onClick={() => navigate("/")}>
            BuyZaar
          </span>
        </div>
        <div className="typewriter">
          <h1>Welcome to Our brand new Website</h1>
        </div>
        <div className="hleft">
          {/* Wishlist Icon */}
          <div className="icon-wrapper">
            <Link to="/wishlist" className="icon-link">
              <FiHeart className="icon" />
              {wishlist.length > 0 && (
                <span className="wishlist-badge">{wishlist.length}</span>
              )}
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="icon-wrapper">
            <Link to="/cart" className="icon-link">
              <HiOutlineShoppingCart className="icon" />
              {cart.length > 0 && (
                <span className="wishlist-badge">{cart.length}</span>
              )}
            </Link>
          </div>

          {/* Profile Icon (Different Styling) */}
          <div className="icon-wrapper profile-icon-wrapper">
            <HiOutlineUserCircle className="icon profile-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
