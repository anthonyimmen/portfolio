import { Github, Linkedin, Twitter} from 'react-bootstrap-icons';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="Footer">
            <Linkedin color="white" size={30} />
            <Github color="white" size={30} />
            <Twitter color="white" size={30} />
        </div>
    );
};