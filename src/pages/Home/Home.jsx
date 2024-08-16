import Main from './components/Main';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <Main />
            <NavBar />
            <Welcome />
        </div>
    );
}

export default Home;