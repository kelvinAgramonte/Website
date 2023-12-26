// ProductsData.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ItemProps } from '../../type';
import { calculatePercentage } from '@/helpers';
import FormattedPrice from './FormattedPrice';
import { useDispatch } from 'react-redux';
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";




const ProductsData = ({ item }: ItemProps) => {
  const dispatch = useDispatch();


  return (
    <div className="card w-full rounded-lg overflow-hidden">
      <Link href={{pathname:"/product", query: {_id:item?._id}}}>
          <div className='w-full h-96 group overflow-hidden relative'>
              <Image src={item.image}
              alt="Product" 
              className="product-image w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg" 
              width={500} 
              height={500} 
              />
              {
                item?.isNew && <span className='absolute top-2 ring-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-black group-hover:text-white duration-200'>New Arrival</span>
              }
          </div>
      </Link>
      <div className="product-details border-[1px] border-slate-300 border-t-0 px-2 py-4 flex-col gap-y-4 bg-white rounded-b-lg">
        <h2 className="product-description"></h2> {/* Add product desciption by doing {product.description} */}
        <p className="product-price">{item.title}</p>
        <div className='flex items-center justify-between gap-4'>
          <div className='text-xs'>
            <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className='text-slate-500 line-through'>
              <FormattedPrice amount = {item?.oldPrice} />
            </p>
            <p className='font-semibold'>
              <FormattedPrice amount = {item?.price} />
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <button onClick={()=>dispatch(addToCart(item)) && toast.success(`${item?.title.substring(0, 15)} added successfully!`)} className='bg-gray-500 px-4 py-2 text-s tracking-wide rounded-full text-slate-100 hover:bg-gray-800 hover:text-white duration-200'>add to cart</button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductsData;

