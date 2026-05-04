// "use client";
// import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';
// import { IoLogOutSharp } from 'react-icons/io5';

// const LogoutButtonInNavbar = () => {
//     return (
//         <div>
//             <Link href="/login" className="text-2xl text-red-400" onClick={async () => await authClient.signOut()}><IoLogOutSharp /></Link>
//         </div>
//     );
// };

// export default LogoutButtonInNavbar;

"use client";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { IoLogOutSharp } from 'react-icons/io5';

const LogoutButtonInNavbar = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut();
        router.refresh();        // ← server session clear করবে
        router.push('/login');   // ← login page এ নিয়ে যাবে
    }

    return (
        <div>
            <button 
                onClick={handleLogout} 
                className="text-2xl text-red-400"
            >
                <IoLogOutSharp />
            </button>
        </div>
    );
};

export default LogoutButtonInNavbar;