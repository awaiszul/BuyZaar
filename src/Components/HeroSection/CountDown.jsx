import React from 'react'
import { useState, useEffect } from 'react';
import './CountDown.css';

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours
    
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    
      return () => clearInterval(interval);
    }, []);
    
    const formatTime = (value) => String(value).padStart(2, '0');
    
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
  return (
    <>
      <div className="countdown-box">
                <div className="time-box" data-aos="flip-up">
                  <span className="time">{formatTime(hours)}</span>
                </div>
                <div className="time-box">
                  <span className="time">{formatTime(minutes)}</span>
                </div>
                <div className="time-box">
                  <span className="time">{formatTime(seconds)}</span>
                </div>
              </div>
    </>
  )
}

export default CountDown
