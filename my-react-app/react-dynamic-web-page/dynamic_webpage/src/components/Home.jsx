import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Welcome to Our Website</h1>
    <p>Discover amazing features and dynamic pages.</p>
    <Link to="/about" className="btn">Learn More</Link>
  </div>
);

export default Home;
