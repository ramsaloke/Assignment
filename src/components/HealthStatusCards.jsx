import React from 'react';
import './HealthStatusCards.css';
import healthData from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthData.healthStatus.map((item) => (
        <div key={item.id} className="health-card card">
          <div className="health-card-icon">
            {item.iconUrl ? <img src={item.iconUrl} alt={item.name} /> : item.icon}
          </div>
          <div className="health-card-content">
            <div className="health-card-header">
              <h3>{item.name}</h3>
              <span className="health-card-date">Date: {item.date}</span>
            </div>
            <div className="health-progress-bar">
              <div 
                className={`health-progress ${item.status}`} 
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;