import React from 'react';
import './Contact.css';
import Typewriter from "typewriter-effect";
import { Github, Linkedin, Twitter } from 'react-bootstrap-icons';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-title">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .start()
                            .typeString("contact")
                            .pauseFor(1000)
                    }}
                />
            </div>
            <div className="contact-content">
                <p className="contact-text">
                    Feel free to reach out, always open to discussing new projects,
                    creative ideas, or professional opportunites. You can reach me at any of my 
                    socials below or via my email{' '}
                    <a 
                        href="mailto:anthonyimmen279@gmail.com" 
                        className="email-link"
                    >
                        anthonyimmen279@gmail.com
                    </a>
                    .
                </p>
                <div className="contact-socials">
                    <a 
                        href="https://www.linkedin.com/in/anthony-immenschuh/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin color="white" size={30} />
                    </a>
                    <a 
                        href="https://github.com/anthonyimmen"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github color="white" size={30} />
                    </a>
                    <a 
                        href="https://twitter.com/anthonyimmen"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter color="white" size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;