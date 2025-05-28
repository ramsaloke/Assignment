import React from 'react';
import './simpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-info">
        <h4 className="appointment-title">{title}</h4>
        <div className="appointment-time">{time}</div>
      </div>
      <div className="appointment-icon">{icon}</div>
    </div>
  );
};

export default SimpleAppointmentCard;