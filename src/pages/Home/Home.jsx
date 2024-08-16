import Bio from './components/Bio';
import NavBar from './components/NavBar';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <Bio />
            <NavBar />
        </div>
    );
}

export default Home;