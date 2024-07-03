import React, { useState, useEffect } from "react";
import '../styles/home.css';
import myImage from '../images/my_img.jpg';

const fontAwesomeLoader = () => {
  const link = document.createElement("link");
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const Home = () => {

  React.useEffect(() => {
    fontAwesomeLoader();
  }, []);

  return (
    <div className="home">
      <div className="image-container">
        <img src={myImage} alt="Your Description" className="image" />
      </div>
      <div className="text-container">
        <h1 className="animated-text">Hi,</h1>
        <div className="animated-text">Sai Ghowtham Here!</div>
        <div className="typing-container">
          {/* <Typewriter
            words={['I\'m a passionate and innovative Software Developer with one year of hands-on experience in designing, developing and deploying high-performance web applications. My journey in software development has been marked by significant achievements and continuous learning, allowing me to contribute effectively to both frontend and backend development.']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> */}
          <p>I am a passionate and innovative Software Developer with one year of hands-on experience in designing, developing and deploying high-performance web applications. My journey in software development has been marked by significant achievements and continuous learning, allowing me to contribute effectively to both frontend and backend development.</p>
        </div>
        <div className="icon-container">
            <a href="mailto:saighowtham.madala@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/saighowthammadala/" className="icon-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/SaiGhowthamMadala" className="icon-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/ghowtham__chowdary/" className="icon-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Home;
