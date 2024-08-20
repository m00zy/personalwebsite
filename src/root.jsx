import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from "react-router-dom";


function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;


