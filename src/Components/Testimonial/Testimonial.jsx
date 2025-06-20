import React from "react";
import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Ayesha Khan",
    message: "Absolutely love the products! Fast delivery and great quality. Will shop again for sure!",
    rating: 5,
  },
  {
    name: "Ali Raza",
    message: "Very professional service. Product quality exceeded expectations. Highly recommended.",
    rating: 4,
  },
  {
    name: "Fatima Zahra",
    message: "The variety is great, and the delivery was super fast. Love the packaging too.",
    rating: 5,
  },
  {
    name: "Ahmed Junaid",
    message: "Ordered twice and both times had a smooth and easy experience. Great service!",
    rating: 5,
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <div className="user-info">
                <FaUserCircle className="user-icon" />
                <span className="user-name">{item.name}</span>
              </div>
              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <AiFillStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-msg">"{item.message}"</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
