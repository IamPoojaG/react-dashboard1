import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import B2cClientPage from './Pages/B2C_ClientsPage.js';
import ClientDashboardPage from './Pages/ClientDashboardPage.js';
import ClientReportPage from './Pages/ClientReportPage.js';
import ClientProfilePage from './Pages/ClientProfilePage.js';
import ClientsFromExcelPage from './Pages/ClientFromExcelPage.js';
import OccasionsPage from './Pages/OccasionsPage.js';
import SideNavbar from './components/SideNavbar.js';

function App() {
  return (
    <Router>
      <SideNavbar>
        <Routes>
          <Route path='/' element={<ClientDashboardPage />} />
          <Route path='/b2cclientpage' element={<B2cClientPage />} />
          <Route path='/clientreportpage' element={<ClientReportPage />} />
          <Route path='/clientprofilepage' element={<ClientProfilePage />} />
          <Route
            path='/clientsfromexcelpage'
            element={<ClientsFromExcelPage />}
          />
          <Route path='/occasionpage' element={<OccasionsPage />} />
        </Routes>
      </SideNavbar>
    </Router>
  );
}

export default App;
