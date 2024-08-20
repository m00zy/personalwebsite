import './header.css';
import resume from '../assets/Resume.pdf';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <div className='nav-container'>
                <nav className='nav'>
                    <Link to={``}>Home</Link>
                    <Link to={`about`}>About</Link>
                    <Link to={`projects`}>Projects</Link>
                    <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                    <Link to={`other`}>Other</Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;