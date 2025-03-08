import React from "react";

const Signup = ({ onLogin }) => (
  <div className="login">
    <h1>Sign Up</h1>
    <button onClick={onLogin}>Sign Up</button>
  </div>
);

export default Signup;
