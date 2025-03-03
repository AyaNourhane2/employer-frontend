import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleCard.css';

const RoleCard = ({ role, title, color }) => {
  const navigate = useNavigate();

  // Gestionnaire de clic pour naviguer vers les détails du rôle
  const handleClick = () => {
    navigate(`/role/${role}`);
  };

  return (
    <div
      className="role-card"
      style={{ backgroundColor: color }} // Appliquer la couleur de fond dynamique
      onClick={handleClick} // Naviguer vers les détails du rôle au clic
    >
      <h3>{title}</h3>
    </div>
  );
};

export default RoleCard;