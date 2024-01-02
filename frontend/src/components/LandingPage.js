import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./LandingPage.css";
//import loveImage from "../Images/Land2.png";
import landi from "../Images/landi.png";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <img src={landi} alt="landi" className="landi" />
        <h1>Gesture Sync</h1>
        <h2>Translating Hands to Heart</h2>

        <p>Know What Your Loved One Is Trying to Tell You</p>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;