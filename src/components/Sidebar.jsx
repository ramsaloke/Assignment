import React from 'react';
import './Sidebar.css';
import navigationLinks from '../data/navigationLinks';

const Sidebar = () => {
  // Find the setting link and remove it from the original navigation
  let settingLink = null;
  const filteredNavLinks = navigationLinks.map(section => {
    if (section.section === 'Tools') {
      const filteredLinks = section.links.filter(link => {
        if (link.name === 'Setting') {
          settingLink = link;
          return false;
        }
        return true;
      });
      return { ...section, links: filteredLinks };
    }
    return section;
  });

  return (
    <div className="sidebar">
      <div className="sidebar-main">
        {filteredNavLinks.map((section, index) => (
          <div key={index} className="sidebar-section">
            <h3 className="sidebar-heading">{section.section}</h3>
            <ul className="sidebar-menu">
              {section.links.map((link) => (
                <li key={link.id} className={`sidebar-menu-item ${link.active ? 'active' : ''}`}>
                  <div className="menu-icon">{link.icon}</div>
                  <span>{link.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {settingLink && (
        <div className="sidebar-footer">
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <div className="menu-icon">{settingLink.icon}</div>
              <span>{settingLink.name}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;