import React, { useState } from 'react';
import './Header.css';
function Header()
{
    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    return(
        <header>
            <h1> Welcome to the website</h1>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li className="name-bar">
                    <input
                type ="text"
                placeholder="Your Name?"
                value = {name}
                onChange={handleNameChange}
                />
                    </li>
                    <li><a href="#contact">Contact us</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                </ul>
                <button className="connect-button">CONNECT</button>
           
                </nav>
        </header>
    );
}

export default Header;
