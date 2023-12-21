import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black font-medium text-lg text-black py-8'>
      <div className="flex justify-around">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          <Link href="/">Whatever</Link>
          <Link href="/">Something</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer