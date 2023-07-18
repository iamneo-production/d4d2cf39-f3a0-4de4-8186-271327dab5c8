import React, { useState, useEffect, lazy, Suspense } from 'react';
import './policies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing, faShieldAlt, faSkullCrossbones, faChartLine } from '@fortawesome/free-solid-svg-icons';


const TermLife = lazy(() => import('./termLife'));
const Universal = lazy(() => import('./universal'));
const Summary = lazy(() => import('./summary'));
const policiesData = [
  {
    id: 1,
    title: 'Term Life Insurance',
    icon: faLifeRing,
    contentComponent: TermLife,
  },
  {
    id: 2,
    title: 'Universal Life Insurance',
    icon: faShieldAlt,
    contentComponent: Universal,
  },
  {
    id: 3,
    title: 'Accidental Death and Dismemberment Insurance',
    icon: faSkullCrossbones,
    contentComponent: TermLife,
  },
  {
    id: 4,
    title: 'Indexed Universal Life Insurance',
    icon: faChartLine,
    contentComponent: Summary,
  },
  // Add more policies as needed
];

const Policies = () => {
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
      <h2 className="policies-heading">Life Insurance Policies</h2>
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

export default Policies;
