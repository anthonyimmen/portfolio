import { Github, Linkedin, Twitter } from 'react-bootstrap-icons';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="Footer">
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
    );
};