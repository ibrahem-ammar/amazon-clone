import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems,selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

export default function checkout() {
    
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [ session, loading ] = useSession();

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* LEFT */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image 
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4 capitalize">
                            { items.length == 0 ? "your basket is empty" : "shopping basket" }
                        </h1>

                        {
                            items.map((item,i) => <CheckoutProduct item={ item } key={ i }/> )
                        }
                    </div>
                </div>
                {/* RIGHT */}
                {
                    items.length > 0 && (
                        <div className="flex flex-col bg-white p-10 shadow-md">
                            <h2 className="capitalize whitespace-nowrap">
                                subtotal { items.length } items :

                                <span className="font-bold">
                                    <Currency quantity={total} currency="GBP"/>
                                </span>
                            </h2>

                            <button
                                className={`button mt-2 ${ !session ? 'from-gray-200 to-gray-500 border-gray-200 text-gra-300 cursor-not-allowed' : '' }`}
                                disabled={!session}
                            >
                                
                                {!session ? "sign in to checkout" : "proced to checkout"}
                            </button>
                        </div>
                    )
                }
            </main>
        </div>
    )
}
