import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ title, mode, toggleMode }) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-
        ${mode === "light" ? "light" : "dark"} 
        bg-${mode === "light" ? "light" : "dark"}`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              mode === "light" ? "dark" : "light"
            }`}
            to="/"
          >
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item text-light">
                <Link
                  className={`nav-link 
                  text-${mode === "light" ? "dark" : "light"}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link 
                  text-${mode === "light" ? "dark" : "light"}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

             {/* Switch Mode */}
             
            <div
              className={`form-check form-switch text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string,
// };

// Navbar.defaultProps = {
//   title: "Set title here",
// };
