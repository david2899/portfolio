import React from "react";
import { useLocation } from "react-router-dom";
import davidIMG from "../../assets/img/david.png";
import { home, contact, more } from "../../helpers/pahts";
import { Link } from "react-router-dom";
import "./nav.css";

export const NavBar = () => {
  const location = useLocation();

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid text-white">
        <Link className="navbar-brand" to={home}>
          <img alt="david" src={davidIMG} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={home}>
                About Me
              </Link>
              {location.pathname === home ? (
                <div className="link-active" />
              ) : null}
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to={more}>
              Studies & Projects
              </Link>
              {location.pathname === more ? (
                <div className="link-active" />
              ) : null}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={contact}>
                Contact
              </Link>
              {location.pathname === contact ? (
                <div className="link-active" />
              ) : null}
            </li>
          </ul>
          <span>
            <img
              className="logo-nav"
              alt="logo"
              src={davidIMG}
            />
          </span>
        </div>
      </div>
    </nav>
  );
};
