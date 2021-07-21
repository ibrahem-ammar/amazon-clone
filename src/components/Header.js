import Image from "next/image";
import { SearchIcon,MenuIcon,ShoppingCartIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

export default function Header() {

    const [ session, loading ] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header>
            {/* TOP NAV */}
            <div className="flex items-center bg-amazon_blue space-x-6 p-2">
                <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
                    <Image
                        onClick={()=> router.push('/')}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                <div className="hidden sm:flex items-center h-10 bg-yellow-400 hover:bg-yellow-500 rounded-md flex-grow ">
                    <input type="text" className="h-full rounded-l-md p-2 w-6 flex-grow flex-shrink focus:outline-none" />
                    <SearchIcon className="h-12 p-4 cursor-pointer" />
                </div>
                <div className="flex items-center space-x-6 text-white capitalize text-xs md:text-sm whitespace-nowrap">
                    <div>
                        {
                            session ? (
                                <p className="cursor-pointer font-extrabold hover:underline">
                                    hello, {session.user.name}
                                </p>
                            ) : (
                                <p onClick={signIn} className="cursor-pointer font-extrabold hover:underline">
                                    sign in
                                </p>
                            )
                        }
                        
                        <p className="cursor-pointer font-extrabold hover:underline">
                            account & lists 
                        </p>

                        { session ? (
                            <p onClick={signOut} className="cursor-pointer font-extrabold hover:underline">
                                sign out
                            </p>
                        ) : ('') }
                    </div>
                    <div>
                        <p className="cursor-pointer font-extrabold hover:underline">returns</p>
                        <p className="cursor-pointer font-extrabold hover:underline">& orders</p>
                    </div>
                    <div onClick={()=> router.push('/checkout')} className="flex items-center cursor-pointer font-extrabold hover:underline relative ">
                        <span className="flex items-center justify-center absolute top-0 right-0 sm:right-10 h-4 w-4 bg-yellow-400 rounded-full font-bold text-black">
                            { items.length }
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden sm:inline mt-2 cursor-pointer font-extrabold hover:underline">basket</p>
                    </div>
                </div>
            </div>
            {/* BOTTOM NAV */}
            <div className="flex items-center bg-amazon_blue-light text-sm text-white capitalize p-2 pl-6 space-x-5 whitespace-nowrap">
                <p className="flex items-center justify-center link">
                    <MenuIcon className="h-6 mr-1"/>
                    all
                </p>
                <p className="link">prime video</p>
                <p className="link">amazon business</p>
                <p className="link">today's deals</p>
                <p className="link hidden lg:inline-flex">electronics</p>
                <p className="link hidden lg:inline-flex">food & grecery</p>
                <p className="link hidden lg:inline-flex">prime</p>
                <p className="link hidden lg:inline-flex">bug again</p>
                <p className="link hidden lg:inline-flex">shopper toolkit</p>
                <p className="link hidden lg:inline-flex">health & personal care</p>
            </div>
        </header>
    )
}
