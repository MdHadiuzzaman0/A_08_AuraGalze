// "use client";
import { authClient } from "@/lib/auth-client"
import Link from 'next/link';
import Image from 'next/image';
import { auth } from "@/lib/auth";
import { headers } from "next/headers"

export const metadata = {
  title: "My Profile",
  description: "Premium Tile Collection",
};
const page = async () => {

    // const { data: session } =  authClient.useSession(); // client side
    const session = await auth.api.getSession({  // server side
        headers: await headers()
    })
    const user = session?.user;

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 py-20">

            <div className="card w-full max-w-2xl shadow-2xl border border-amber-400/10 p-12 transition-all duration-500">
                <h2 className="text-4xl font-serif font-light text-center mb-10 tracking-widest">
                    My Profile
                </h2>

                <div className="flex flex-col items-center space-y-8">

                    <div className="">

                        <div className="w-26 h-26 rounded-full">
                            <Image
                                src={user?.image}
                                alt="User Profile"
                                width={100} height={100}
                                className="w-full h-full "
                            />
                        </div>
                    </div>

                    <div className="text-center space-y-2">
                        <h3 className="text-2xl font-medium  tracking-wide">{user?.name}</h3>
                        <p className=" font-light tracking-loose">{user?.email}</p>
                    </div>

                    <Link
                        href="/myProfile/update"
                        className="btn bg-amber-400 hover:bg-amber-500 text-black border-none w-full max-w-xs mt-6 rounded-sm uppercase tracking-tighter transition-all duration-300"
                    >
                        Update Information
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;