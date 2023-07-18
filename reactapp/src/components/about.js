import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faSearch, faPencilAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
        <div className="image-container2">
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689239647/images_etxite-removebg-preview_1_ga8t2g.png'} alt="Insurance" />
      </div>
      <h1 className="about-heading">Welcome to Our Insurance Portal</h1>
      <div className="about-info">
        <h2 className="section-title">About Us</h2>
        <p className="section-content">
          Our Insurance Portal is a one-stop solution for all your insurance needs. We provide a wide range of insurance
          products to ensure the financial security and peace of mind of our customers. With our user-friendly interface
          and efficient processes, obtaining insurance coverage has never been easier.
        </p>
      </div>
      <div className="about-steps">
        <h2 className="section-title">How to Use Our Portal</h2>
        <div className="step">
          <div className="step-icon">
            <FontAwesomeIcon icon={faUserShield} />
          </div>
          <div className="step-content">
            <h3>Step 1: Register or Login</h3>
            <p>Create an account or login to your existing account on our portal to access all our insurance services and
              features. We ensure the security of your personal information throughout the registration process.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="step-content">
            <h3>Step 2: Explore Insurance Products</h3>
            <p>Browse through our extensive collection of insurance products, including life insurance, health insurance,
              car insurance, and more. Get detailed information about each product to make an informed decision.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon">
            <FontAwesomeIcon icon={faPencilAlt} />
          </div>
          <div className="step-content">
            <h3>Step 3: Customize Your Coverage</h3>
            <p>Customize your insurance coverage according to your specific needs. Select the desired coverage amount, policy
              duration, and additional benefits to create a tailored insurance plan that suits your requirements.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="step-content">
            <h3>Step 4: Apply and Manage Policies</h3>
            <p>Submit your application for the chosen insurance policy through our seamless application process. Once approved,
              you can conveniently manage your policies, make premium payments, and access policy documents through your
              personalized account.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
