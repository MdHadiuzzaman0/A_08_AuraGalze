import Navbar from "@/components/Navbar";
 import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <main>{children}</main>
        </div>
    );
}