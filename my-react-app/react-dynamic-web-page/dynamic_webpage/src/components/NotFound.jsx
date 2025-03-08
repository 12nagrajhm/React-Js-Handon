import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to home page in 5 seconds...</p>
      <button className="btn" onClick={() => navigate("/")}>Go Now</button>
    </div>
  );
};

export default NotFound;
