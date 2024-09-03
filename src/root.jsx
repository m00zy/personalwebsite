import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from "react-router-dom";



function Root() {
    return (
        <div className='max-w-screen-2xl h-screen mx-auto px-6'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;


