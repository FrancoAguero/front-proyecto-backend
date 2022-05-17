import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from '../components'
import MarketScreen from '../views/MarketScreen'

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MarketScreen />}/>
      </Routes>
    </>
  );
}

export default DashboardRoutes;
