import resume from '../assets/Resume.pdf';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='w-full h-20 flex items-center justify-end'>
                    <nav className='w-36 flex justify-between font-mono text-xl'>
                        <Link to={``}>Home</Link>

                        <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </nav>
        </div>
    );
}

export default Header;