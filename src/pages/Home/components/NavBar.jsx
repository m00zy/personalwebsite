import '../styling/NavBar.css';

function NavBar() {
    return (
        <nav className='navbar'>
            <p>Home</p>
            <p>About Me</p>
            <p>Resume</p>
            <a href='https://chess.maxwellzhudev.com'>Chess Game</a>
        </nav>
    );
}

export default NavBar;