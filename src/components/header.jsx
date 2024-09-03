// import './header.css';
import resume from '../assets/Resume.pdf';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='w-full h-40 flex items-center justify-end'>
                    <nav className='w-32 flex justify-between font-mono text-lg flex-shrink'>
                        <Link to={``}>Home</Link>
                        {/* <Link to={`about`}>About</Link>
                        <Link to={`projects`}>Projects</Link> */}
                        <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </nav>
        </div>
    );
}

export default Header;