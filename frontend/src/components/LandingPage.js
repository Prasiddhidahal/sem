import React from "react";
import Navbar from "./Navbar";
import "./LandingPage.css";
import prassImage from "../Images/prass.png";
import loveImage from "../Images/Land2.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/insta.png";
import twitter from "../Images/twitter.png";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
/>;

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Gesture Sync</h1>
        <h2>Translating Hands to Heart</h2>

        <div className="images">
          <img src={prassImage} alt="Prass" />
          <img src={loveImage} alt="Love" />
        </div>

        <h1>Know What Your Loved One Is Trying to Tell You</h1>

        <div className="social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="insta" />
          </a>
          <a
            href="https://www.Twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
