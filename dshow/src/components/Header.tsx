
"use client";
import React from 'react'
import Container from './Container'
import Logo from './Logo'
import { FiSearch } from 'react-icons/fi'
import { BsCart3 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai" 
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const {data:session} = useSession();
  console.log(session);
  
  return (
    <div className='bg-bodyColor h-20'>
      <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
        <Logo />
        {/* Search Field */}
        <div className='w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-purple-600 group'>
            <FiSearch className='text-gray-500 group-focus-within:text-darkText duration-200' />
            <input 
                type="text" 
                placeholder='Search for products' 
                className='placeholder:text-sm flex-1 outline-none'
            />
        </div>
        {/* Login/Register */}
        <div onClick={() => signIn()} className='headerDiv'>
            <AiOutlineUser className="text-2xl" />
            <p className='text-sm font-semibold'>Login/Register</p>
        </div>
        {/* Cart button */}
        <div className='bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-purple-600 duration-200 relative'>
            <BsCart3 className="text-xl" />
            <p className='text-sm font-semibold'>$0.00</p>
            <span className='bg-white text-purple-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black'>
                0
            </span>
        </div>
      </Container>
    </div>
  )
}

export default Header
