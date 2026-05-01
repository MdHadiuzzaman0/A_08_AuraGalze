import Navbar from "@/components/Navbar";
import { ToastContainer } from 'react-toastify';
import MarqueeBanner from "@/components/MarqueeBanner";
import Search from "@/components/Search";
import { getAllTilesData } from "@/lib/data";

export default async function Layout({ children }) {
    const allTiles = await getAllTilesData();

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center">
                <MarqueeBanner />
                <Search allTiles={allTiles} />
            </div>
            <ToastContainer />
            <main>{children}</main>
        </div>
    );
}