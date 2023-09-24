import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';

function Header() {
    const { data: session } = useSession();

    return (
        <div className="flex justify-between items-center pr-4 pl-8 mb-2">
            <Link className="hover:underline" href="/explore">
                <div className="flex p-2">
                <Image src="/images/queen.svg" alt="y-logo" width={20} height={5} className="mr-2"/>
                <h1 className="font-bold text-4xl p-1">checkmate</h1>
                </div>
                </Link>
            <div className="flex space-x-8 text-md lg:text-xl items-center">
                <Link className="hover:underline" href="/explore">Explore</Link>
                <Link className="hover:underline" href="/profile">Profile</Link>
                {session && <Link className="hover:underline" href="/admin">Admin</Link>}
                <Link href="/signin">
                    <div className="bg-black items-center justify-center flex rounded-lg text-white hover:bg-white hover:text-black hover:underline hover:text-black border hover:border-black hover:border-dashed lg:h-[2.5rem] lg:w-[6rem] w-[5rem] h-[2rem]">
                        Sign In
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default function HeaderWithProvider() {
    return (
        <SessionProvider>
            <Header />
        </SessionProvider>
    )
}
