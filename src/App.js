import React from 'react';
import Dashboard from './assets/dashboard/Dashboard';
import Searchbar from './assets/searchbar/Searchbar';
import Sidebar from './assets/sidebar/Sidebar';

const App = () => {
  return (
    <>
      <Sidebar/>
      <Searchbar/>
      <Dashboard/>
    </>
  )
}

export default App;