import React, { useState } from "react";
import "../styles/Header.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header({setCurrentSection}) {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <header>
      <h1> Welcome to the website</h1>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a href="#home" onClick={() => setCurrentSection('home')}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setCurrentSection('about')}>About us</a>
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
            <a href="#contact" onClick={() => setCurrentSection('contact')}>Contact us</a>
          </li>
          <li>
            <a href="#reviews" onClick={() => setCurrentSection('reviews')}>Reviews</a>
          </li>
        </ul>
        <ConnectButton />
      </nav>
    </header>
  );
}

export default Header;
