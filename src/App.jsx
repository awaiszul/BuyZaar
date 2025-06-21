import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import TopProducts from './Components/TopProducts/TopProducts'
import Sales from './Components/Sales/Sales'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'
import WhatsappButton from './Components/Whatsapp Button/WhtsappButton';
import PurchasePopup from './Components/PopUp/PurchasePopup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyWishlistProvider from './Components/ContextAPI/ContextAPI';
import WishlistPage from './Components/WishlistPage/WishlistPage';
import Cart from './Components/Cart/Cart';
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <TopProducts />
      <Sales />
      <Testimonial />
      <Footer />
      <WhatsappButton/>
      <PurchasePopup/>
      <ToastContainer position="bottom-left" autoClose={4000} />
    </>
  );
};

function App() {
  return (
    <MyWishlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<Products/>} />
          <Route path="/wishlist" element={<WishlistPage/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </MyWishlistProvider>
  );
}

export default App;
