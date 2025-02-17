import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RentoraDashboard from './pages/dashboard.jsx';
import Login_Register from './pages/login_register.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<RentoraDashboard />} /> */}
        <Route path="/account" element={<Login_Register />} />
      </Routes>
    </Router>
  )
}

export default App;
