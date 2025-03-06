import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState(localStorage.getItem("user") || "");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      localStorage.setItem("user", username);
      login();
      navigate("/products");
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="login-container">
      {isAuthenticated ? (
        <div className="greeting-container">
          <h2>Welcome, {username}!</h2>
          <button className="small-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
