import React, { useState } from "react";
import "./Login.css"; // Import external CSS file

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please enter a valid email and password.");
            return;
        }
        setIsLoggedIn(true);
        alert(`Login Successful: ${email}`);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail("");
        setPassword("");
        alert("Logged out successfully.");
    };

    return (
        <div className="login-container">
            <h2 className="login-title">{isLoggedIn ? "Welcome" : "Login"}</h2>
            {!isLoggedIn ? (
                <>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                    />
                    <br /><br />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />
                    <br /><br />
                    <button className="login-button" onClick={handleLogin}>Login</button>
                </>
            ) : (
                <>
                    <p className="welcome-text">You are logged in as <b>{email}</b></p>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </>
            )}
        </div>
    );
};

export default Login;
