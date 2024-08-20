import './body.css';

function Body() {
    return (
        <div className='body'>
            <Welcome />
        </div>
    )
}

function Welcome() {
    return (
        <p>Welcome to my website!</p>
    );
}

export default Body;