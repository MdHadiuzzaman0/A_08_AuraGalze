import TileCard from "@/components/TileCard";
import Hero from "@/components/Hero";
import { getAllTilesData } from "@/lib/data";
import Link from 'next/link';

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

      <Link href="/allTiles">
        <button className='btn px-6 py-2 bg-amber-200 flex justify-self-center w-4/12 mx-auto mt-10 text-lg font-bold'>All Tiles</button></Link>
    </div>

  );
};

export default Home;