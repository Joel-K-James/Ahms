import React from 'react';
import '../Styles/Whatsapp.css'; 
import Whatsapp from "../Images/whatsapp.png"
const WhatsAppButton = () => {
 
  const whatsappUrl = `https://wa.me/9656216164`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <img src={Whatsapp} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
