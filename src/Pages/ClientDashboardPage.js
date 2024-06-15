import React from 'react';

const ClientDashboardPage = () => {
  return (
    <div className='section'>
      <div className='nav'>
        <h4>Client Dashboard</h4>
        <div className='client'>
          <a href='#'>Create New Itinerary</a>
          <a href='#'>Edit Itinerary</a>
        </div>
      </div>
      <div className='mid'>Welcome to Client Dashboard Page</div>
    </div>
  );
};

export default ClientDashboardPage;
