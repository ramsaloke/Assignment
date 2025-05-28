import React from 'react';
import './AnatomySection.css';
import healthData from '../data/healthData';

const AnatomySection = () => {
  return (
    <div className="anatomy-section card">
      <div className="anatomy-image-container">
        <div className="anatomy-image">
          <img src="/src/assets/images/anatomy.avif" alt="Human Anatomy" className="anatomy-img" />
          
          {/* Health indicators */}
          {healthData.anatomyIndicators.map((indicator) => (
            <div key={indicator.id} className="health-indicator" style={{top: indicator.position.top, left: indicator.position.left}}>
              <div className={`indicator-dot ${indicator.status}`}></div>
              <div className="indicator-label">{indicator.name}</div>
            </div>
          ))}
        </div>
        
        <div className="anatomy-slider">
          <div className="slider-dot"></div>
        </div>
      </div>
      
      <div className="anatomy-title">
        <h2>Human Anatomy</h2>
      </div>
      
      <div className="details-link">
        <button className="details-button">Details</button>
        <span className="details-arrow">→</span>
      </div>
    </div>
  );
};

export default AnatomySection;