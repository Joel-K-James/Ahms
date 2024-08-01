import React, { useState,useEffect } from 'react';
import { db } from '../Config/Config';
import { doc, setDoc } from 'firebase/firestore';
import "../Styles/Contact.css"
export const Contactus = () =>{
  useEffect(()=>{
    window.scroll(0,0);
  },[]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const customId = 'msg' + Date.now();
      await setDoc(doc(db, "messages", customId), {
        ...formData,
        timestamp: new Date()
      });
      console.log("Document written with ID: ", customId);
      
      setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <h3>Contact Our Team</h3>
      <h1>Got Any Questions?</h1>
      
      <div className="contact-info">
        <div className="info-box">
          <i className="fas fa-map-marker-alt"></i>
          <h4>Address</h4>
          <p>#302, 5th Floor, VHLY-2247 ek,<br />Settlers Lane, New York.</p>
        </div>
        <div className="info-box">
          <i className="fas fa-envelope"></i>
          <h4>Email</h4>
          <p>mailone@example.com</p>
          <p>mailtwo@example.com</p>
        </div>
        <div className="info-box">
          <i className="fas fa-phone-alt"></i>
          <h4>Phone</h4>
          <p>+12 324-016-695</p>
          <p>+44 224-058-545</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter your name *" 
          required 
          value={formData.name}
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="subject" 
          placeholder="Enter subject" 
          value={formData.subject}
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email *" 
          required 
          value={formData.email}
          onChange={handleChange} 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Enter your Phone Number *" 
          required 
          value={formData.phone}
          onChange={handleChange} 
        />
        <textarea 
          name="message" 
          placeholder="Type your query here"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      


      {/* Placeholder for map */}
      <div className="map-container">
     <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kozhikode+(Ahms)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
      </div>
    </div>
  );
};


