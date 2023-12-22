import React from 'react'
import '@/app/css/fonts.css'

const LandingSection = () => {
  return (
    <section className='p-44 items-center customFont'>
        <h3 className='text-2xl'>Hello Spring! And hello to...</h3>
        <h1 className='text-7xl font-bold'>45% OFF!</h1>
        <h5 className='text-2xl text-[#999]'><i>Limited Time</i></h5>
        <p className='text-[#676767] text-xl mt-8 mb-20 w-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Adipisci quo magni fuga cupiditate. 
            Et excepturi perferendis aliquam placeat iure dignissimos?
        </p>
        <button className='bg-black text-white rounded-md px-5 py-2 shadow-md duration-300 hover:bg-transparent hover:text-black'>Check it Out!</button>
    </section>
  )
}

export default LandingSection
