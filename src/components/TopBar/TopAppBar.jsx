import React, { useState } from 'react';
import './TopAppBar.css';
import { List } from 'react-bootstrap-icons';

const TopAppBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="top-app-bar">
            <div className="app-logo">
                ai
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                <List size={30} color="white" />
            </button>
            <nav className={`app-nav ${menuOpen ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#projects">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default TopAppBar;