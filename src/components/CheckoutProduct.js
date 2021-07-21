import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket,removeFromBasket } from "../slices/basketSlice";

export default function CheckoutProduct({ item }) {

    const { id,title,description,category,image,price,rating,hasPrime } = item;
    const dispatch = useDispatch();

    const addProductToBasket = () => {
        dispatch(addToBasket(item));
    }

    const removeProductFromBasket = () => {
        dispatch(removeFromBasket({id}));
    }

    return (
        <div className="grid grid-cols-5">
            <Image 
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />

            <div className="col-span-3 mx-5">

                <p>{title}</p>

                <div className="flex">
                    {Array(rating).fill().map( ( _ , i ) => <StarIcon className="h-5 text-yellow-500" key={ i }/> )}
                </div>

                <p className="my-2 text-xs line-clamp-2">{description}</p>

                <Currency quantity={price} currency="GBP"/>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                        <p className="capitalize text-gray-500 text-xs">free next-day delivery</p>
                    </div>
                )}

            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addProductToBasket}>add to basket</button>
                <button className="button" onClick={removeProductFromBasket}>remove from basket</button>
            </div>
        </div>
    )
}
