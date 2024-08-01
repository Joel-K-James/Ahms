import React from 'react';
import '../Styles/Footer.css';
import logo from '../Images/Logoblk.jpg'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="AHMS Logo" />
            </div>
            <div className="footer-stats">
                <h2>We have over 4 years Experience</h2>
                <p><strong>1,500</strong> Total Students</p>
                <p><strong>10</strong> Total Faculties</p>
                <p><strong>30</strong> Courses</p>
            </div>
            <div className="footer-contact">
                <h2>Contact Us</h2>
                <p>Follow us on:</p>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="mailto:info@example.com">Mail Us</a>
            </div>
        </footer>
    );
};

export default Footer;
