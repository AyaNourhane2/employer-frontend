import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Candidature soumise : ${JSON.stringify(formData)}`);
  };

  return (
    <div className="application-form">
      <h2>Formulaire de Candidature</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Expérience:
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default ApplicationForm;