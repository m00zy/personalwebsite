import './header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <div className='nav-container'>
                <nav className='nav'>
                    <Link to={``}>Home</Link>
                    <Link to={`about`}>About</Link>
                    <Link to={`projects`}>Projects</Link>
                    <Link to={`resume`}>Resume</Link>
                    <Link to={`other`}>Other</Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;