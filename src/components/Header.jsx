import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-text"><span className="logo-highlight">Health</span>care.</span>
        </div>
      </div>
      
      <div className="search-container">
        <div className="search-bar">
          <i className="search-icon">🔍</i>
          <input type="text" placeholder="Search" />
          <div className="notification-icon">🔔</div>
        </div>
      </div>
      
      <div className="header-right">
        <div className="user-profile">
          <div className="avatar">
            <img src="/avatar-placeholder.png" alt="User" />
          </div>
        </div>
        <button className="add-button">
          <span>+</span>
        </button>
      </div>
    </header>
  );
};

export default Header;