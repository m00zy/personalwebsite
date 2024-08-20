import Header from './components/header';
import Home from './routes/Home';
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


