import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from "react-router-dom";
import './root.css';


function Root() {
    return (
        <>
            <Header />
            <div className='body'>
                <Outlet />
            </div>
            
            <Footer />
        </>
    );
}

export default Root;


