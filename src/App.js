import React from 'react';
import Navbar from './components/Navbar';
import TypingEffect from './components/TypingEffect'; 
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <header className="landing-page">
                <div className="left-content">
                    <h1>Hello, I'm Sujal Peswani</h1>
                    <h2>And I'm a <TypingEffect words={['Coder', 'Web-Developer']} /></h2>
                    <div className="social-icons">
                        <a href="https://instagram.com" className="social-icon"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a>
                        <a href="https://linkedin.com" className="social-icon"><img src="/path/to/linkedin-icon.png" alt="LinkedIn" /></a>
                        <a href="https://whatsapp.com" className="social-icon"><img src="/path/to/whatsapp-icon.png" alt="WhatsApp" /></a>
                        <a href="https://facebook.com" className="social-icon"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
                    </div>
                </div>
                <div className="right-content">
                    <img src="/path/to/your-profile-image.jpg" alt="Profile" />
                </div>
            </header>
        </div>
    );
};

export default App;
