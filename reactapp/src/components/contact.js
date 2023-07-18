import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src="https://res.cloudinary.com/duj7wgdt8/image/upload/v1689241826/jsabdw8zcjcfftlgxl7w.jpg" alt="Contact" className="contact-image" />
      </div>
      <div className="contact-right">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-info">
          <p className="contact-text">
            Have any questions or need assistance? Feel free to reach out to our support team. We're here to help!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>+1 123 456 7890</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>contact@policybazaar.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Main Street, New York, USA</span>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <h2 className="form-heading">Send Us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
