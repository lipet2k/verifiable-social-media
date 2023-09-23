import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex justify-between items-center pr-4 pl-8 mb-2">
            <Link className="hover:underline" href="/explore"><Image src="/logos/y.png" alt="y-logo" width={40} height={40} /></Link>
            <div className="flex space-x-8 text-md lg:text-xl items-center">
                <Link className="hover:underline" href="/explore">Explore</Link>
                <Link className="hover:underline" href="/profile">Profile</Link>
                <Link href="/signin">
                    <div className="bg-black pl-2 pr-2 pb-1 pt-1 rounded-lg text-white hover:bg-white hover:text-black hover:underline hover:text-black border hover:border-black hover:border-dashed">
                        Sign In
                    </div>
                </Link>
            </div>
        </div>
    )
}