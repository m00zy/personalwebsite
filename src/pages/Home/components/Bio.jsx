import '../styling/Bio.css';
import mePhoto from '../../../assets/Home/me.jpg';

function Bio () {
    return (
        <div className='bio'>
            <img className='mePhoto' src={mePhoto} alt='Photo of me'/>
        </div>
    );
}

export default Bio;