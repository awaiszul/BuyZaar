import React from "react";
import CountdownTimer from "../HeroSection/CountDown";
import "./Sales.css";
import SaleImg from '../../assets/hero/sale.png';
import { FaCheckCircle, FaShippingFast, FaUndoAlt, FaHeadset } from 'react-icons/fa';
const Sales = () => {
  return (
    <>
      <div className="sale-section">
        <div className="left">
          <span role="img" aria-label="fire">
            🔥
          </span>{" "}
          Flash Sale
        </div>
        <div className="right">
          <CountdownTimer className="Timer" />
        </div>
      </div>
      <div className="sale-container">
      {/* LEFT IMAGE */}
      <div className="sale-left">
        <img src={SaleImg} alt="Flash Sale Product" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="sale-right">
        <h2>Exclusive Flash Sale!</h2>
        <p>Get the latest fashion trends at unbeatable prices. Hurry, offer valid till stocks last.</p>

        <ul className="sale-features">
          <li><FaCheckCircle className="icon" /> 100% Original Products</li>
          <li><FaShippingFast className="icon" /> Free Fast Shipping</li>
          <li><FaUndoAlt className="icon" /> Easy 7-Day Return Policy</li>
          <li><FaHeadset className="icon" /> 24/7 Customer Support</li>
        </ul>
        <button className="avail-now-btn">Avail Now</button>

        </div>
        </div>
    </>
  );
};

export default Sales;
