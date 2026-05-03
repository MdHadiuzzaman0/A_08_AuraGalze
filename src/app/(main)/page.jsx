import TileCard from "@/components/TileCard";
import Hero from "@/components/Hero";
import { getAllTilesData } from "@/lib/data";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";

const Home = async () => {
  const allTiles = await getAllTilesData();

  return (
    <div>
      <Hero />
      <h3 className="text-2xl font-bold my-6 ml-15">Featured Tiles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto mt-10 items-stretch">
        {
          allTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
        }
      </div>

      {/* <Link href="/allTiles">
        <button className='btn px-6 py-2 bg-amber-200 flex justify-self-center w-4/12 mx-auto mt-10 text-lg font-bold'>All Tiles</button></Link> */}
      <Link
        href="/allTiles"
        className="flex items-center justify-self-center-safe mt-15 gap-2 px-9 py-3.5 bg-amber-200 text-[#1a0f00] text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-amber-500 hover:-translate-y-0.5 transition-all duration-300"
        style={{ animationDelay: "0.7s" }}
      >
        View All <FaArrowRight />
      </Link>
    </div>

  );
};

export default Home;