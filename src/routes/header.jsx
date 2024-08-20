import './header.css';

function Header() {
    return (
        <div className='header'>
            <div className='nav-container'>
                <nav className='nav'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Projects</p>
                    <p>Resume</p>
                    <p>Other</p>
                </nav>
            </div>
        </div>
    );
}

export default Header;