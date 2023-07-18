import React, { useState, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import './termLife.css';

const Summary = lazy(() => import('./summary'));

const TermLife = () => {
  const [isChecked, setIsChecked] = useState(false);
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
  const [showSummary, setShowSummary] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      propertyDocuments: file,
    }));
  };

  const handleSubmit = () => {
    if (isChecked) {
      setShowSummary(true);
    } else {
      alert('Please accept the terms and conditions to proceed.');
    }
  };

  return (
    <div>
      <h1>Term Life Insurance</h1>
      <h2>Plan Details</h2>
      <p>Here are the plan details for Term Life Insurance:</p>
      <ul>
        <li>Coverage period: 10, 20, or 30 years</li>
        <li>Death benefit: Lump sum payout to beneficiaries</li>
        <li>Flexible premium payments</li>
        <li>Convertible to permanent life insurance</li>
      </ul>

      <h2>Add-on Benefits</h2>
      <div className="add-on-benefits">
        <div className="benefit">
          <h3>Accidental Death Benefit</h3>
          <p>Provides additional coverage in the event of accidental death.</p>
        </div>
        <div className="benefit">
          <h3>Critical Illness Rider</h3>
          <p>Covers specified critical illnesses and provides a lump sum payout.</p>
        </div>
        <div className="benefit">
          <h3>Waiver of Premium</h3>
          <p>Waives premium payments in case of disability or unemployment.</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        <h3>Q: How long does the coverage last?</h3>
        <p>A: The coverage period can be 10, 20, or 30 years, depending on your choice.</p>
      </div>
      <div className="faq">
        <h3>Q: Can I convert the term life insurance to permanent life insurance?</h3>
        <p>A: Yes, you have the option to convert the policy to a permanent life insurance policy.</p>
      </div>
      <div className="faq">
        <h3>Q: Are there any medical exams required?</h3>
        <p>A: Depending on your age and coverage amount, a medical exam may be required.</p>
      </div>

      <div className="terms-checkbox">
  <label htmlFor="termsCheckbox">
    <input type="checkbox" id="termsCheckbox" checked={isChecked} onChange={handleCheckboxChange} />
    I Acknowledge
  </label>
</div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>

      {showSummary && <Summary formData={formData} />}
    </div>
  );
};

export default TermLife;
