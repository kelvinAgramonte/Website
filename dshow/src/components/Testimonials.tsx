import React from 'react'
import Image from 'next/image'
import Review1 from '@/assets/img/testimonials/profile1.png'
import Review2 from '@/assets/img/testimonials/profile2.png'
import Review3 from '@/assets/img/testimonials/profile3.png'


const Testimonials = () => {
  return (
    <div className='text-black'>
        <div className='text-center py-10'>
            <h5 className='text-heading_color'>Testimonials</h5>
            <h1 className='text-4xl w-96 mx-auto leading-normal font-bold mb-12'>Read What Others Have to Say</h1>
            <div className='flex max-w-5xl mx-auto gap-8 group'>
                <div className='bg-bgLight duration-500  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity'>
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden mb-3">
                        <Image src={Review1} alt='Review1' className='h-20 mx-auto' />
                    </div>
                    <h4 className='uppercase text-xl font-bold'>Jessy D</h4>
                    <p className='text-sm leading-7 my-3 font-light opacity-80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat iure id, mollitia unde quae perferendis 
                        necessitatibus hic corrupti similique odio.
                    </p>
                </div>
                <div className='bg-bgLight duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity'>
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden mb-3">
                        <Image src={Review2} alt='Review2' className='h-20 mx-auto' />
                    </div>
                    <h4 className='uppercase text-xl font-bold'>Channelle B</h4>
                    <p className='text-sm leading-7 my-3 font-light opacity-80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat iure id, mollitia unde quae perferendis 
                        necessitatibus hic corrupti similique odio.
                    </p>
                </div>
                <div className='bg-bgLight duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity'>
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden mb-3">
                        <Image src={Review3} alt='Review3' className='h-20 mx-auto' />
                    </div>
                    <h4 className='uppercase text-xl font-bold'>Heidy A</h4>
                    <p className='text-sm leading-7 my-3 font-light opacity-80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat iure id, mollitia unde quae perferendis 
                        necessitatibus hic corrupti similique odio.
                    </p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Testimonials
