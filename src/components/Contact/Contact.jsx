import React from 'react';
import './Contact.css';
import Typewriter from "typewriter-effect";

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
                    below socials or via my email{' '}
                    <a 
                        href="mailto:anthonyimmen279@gmail.com" 
                        className="email-link"
                    >
                        anthonyimmen279@gmail.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default Contact;