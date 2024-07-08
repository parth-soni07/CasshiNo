import React, { useState } from "react";
import "../styles/Header.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header({ setCurrentSection }) {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = (section, event) => {
    event.preventDefault();
    setCurrentSection(section);
  };

  return (
    <header>
      <h1> Welcome to the website</h1>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a href="#home" onClick={(event) => handleClick('home', event)} className="nav-link">Home</a>
          </li>
          <li>
            <a href="#about" onClick={(event) => handleClick('about', event)} className="nav-link">About us</a>
          </li>
          <li className="name-bar">
            <input
              type="text"
              placeholder="Your Name?"
              value={name}
              onChange={handleNameChange}
            />
          </li>
          <li>
            <a href="#contact" onClick={(event) => handleClick('contact', event)} className="nav-link">Contact us</a>
          </li>
          <li>
            <a href="#reviews" onClick={(event) => handleClick('reviews', event)} className="nav-link">Reviews</a>
          </li>
        </ul>
        <ConnectButton />
      </nav>
    </header>
  );
}

export default Header;
