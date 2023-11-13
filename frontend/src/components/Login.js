// Login.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Login.css";
import loginImage from "../Images/login.png";
import Google from "../Images/google.png";
import Footer from "./Footer";
import Signup from "./Signup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here, such as authentication
    if (email && password) {
      // Add your authentication logic here
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign In logic here
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-image">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-input"
              />
            </div>

            <button type="submit">Login</button>
          </form>
          <div className="google-sign-in">
            <div className="google-button-container">
              <button type="button" onClick={handleGoogleSignIn}>
                Sign in with Google
                <img src={Google} alt="google" className="google-logo" />
              </button>
            </div>

            <div className="login-options">
              <h3>Don't have an account?</h3>
              <div className="color">
                {/* Link to Signup component */}
                <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
