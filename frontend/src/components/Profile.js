// Profile.js
import React from "react";
import { Link } from "react-router-dom";
import profile from "../Images/profile.png"; // Replace with your image
import "./Profile.css"; // Create a CSS file for styling
import Layout from "./Layout";
const Profile = () => {
  return (
    <Layout>
      <div className="profile-image">
        <img src={profile} alt="Profile" />

        <div className="profile-container">
          <div className="profile-header">
            <h2 className="profile-name">Ananya Shahi </h2>
            <p className="profile-description">
              Web Developer | Passionate about coding
            </p>
          </div>
          <div className="profile-details">
            <p>Age: 25</p>
            <p>Location: Pokhara, Nepal</p>
            <p>Number: 9800000003</p>
          </div>
          <Link to="/Edit" className="edit-account-link">
            Edit Account
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
