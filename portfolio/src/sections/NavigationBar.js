import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="nav-links"
          >
            Home
          </Link>
          </li>
          <li className="nav-item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="nav-links"
          >
            About
          </Link>
          </li>
          <li className="nav-item">
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="nav-links"
          >
            Experience
          </Link>
          </li>
          <li className="nav-item">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="nav-links"
          >
            Projects
          </Link>
          </li>
          <li className="nav-item">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="nav-links"
          >
            Contact
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
