// Import necessary modules or libraries
import React from "react";
import "./Contact.css"; // Import the CSS file

import contact from "../Images/contact.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function handleSubmit(event) {
  event.preventDefault();
}

function ContactForm() {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <img src={contact} alt="contact" className="contactimg" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactForm;
