import React from "react";
import { Link } from "react-router-dom";
import "./Edit.css";
import Layout from "./Layout";

const Edit = () => {
  return (
    <Layout>
      <div className="edit-container">
        <h2>Edit Account</h2>
        <form className="edit-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea placeholder="Web Developer | Passionate about coding"></textarea>
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input type="text" placeholder="25" />
          </div>

          <div className="form-group">
            <label>Location:</label>
            <input type="text" placeholder="City, Country" />
          </div>

          <div className="form-group">
            <label>Number:</label>
            <input type="text" placeholder="+1234567890" />
          </div>

          <div className="form-group">
            <button type="button">
              <Link to="/Profile">Save Changes</Link>
            </button>
          </div>
        </form>

        <div className="edit-options">
          <Link to="/Profile">Cancel</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
