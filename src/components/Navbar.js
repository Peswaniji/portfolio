import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left">Sujal Peswani</div>
            <div className="middle">
                <a href="#about">About Me</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#extracurriculars">Extracurriculars</a>
                <a href="#contact">Contact Me</a>
            </div>
            <div className="right">
                <a href="https://github.com/your-github" className="github-btn">GitHub</a>
            </div>
        </nav>
    );
};

export default Navbar;
