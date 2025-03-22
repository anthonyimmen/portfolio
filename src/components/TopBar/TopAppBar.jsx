import React from 'react';
import './TopAppBar.css';

const TopAppBar = () => {
    return (
      <header className="top-app-bar">
        <div className="app-logo">
          anthonyimmenschuh
        </div>
        <nav className="app-nav">
          <a href="#home">Home</a>
          <a href="#projects">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
};

export default TopAppBar;