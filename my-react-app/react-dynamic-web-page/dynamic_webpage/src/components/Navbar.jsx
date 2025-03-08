import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">🏠 Home</Link>
      <Link to="/about">📖 About</Link>
      <Link to="/contact">📞 Contact</Link>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
