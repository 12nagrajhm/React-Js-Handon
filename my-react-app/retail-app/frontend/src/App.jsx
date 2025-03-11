import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';

const ProtectedRoute = ({ element }) => {
  const user = localStorage.getItem('user');
  return user ? element : <Navigate to="/login" />;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
    </Routes>
  </Router>
);

export default App;
