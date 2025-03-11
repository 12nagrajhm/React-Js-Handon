import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      alert(response.data.message);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p className="toggle-link">
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
