import React, { useState, useEffect, lazy, Suspense } from 'react';
import './homepolicy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing, faShieldAlt, faSkullCrossbones, faChartLine } from '@fortawesome/free-solid-svg-icons';



const Tenant = lazy(() => import('./tenant'));

const policiesData = [
  {
    id: 1,
    title: 'Home Insurance By Hdfc Ergo',
    icon: faLifeRing,
    contentComponent: Tenant,
  },
  {
    id: 2,
    title: 'For the happy tenants',
    icon: faShieldAlt,
    contentComponent: Tenant,
  },
  {
    id: 3,
    title: 'For Proud Home Ownwers',
    icon: faSkullCrossbones,
    contentComponent: Tenant,
  },
  {
    id: 4,
    title: 'Affordable Premiums',
    icon: faChartLine,
    contentComponent: Tenant,
  },
  // Add more policies as needed
];

const HomePolicy = () => {
  const [activePolicy, setActivePolicy] = useState(null);

  const handlePolicyClick = (policyId) => {
    setActivePolicy(activePolicy === policyId ? null : policyId);
  };

  useEffect(() => {
    if (activePolicy) {
      document.documentElement.scrollTop = 0;
    }
  }, [activePolicy]);

  return (
    <div className="policies-container">
      <h2 className="policies-heading">Home Insurance Policies</h2>
      <div className="policies-list">
        {policiesData.map((policy) => (
          <div
            key={policy.id}
            className={`policy ${activePolicy === policy.id ? 'active' : ''}`}
            onClick={() => handlePolicyClick(policy.id)}
          >
            <div className="policy-icon">
              <FontAwesomeIcon icon={policy.icon} />
            </div>
            <div className="policy-title">{policy.title}</div>
          </div>
        ))}
      </div>
      {activePolicy && (
        <div className="policy-content">
          <Suspense fallback={<div>Loading...</div>}>
            {activePolicy && React.createElement(policiesData[activePolicy - 1].contentComponent)}
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default HomePolicy;
