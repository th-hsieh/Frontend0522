import '../../src/App.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showOpinionsDropdown, setShowOpinionsDropdown] = useState(false);
  const [showCollaboratorsDropdown, setShowCollaboratorsDropdown] = useState(false);

  const toggleOpinionsDropdown = () => {
    setShowOpinionsDropdown(!showOpinionsDropdown);
  };

  const toggleCollaboratorsDropdown = () => {
    setShowCollaboratorsDropdown(!showCollaboratorsDropdown);
  };

  const linkStyle = {
    color: "white",
    fontSize: "16px",
    textDecoration: "none",
    marginRight: "10px",
    padding: "5px",
    backgroundColor: "black",
  };

  const dropdownContentStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
    right: "0",
  };

  const closeDropdownWithDelay = () => {
    setTimeout(() => {
      setShowOpinionsDropdown(false);
      setShowCollaboratorsDropdown(false);
    }, 50); // 0.05 second delay
  };

  return (
    <nav className="navbar">
        <h2
            style={{ color: "black", fontSize: "5em", fontWeight: "bold" }}
        >
            public+privacy
        </h2>
      
      <div>
        <Link
          className="text-decoration-none"
          to="/about"
          style={linkStyle}
          onClick={closeDropdownWithDelay}
        >
          About
        </Link>

        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={toggleOpinionsDropdown}
            style={linkStyle}
          >
            Opinions
          </button>
          {showOpinionsDropdown && (
            <div
              className="dropdown-content"
              style={dropdownContentStyle}
              onClick={closeDropdownWithDelay}
            >
              <Link className="text-decoration-none" to="/forum/opinions">
                Opinions
              </Link>
              <Link className="text-decoration-none" to="/forum/opinions/add">
                Add Opinion
              </Link>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={toggleCollaboratorsDropdown}
            style={linkStyle}
          >
            Collaborators
          </button>
          {showCollaboratorsDropdown && (
            <div
              className="dropdown-content"
              style={dropdownContentStyle}
              onClick={closeDropdownWithDelay}
            >
              <Link className="text-decoration-none" to="/collaborator">
                To Collaborators
              </Link>
              <Link className="text-decoration-none" to="/collaborator/login">
                Login
              </Link>
              <Link
                className="text-decoration-none"
                to="/collaborator/register"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <Link
          className="text-decoration-none"
          to="/selected-essays"
          style={linkStyle}
          onClick={closeDropdownWithDelay}
        >
          Selected Essays
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;