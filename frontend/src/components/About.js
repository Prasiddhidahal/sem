import React from "react";
import about from "../Images/about.png";
import Navbar from "./Navbar"; // Adjust the path based on your project structure
import "./About.css";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="about-container">
        <h1>About Us</h1>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
        </style>
        <h3>
          We are a team of developers dedicated to creating innovative software
          solutions.
        </h3>
        <h3>
          Our mission is to make technology accessible and user-friendly for
          everyone.
        </h3>
        <div className="images">
          <img src={about} alt="Prass" className="about-image" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
