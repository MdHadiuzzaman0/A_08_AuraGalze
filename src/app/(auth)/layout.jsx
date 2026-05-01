import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            {children}
            <Footer/>
        </div>

    );
}