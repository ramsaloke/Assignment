import React from 'react';
import './ActivityFeed.css';
import activityData from '../data/activityData';  

const ActivityFeed = () => {

  return (
    <div className="activity-feed card">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <div className="activity-summary">{activityData.summary}</div>
      </div>
      
      <div className="activity-chart">
        {activityData.activities.map((activity, activityIndex) => (
          <div key={activityIndex} className="activity-row">
            {activity.map((value, dayIndex) => (
              <div 
                key={dayIndex} 
                className="activity-bar-container"
              >
                <div 
                  className={`activity-bar color-${activityIndex % 4}`} 
                  style={{ height: `${value}%` }}
                ></div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="activity-days">
        {activityData.days.map((day, index) => (
          <div key={index} className="activity-day">{day}</div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;