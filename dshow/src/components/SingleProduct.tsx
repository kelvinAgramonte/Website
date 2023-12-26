"use client";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io"
import { MdFavoriteBorder } from "react-icons/md"

const SingleProduct = ({ product }: any) => {

    return (
        <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
            <div>
                <Image 
                    src={product?.image} 
                    alt="product image" 
                    width={500} 
                    height={500}
                    className="w-full max-h-[700px] object-cover rounded-lg" 
                />
            </div>
            <div className="flex flex-col justify-center gap-y-10">
                <div className="text-black">
                    <p className="text-3xl font-semibold">{product?.title}</p>
                    <p className="text-xl font-semibold"><FormattedPrice amount = {product?.price} /></p>
                </div>
                <p className="text-lightText">{product?.description}</p>
                <div className="text-black text-sm flex flex-col ">
                    <span>SKU: 
                        <span>{product?._id}</span>
                    </span>
                </div>
                <div className="text-black text-sm flex flex-col ">
                    <span>Category: 
                        <span>{product?.category}</span>
                    </span>
                </div>
                <div className="text-black flex items-center cursor-pointer group">
                    <button className="bg-black text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500">
                        add to cart
                    </button>
                    <span className="bg-black text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-blue-800 duration-200 py-3"><IoMdCart/></span>
                </div>
                <p className="text-black flex items-center gap-x-2 text-sm"><MdFavoriteBorder className="text-xl"/>Add to wishlist</p>
            </div>
        </div>
    )

}

export default SingleProduct;