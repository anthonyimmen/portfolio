import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopAppBar.css';
import { List } from 'react-bootstrap-icons';

const TopAppBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="top-app-bar">
            <Link to="/" className="app-logo">
                <img 
                    src={'./portfolio-icon.png'} 
                    alt="App Icon"
                    className="app-icon-image"
                />
            </Link>
            <button className="hamburger" onClick={toggleMenu}>
                <List size={30} color="white" />
            </button>
            <nav className={`app-nav ${menuOpen ? 'active' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                <Link to="/chat" onClick={() => setMenuOpen(false)}>Chat</Link>
            </nav>
        </header>
    );
};

export default TopAppBar;