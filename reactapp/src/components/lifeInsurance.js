import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './lifeInsurance.css';

const InsuranceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    age: '',
    gender: '',
    policyProvider: '',
    annualIncome: '',
    occupation: '',
    education: '',
    propertyDocuments: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      propertyDocuments: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
  
    // Redirect to the summary page
    navigate('/policies', { state: formData });
  };

  return (
    <div className="form-container1">
      <div className="image-container1">
        <img
          src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689222100/life-insurance-template-social-media-post_53876-119136_wslmce-removebg-preview_o3gdsq.png'}
          alt="Insurance"
        />
      </div>
      <div className="form-content1">
        <h1>
          Get Your Life <span className="blue">Insured</span> at Just ₹<span className="blue">99</span> per month
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group1">
            <label htmlFor="mobile">Mobile:</label>
            <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </div>
          <div className="form-group1">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div className="form-group1">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group1">
            <label htmlFor="policyProvider">Policy Provider:</label>
            <select id="policyProvider" name="policyProvider" value={formData.policyProvider} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="provider1">Provider 1</option>
              <option value="provider2">Provider 2</option>
              <option value="provider3">Provider 3</option>
            </select>
          </div>
          <div className="form-group1">
            <label htmlFor="annualIncome">Annual Income:</label>
            <input type="number" id="annualIncome" name="annualIncome" value={formData.annualIncome} onChange={handleChange} required />
          </div>
          <div className="form-group1">
            <label htmlFor="occupation">Occupation:</label>
            <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required />
          </div>
          <div className="form-group1">
            <label htmlFor="education">Education:</label>
            <input type="text" id="education" name="education" value={formData.education} onChange={handleChange} required />
          </div>
          <div className="form-group1">
            <label htmlFor="propertyDocuments">Property Documents:</label>
            <input type="file" id="propertyDocuments" name="propertyDocuments" onChange={handleFileChange} required />
          </div>
          <div className="form-group1">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsuranceForm;
