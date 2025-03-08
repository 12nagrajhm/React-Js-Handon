import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout, onToggleDarkMode }) => {
  return (
    <nav>
      <h1>E-Commerce Store</h1>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <button onClick={onToggleDarkMode}>Toggle Mode</button>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
