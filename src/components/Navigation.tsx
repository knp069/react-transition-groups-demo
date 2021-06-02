import "../styles/Navigation.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = (props: any) => {
  const [opened, setOpened] = useState("");

  function toggleMenu() {
    if (opened === "opened") {
      setOpened("");
    } else {
      setOpened("opened");
    }
  }
  return (
    <>
      <nav className="nav__bar">
        <Link to="">
          <div className="brand__logo">
            <h1>R</h1>
          </div>
        </Link>
        <div className="navbar__container">
          <button
            onClick={toggleMenu}
            className={`menu ${opened}`}
            aria-label="Main Menu"
          >
            <svg className="hamburger" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          <ul className="nav__links">
            <li>
              <Link to="/">home </Link>
            </li>
            <li>
              <Link to="/about">about </Link>
            </li>
            <li>
              <Link to="/work">work </Link>
            </li>
            <li>
              <Link to="projects">projects</Link>
            </li>
            <li>
              <Link to="contact-me">contact</Link>
            </li>
          </ul>
          <div className="collapsible__container"></div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
