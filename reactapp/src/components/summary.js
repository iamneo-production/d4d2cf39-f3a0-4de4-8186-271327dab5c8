import React from 'react';
//import { useLocation } from 'react-router-dom';
import './summary.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};

  const handleProceedToPay = () => {
    navigate('/payment');
  };


  return (
    <div className="summary-container">
      <h2 className="summary-heading">Summary:</h2>
      <div className="summary-item">
        <span className="summary-label">Name:</span>
        <span className="summary-value">{formData.name}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Mobile:</span>
        <span className="summary-value">{formData.mobile}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Age:</span>
        <span className="summary-value">{formData.age}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Gender:</span>
        <span className="summary-value">{formData.gender}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Policy Provider:</span>
        <span className="summary-value">{formData.policyProvider}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Annual Income:</span>
        <span className="summary-value">{formData.annualIncome}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Occupation:</span>
        <span className="summary-value">{formData.occupation}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Education:</span>
        <span className="summary-value">{formData.education}</span>
      </div>
      <div className="summary-item summary-property-documents">
        <label>Property Documents:</label>
        {formData.propertyDocuments ? (
          <a href={formData.propertyDocuments.name} target="_blank" rel="noopener noreferrer">
            {formData.propertyDocuments.name}
          </a>
        ) : (
          <span>No documents uploaded</span>
        )}
      </div>
      <div className="summary-item summary-button-container">
        <button className="proceed-to-pay-button" onClick={handleProceedToPay}>
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Summary;
