import './Home.css';
import myImage from '../assets/me.JPG';

function Body() {
    return (
        <div className='body'>
            <div className='welcome'>
                <p className='first-line'>Hi, my name is MAXWELL</p>
                <p className='second-line'>
                    I'm an aspiring software developer, with a background in Computer Science, Bioengineering and Psychology
                </p>
            </div>
            <img className='myImage' src={myImage} 
            alt='Individual standing calmly in front of a mountain, with the natural landscape in the background.'/>
        </div>
    );
}

export default Body;

