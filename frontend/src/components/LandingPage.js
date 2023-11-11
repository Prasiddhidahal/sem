// LandingPage.js

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import the Footer component
import "./LandingPage.css";
import loveImage from "../Images/Land2.png";
//import facebook from "../Images/facebook.png";
//import instagram from "../Images/insta.png";
//import twitter from "../Images/twitter.png";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Gesture Sync</h1>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
        </style>
        <h2>Translating Hands to Heart</h2>

        <div className="images"></div>
        <img src={loveImage} alt="Love" className="love" />
        <p>Know What Your Loved One Is Trying to Tell You</p>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Kenia&family=Libre+Baskerville:wght@700&display=swap');
        </style>
      </div>
      {/* Include the Footer component at the end of your landing page */}
      <Footer />
    </div>
  );
};

export default LandingPage;
