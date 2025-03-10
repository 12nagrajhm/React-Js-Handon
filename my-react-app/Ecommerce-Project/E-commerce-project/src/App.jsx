import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div className={darkMode ? "dark" : "light"}>
        {!isLoggedIn ? (
          <Signup onLogin={handleLogin} />
        ) : (
          <>
            <Navbar onLogout={handleLogout} onToggleDarkMode={() => setDarkMode(!darkMode)} />
            <Routes>
              <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
              <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
              <Route path="/payment" element={<Payment cart={cart} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
