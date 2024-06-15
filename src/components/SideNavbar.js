import React from 'react';

import { NavLink } from 'react-router-dom';

const SideNavbar = ({ children }) => {
  const menuItem = [
    {
      path: '/',
      name: 'Client Dashboard',
    },
    {
      path: '/b2cclientpage',
      name: 'B2c Clients',
    },
    {
      path: '/occasionpage',
      name: 'Upcoming Occasions ',
    },
    {
      path: '/clientsfromexcelpage',
      name: 'Import Clients from Excel',
    },
    {
      path: '/clientreportpage',
      name: 'Clients Reports',
    },
    {
      path: '/clientprofilepage',
      name: 'Client Profile Settings',
    },
  ];
  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='top_section'>
          <h1 className='logo'>Dashboard</h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeclassName='active'
          >
            <div className='icon'>{item.icon}</div>
            <div className='link_text'>{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideNavbar;
