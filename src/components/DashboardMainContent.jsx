import React from 'react';
import './DashboardMainContent.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      
      <div className="dashboard-grid">
        <div className="top-row">
          <div className="anatomy-container">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          
          <div className="calendar-container">
            <CalendarView />
          </div>
        </div>
        
        <div className="bottom-row">
          <div className="activity-container">
            <ActivityFeed />
          </div>
          
          <div className="schedule-container">
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;