import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RoleDetails from './pages/RoleDetails';
import ApplicationForm from './pages/ApplicationForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/role/:role" element={<RoleDetails />} />
        <Route path="/apply/:role" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
};

export default App;