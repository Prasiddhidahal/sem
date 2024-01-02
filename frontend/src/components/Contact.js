import React, { useState, useEffect } from "react";
import "./Contact.css"; // Import the CSS file
import contact from "../Images/contact.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactForm() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Add animation or transition when the component mounts
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 1000); // Adjust the duration of animation/transition as needed
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    // Add functionality for handling form submission here if needed
  }

  return (
    <div>
      <Navbar />
      <div className={`contact-container ${isHovered ? "animate" : ""}`}>
        <img src={contact} alt="contact" className="contactimg" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button
            type="submit"
            className={isHovered ? "hovered" : ""}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactForm;
