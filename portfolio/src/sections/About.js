import React from 'react';
import '../styles/About.css';
import myImage from '../images/bitmoji.png';

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1 className='about-h1'>About Me!</h1>
        <p className='about-info'>
        Hello! I'm currently pursuing Master's in Information Science and Technology at Missouri S&T. With a solid educational foundation from Amrita School of Engineering, Coimbatore. I've been privileged to apply my skills and knowledge as a Associate Software Engineer at SS&C Intralinks, contributing to various successful challenges!
        <br/><br/>
        Always eager to learn and quick to adapt!!
        <br/><br/>
        When I'm not immersed in technology, you'll find me exploring new destinations, playing badminton, socializing online, watching movies, and engaging in conversations to explore new business ideas. Whether collaborating on projects or embarking on solo ventures, I'm passionate about turning digital dreams into reality!!!
        </p>
      </div>
      <img src={myImage} alt="About" className="image" />
    </section>
  );
};

export default AboutSection;
