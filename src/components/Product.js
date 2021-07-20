import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";


const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({ product }) {

    const { id,title,description,category,image,price } = product;
    const [rating, setrating] = useState(Math.floor(Math.random()*(MAX_RATING-MIN_RATING))+1);
    const [hasPrime, sethasPrime] = useState(Math.random() < 0.5);

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 pt-0 text-xs">
            <p className="text-right italic mt-2 mb-3">{category}</p>

            <Image 
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />

            <h4 className="my-3">{title}</h4>
            
            <div className="flex">
                {Array(rating).fill().map( ( _ , i ) => <StarIcon className="h-5 text-yellow-500" /> )}
            </div>

            <p className="line-clamp-2 my-2">{description}</p>
            
            <div>
                <Currency quantity={price} currency="GBP"/>
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                    <p className="capitalize text-gray-500">free next-day delivery</p>
                </div>
            )}

            <button className="mt-auto button">add to basket</button>

        </div>
    )
}
