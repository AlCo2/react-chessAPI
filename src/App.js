import React from 'react';
import Dashboard from './assets/dashboard/Dashboard';
import Searchbar from './assets/searchbar/Searchbar';
import Sidebar from './assets/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Leaderboards from './assets/leaderboards/Leaderboards';

const App = () => {
  return (
      <>
        <Sidebar/>
        <Searchbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
       </Routes>
      </>
  );
};

export default App;