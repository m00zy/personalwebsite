import myImage from '../assets/me.JPG';

function Body() {
    return (
        <div className='h-2/3 flex flex-row justify-around'>
            <div className='w-1/3 h-2/3 flex flex-col justify-evenly items-end my-10'>
                <p className='text-5xl font-mono text-right'>Hi, my name is MAXWELL</p>
                <p className='w-3/4 font-mono text-xl text-right'>
                    I'm an aspiring software developer, with a background in Computer Science, Bioengineering and Psychology
                </p>
            </div>
            <img className='w-1/2 object-contain' src={myImage} 
            alt='Individual standing calmly in front of a mountain, with the natural landscape in the background.'/>
        </div>
    );
}

export default Body;

