import { Github, Linkedin, Instagram } from 'react-bootstrap-icons';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="Footer">
            <Linkedin color="white" size={30} />
            <Github color="white" size={30} />
            <Instagram color="white" size={30} />
        </div>
    );
};