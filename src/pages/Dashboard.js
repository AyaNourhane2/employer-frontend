import React from 'react';
import { rolesData } from '../data/rolesData';
import RoleCard from '../Components/RoleCard';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Tableau de bord des Employés</h1>
      <div className="roles-container">
        {Object.entries(rolesData).map(([role, data]) => (
          <RoleCard
            key={role}
            role={role}
            title={data.title}
            color={data.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;