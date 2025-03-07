import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    alert("Logged out successfully!");
    navigate("/");
  }, [navigate]);

  return <h2>Logging out...</h2>;
};

export default Logout;
