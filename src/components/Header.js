import React, { useState } from "react";
import "../styles/Header.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "react-router-dom";

function Header({}) {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = (section, event) => {
    event.preventDefault();
    document.getElementById(section).scrollIntoView({ behavior: "smooth"});

  };

  return (
    <header>
      <div className="header-div">
        <div className="hey-div">
          <h2>Cashh Ino</h2>
        </div>

        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
              {/* <a href="#home" onClick={(event) => handleClick('home', event)} className="nav-link">Home</a> */}
            </li>
            <li>
              <a
                href="#about"
                onClick={(event) => handleClick("about", event)}
                className="nav-link"
              >
                Rules
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(event) => handleClick("contact", event)}
                className="nav-link"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                onClick={(event) => handleClick("reviews", event)}
                className="nav-link"
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>
        <div className="connect-button">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
