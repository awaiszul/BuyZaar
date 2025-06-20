import React, { use, useEffect, useState } from 'react';
import Slider from 'react-slick';
import './HeroSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import banner1 from '../../assets/hero/sale.avif';
import banner2 from '../../assets/hero/shopping.avif';
import banner3 from '../../assets/hero/women.avif';
import CountDown from './CountDown';
import { FaWhatsapp } from 'react-icons/fa';

const images = [
  { id: 1, image: banner1, alt: "Banner Image 1" },
  { id: 2, image: banner2, alt: "Banner Image 2" },
  { id: 3, image: banner3, alt: "Banner Image 3" }
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

const HeroSection = () => {
  // Countdown timer in seconds
  const navigate = useNavigate();
  return (
    <div className="slider">
      <Slider {...sliderSettings}>
        {images.map((item) => (
          <div key={item.id} className="slider-item">
            <img src={item.image} alt={item.alt} />
            <div className="slider-content">
              <h1>Big Sale is Live!</h1>
              <p>Up to 70% Off on All Products</p>
              <CountDown/>
              <button className="shop-btn" onClick={()=> navigate("/all-products")} >Shop Now</button>

            </div>
          </div>
          
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
