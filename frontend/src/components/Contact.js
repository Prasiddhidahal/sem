// Import necessary modules or libraries
import React from "react";
import "./Contact.css"; // Import the CSS file
import facebook from "../Images/facebook.png";
import instagram from "../Images/insta.png";
import twitter from "../Images/twitter.png";
import contact from "../Images/contact.png";
import Navbar from "./Navbar";

function handleSubmit(event) {
  event.preventDefault();
}

function ContactForm() {
  return (
    <div>
      <Navbar />;
      <div className="contact-container">
        <img src={contact} alt="contact" className="contactimg" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>

        <div className="contact-social">
          <p>Or contact us through:</p>
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
    </div>
  );
}

export default ContactForm;
