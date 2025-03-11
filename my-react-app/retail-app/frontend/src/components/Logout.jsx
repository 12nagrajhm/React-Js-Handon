import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <div className="logout-container">
      <div className="logout-box">
        <h2>Logout</h2>
        <p className="logout-message">Are you sure you want to log out?</p>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
