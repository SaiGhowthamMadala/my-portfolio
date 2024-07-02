import React, { useState, useEffect } from "react";
import '../styles/home.css';
import myImage from '../images/my_img.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

  return (
    <div className="home">
      <div className="image-container">
        <img src={myImage} alt="Your Description" className="image" />
      </div>
      <div className="text-container">
        <h1 className="animated-text">Hi,</h1>
        <div className="animated-text">Sai Ghowtham Here!</div>
        <div className="typing-container">
          <Typewriter
            words={['I\'m a passionate and innovative Software Developer with one year of hands-on experience in designing, developing and deploying high-performance web applications. My journey in software development has been marked by significant achievements and continuous learning, allowing me to contribute effectively to both frontend and backend development.']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
