import './Home.css';
import myImage from '../assets/me.JPG';

function Body() {
    return (
        <div className='body'>
            <div className='welcome'>
                <p>Hi There,</p>
                <p>Welcome To My Website</p>
            </div>
            <img className='myImage' src={myImage} 
            alt='Individual standing calmly in front of a mountain, with the natural landscape in the background.'/>
        </div>
    );
}

export default Body;

