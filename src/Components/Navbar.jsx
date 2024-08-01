import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import logo from '../Images/Logo.jpg'
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
    <div className="navbar-container">
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Aboutus"className="nav-links" onClick={() => setIsOpen(false)}>
            About Us
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/Courses" className="nav-links" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/verify" className="nav-links" onClick={() => setIsOpen(false)}>
            Verify
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Gallery" className="nav-links" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contactus" className="nav-links" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
};



