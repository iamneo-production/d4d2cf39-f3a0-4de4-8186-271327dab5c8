import React from 'react';
import './compare.css'; // CSS file for styling

const InsuranceComparison = () => {
  const insuranceData = [
    {
      name: 'Insurance A',
      coverage: 'Full coverage',
      price: '$100/month',
      deductible: '$500',
      rating: '4.5/5',
      claims: '24/7',
      support: 'Phone, Email',
    },
    {
      name: 'Insurance B',
      coverage: 'Partial coverage',
      price: '$80/month',
      deductible: '$750',
      rating: '4/5',
      claims: 'Limited hours',
      support: 'Email',
    },
    {
      name: 'Insurance C',
      coverage: 'Limited coverage',
      price: '$60/month',
      deductible: '$1000',
      rating: '3.5/5',
      claims: '24/7',
      support: 'Phone',
    },
    // Additional rows
    {
      name: 'Insurance D',
      coverage: 'Basic coverage',
      price: '$50/month',
      deductible: '$1000',
      rating: '3/5',
      claims: 'Business hours',
      support: 'Email',
    },
    {
      name: 'Insurance E',
      coverage: 'Comprehensive coverage',
      price: '$120/month',
      deductible: '$500',
      rating: '4/5',
      claims: '24/7',
      support: 'Phone, Email',
    },
    {
      name: 'Insurance F',
      coverage: 'Limited coverage',
      price: '$70/month',
      deductible: '$750',
      rating: '3/5',
      claims: 'Limited hours',
      support: 'Phone',
    },
    {
      name: 'Insurance G',
      coverage: 'Full coverage',
      price: '$90/month',
      deductible: '$500',
      rating: '4/5',
      claims: '24/7',
      support: 'Phone, Email',
    },
    {
      name: 'Insurance H',
      coverage: 'Partial coverage',
      price: '$75/month',
      deductible: '$750',
      rating: '3.5/5',
      claims: 'Business hours',
      support: 'Email',
    },
    {
      name: 'Insurance I',
      coverage: 'Limited coverage',
      price: '$55/month',
      deductible: '$1000',
      rating: '3/5',
      claims: '24/7',
      support: 'Phone',
    },
    {
      name: 'Insurance J',
      coverage: 'Full coverage',
      price: '$110/month',
      deductible: '$500',
      rating: '4.5/5',
      claims: 'Limited hours',
      support: 'Phone, Email',
    },
    {
      name: 'Insurance K',
      coverage: 'Partial coverage',
      price: '$85/month',
      deductible: '$750',
      rating: '4/5',
      claims: '24/7',
      support: 'Phone',
    },
  ];

  return (
    <div className="insurance-comparison-container">
      <h1>Insurance Comparison</h1>
      <table className="insurance-table">
        <thead>
          <tr>
            <th>Insurance</th>
            <th>Coverage</th>
            <th>Price</th>
            <th>Deductible</th>
            <th>Rating</th>
            <th>Claims</th>
            <th>Support</th>
          </tr>
        </thead>
        <tbody>
          {insuranceData.map((insurance, index) => (
            <tr key={index}>
              <td>{insurance.name}</td>
              <td>{insurance.coverage}</td>
              <td>{insurance.price}</td>
              <td>{insurance.deductible}</td>
              <td>{insurance.rating}</td>
              <td>{insurance.claims}</td>
              <td>{insurance.support}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InsuranceComparison;
