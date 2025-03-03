import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rolesData } from '../data/rolesData';
import './RoleDetails.css';

const RoleDetails = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const roleDetails = rolesData[role];

  const handleApplyClick = () => {
    navigate(`/apply/${role}`);
  };

  return (
    <div className="role-details">
      <h2>{roleDetails.title}</h2>
      <div className="details-container">
        <div className="detail-item">
          <span className="detail-label">Description:</span>
          <span className="detail-value">{roleDetails.description}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Paiement mensuel:</span>
          <span className="detail-value">{roleDetails.monthlyPayment}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Permissions:</span>
          <span className="detail-value">{roleDetails.permissions}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Jours de congé:</span>
          <span className="detail-value">{roleDetails.holidayDays}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Temps de repos:</span>
          <span className="detail-value">{roleDetails.restTime}</span>
        </div>
      </div>
      <button onClick={handleApplyClick}>Postuler</button>
    </div>
  );
};

export default RoleDetails;