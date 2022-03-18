import React from "react";
import davidIMG from "../../assets/img/david.png";
import "./nav.css";

export const NavBar = () => {

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid text-white">
      <a className="navbar-brand" href="#aboutMe">
        <img alt="david" src={davidIMG} />
      </a>
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
            <a className="nav-link active" aria-current="page" href="#aboutMe">
              About Me
            </a>
            {/* {location.pathname === home ? (
            <div className="link-active" />
          ) : null} */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#studies">
              Studies
            </a>
          
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
            {/* {location.pathname === more ? (
            <div className="link-active" />
          ) : null} */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
            {/* {location.pathname === contact ? (
            <div className="link-active" />
          ) : null} */}
          </li>
        </ul>
        <span>
          <img className="logo-nav" alt="logo" src={davidIMG} />
        </span>
      </div>
    </div>
  </nav>
  );
};
