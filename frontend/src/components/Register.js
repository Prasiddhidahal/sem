// Register.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import res from "../Images/res.png";
import "./Register.css"; // Import your CSS file
import Layout from "./Layout";

const Register = () => {
  useEffect(() => {
    // You can perform any necessary actions upon component mount
    // For example, you might want to make an API call for registration
    // and show a success message afterward.
    console.log("API call for registration...");

    // Display success message after a delay (simulating API call)
    setTimeout(() => {
      alert("You are now registered at Gesture Sync");
    }, 2000);
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <Layout>
      <div className="register-content">
        <img src={res} alt="Registration Success" className="register-image" />
        <h1>You are now registered at Gesture Sync</h1>
        <p>
          Click <Link to="/Profile">here to go to your profile</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Register;
