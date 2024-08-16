import '../styling/Main.css';
import mePhoto from '../../../assets/Home/me.JPG';

function Main () {
    return (
        <div className='<Main>'>
            <img className='mePhoto' src={mePhoto} alt='Photo of me'/>
        </div>
    );
}

export default Main;