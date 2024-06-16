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
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeclassName='active'
          >
            <div className='link_text'>{item.name}</div>

            {item.name === 'B2c Clients' ? (
              <span className='notification'>215</span>
            ) : (
              ''
            )}
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideNavbar;
