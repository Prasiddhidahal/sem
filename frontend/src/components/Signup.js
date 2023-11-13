// Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import signupImage from "../Images/signup.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import google from "../Images/google.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <div className="signup-image">
          <img src={signupImage} alt="Signup" />
        </div>
        <div className="signup-form">
          <h1>Create an Account</h1>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>

            {/* Use the pink-button class for the login button */}
            <Link to="/register" className="pink-button">
              Create Account
            </Link>
          </form>
          <div className="google-sign-in">
            <div className="google-button-container">
              {/* You can add Google Sign-In logic here if needed */}
              <button type="button">
                Sign up with Google
                <img src={google} alt="google" className="google-logo" />
              </button>
            </div>

            <div className="signup-options">
              <h3>Already have an account?</h3>
              <div className="color">
                <Link to="/login">
                  <p>Login</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
