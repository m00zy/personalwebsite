import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from "react-router-dom";
import './root.css';


function Root() {
    return (
        <div className='max-w-screen-2xl'>
            <Header />
            <div className='body'>
                <Outlet />
            </div>
            
            <Footer />
        </div>
    );
}

export default Root;


