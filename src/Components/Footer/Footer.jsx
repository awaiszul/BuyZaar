import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const handleFooterClick = (category) => {
    if (category === "Home") {
      navigate("/");
    } else if (category === "All products") {
      navigate("/all-products");
    } else {
      navigate(`/all-products?category=${category}`);
    }
  };
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Welcome to <strong>BuyZaar</strong>, your one-stop destination for
            all your fashion, beauty, and lifestyle needs. We bring quality and
            trust right to your doorstep.
          </p>
        </div>

        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li onClick={() => handleFooterClick("Home")}>Home</li>
            <li onClick={() => handleFooterClick("All products")}>
              All products
            </li>
            <li onClick={() => handleFooterClick("Men")}>Men</li>
            <li onClick={() => handleFooterClick("Women")}>Women</li>
            <li onClick={() => handleFooterClick("Kids")}>Kids</li>
            <li onClick={() => handleFooterClick("Beauty")}>Beauty</li>
            <li onClick={() => handleFooterClick("Jenz")}>Jenz</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer Support</h3>
          <ul>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Order Tracking</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt /> Usman Wala, Lahore, Pakistan
            </li>
            <li>
              <FaPhone /> +92 3240208835
            </li>
            <li>
              <FaEnvelope /> mawaiszulfqar786@gmail.com
            </li>
          </ul>
          <div className="social-icons">
            <FaFacebook className="social" />
            <FaInstagram className="social" />
            <FaTwitter className="social" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} This Website BuyZaar officially made
          by Muhammad Awais. All Rights Reserved by Muhammad Awais.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
