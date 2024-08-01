import React, { useState, useEffect, useRef } from 'react';
import "../Styles/Aboutus.css"
import About from "../Images/Aboutus.jpg"
import { useNavigate } from 'react-router-dom';
import { Count } from '../Components/Count';
import { Navbar } from '../Components/Navbar';

export const Aboutus = () =>{
  useEffect(()=>{
    window.scroll(0,0);
  },[]);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/Contactus');
  };
  return (
    <section id="aboutus">
      <Navbar />
      <section className='space'>
    <div className="about-us-container">
    <div className="image-container">
      <img src={About} alt="Tour in Venice" className="about-image" />
    </div>
    <div className="content-container">
      <h2 className="about-subtitle">About Us</h2>
      <h1 className="about-tit">Enhance Your Skills </h1>
      <p className="about-description">
        Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
        ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
      <ul className="feature-list">
        <li>20+ Courses</li>
        <li>100% Trusted Agency</li>
        <li>4+ Years of Experience</li>
        <li>100% Students are Happy</li>
      </ul>
      <button className="booking-button" onClick={handleButtonClick}>Contact Us</button>
    </div>
  
  </div>
  <div>
  <Count />
  </div>
  </section>
  </section>
 
  )
}

