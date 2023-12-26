// ProductsData.tsx

import { calculatePercentage } from '@/helpers';
import React from 'react';
import FormattedPrice from './FormattedPrice';
import Link from 'next/link';

interface ProductDataProps {
  product: {
    _id:number;
    title:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    description:string;
    category:string;
    image:string;
    quantity:number;
  };
}

const ProductsData: React.FC<ProductDataProps> = ({ product }) => {
  return (
    <div className="card w-full rounded-lg overflow-hidden">
      <Link href={{pathname:"/product", query: {_id:product?._id}}}>
          <div className='w-full h-96 group overflow-hidden relative'>
              <img src={product.image}
              alt="Product" 
              className="product-image w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg" 
              width={500} 
              height={500} 
              />
              {
                product?.isNew && <span className='absolute top-2 ring-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-black group-hover:text-white duration-200'>New Arrival</span>
              }
          </div>
      </Link>
      <div className="product-details border-[1px] border-slate-300 border-t-0 px-2 py-4 flex-col gap-y-4 bg-white rounded-b-lg">
        <h2 className="product-description"></h2> {/* Add product desciption by doing {product.description} */}
        <p className="product-price">{product.title}</p>
        <div className='flex items-center justify-between gap-4'>
          <div className='text-xs'>
            <p>{calculatePercentage(product?.price, product?.oldPrice)}% off</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className='text-slate-500 line-through'>
              <FormattedPrice amount = {product?.oldPrice} />
            </p>
            <p className='font-semibold'>
              <FormattedPrice amount = {product?.price} />
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <button className='bg-gray-500 px-4 py-2 text-s tracking-wide rounded-full text-slate-100 hover:bg-gray-800 hover:text-white duration-200'>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsData;

