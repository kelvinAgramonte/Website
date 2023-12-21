import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black font-medium text-lg text-black py-8'>
      <div className="flex justify-around">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          <Link href="/" className='hover:text-blue-800 hover:duration-500 border-black'>Clothes</Link>
        </div>
        <div>
            <Link href="/" className='hover:text-blue-800 hover:duration-500 border-black'>Make an Appointment</Link>
        </div>
        <div>
            <Link href="/" className='hover:text-blue-800 hover:duration-500 border-black'>Cosmetics</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer