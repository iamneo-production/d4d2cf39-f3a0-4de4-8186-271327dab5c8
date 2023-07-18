import React, { useState } from 'react';
import './payment.css';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePaymentMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Selected payment method:', selectedMethod);
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Select a Payment Method:</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="payment-methods">
          <label className={`payment-method ${selectedMethod === 'Credit Card' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="paymentMethod"
              value="Credit Card"
              checked={selectedMethod === 'Credit Card'}
              onChange={() => handlePaymentMethodSelect('Credit Card')}
            />
            <img src="https://res.cloudinary.com/duj7wgdt8/image/upload/v1689265117/zbpwkm93uxtkktnev6lz.png" alt="Credit Card" />
            <span>Credit Card</span>
          </label>
          <label className={`payment-method ${selectedMethod === 'PayPal' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="paymentMethod"
              value="PayPal"
              checked={selectedMethod === 'PayPal'}
              onChange={() => handlePaymentMethodSelect('PayPal')}
            />
            <img src="https://res.cloudinary.com/duj7wgdt8/image/upload/v1689265235/waqxgyjatd6kbgyx4lnt.png" alt="PayPal" />
            <span>PayPal</span>
          </label>
          <label className={`payment-method ${selectedMethod === 'Apple Pay' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="paymentMethod"
              value="Apple Pay"
              checked={selectedMethod === 'Apple Pay'}
              onChange={() => handlePaymentMethodSelect('Apple Pay')}
            />
            <img src="https://res.cloudinary.com/duj7wgdt8/image/upload/v1689265406/qbvaeb0izcqu09ntd1a8.png" alt="Apple Pay" />
            <span>Apple Pay</span>
          </label>
        </div>
        <button className="proceed-to-pay-button1" type="submit" disabled={!selectedMethod}>
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default Payment;
