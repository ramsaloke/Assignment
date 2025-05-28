import React from 'react';
import './CalendarView.css';
import calendarData from '../data/calenderData';

const CalendarView = () => {
  return (
    <div className="calendar-view card">
      <div className="calendar-header">
        <h2 className="calendar-month">{calendarData.month}</h2>
        <div className="calendar-navigation">
          <button className="nav-button prev">◀</button>
          <button className="nav-button next">▶</button>
        </div>
      </div>
      
      <div className="calendar-grid">
        {calendarData.days.map((day, index) => (
          <div key={index} className="calendar-day-column">
            <div className="day-header">
              <div className="day-name">{day.day}</div>
              <div className="day-date">{day.date}</div>
            </div>
            <div className="day-appointments">
              {day.appointments.map((time, timeIndex) => (
                <div key={timeIndex} className="appointment-time">{time}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="appointment-cards">
        {calendarData.appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-icon">{appointment.icon}</div>
            <div className="appointment-details">
              <h3 className="appointment-title">{appointment.title}</h3>
              <div className="appointment-time">{appointment.time}</div>
              <div className="appointment-doctor">{appointment.doctor}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;