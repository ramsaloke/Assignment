import React from 'react';
import './UpcomingSchedule.css';
import SimpleAppointmentCard from './simpleAppointmentCard';
import appointmentsData from '../data/appointments';  

const UpcomingSchedule = () => {

  return (
    <div className="upcoming-schedule card">
      <h2 className="schedule-title">The Upcoming Schedule</h2>
      
      {appointmentsData.days.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h3 className="day-title">On {daySchedule.day}</h3>
          <div className="day-appointments">
            {daySchedule.appointments.map((appointment) => (
              <SimpleAppointmentCard 
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;