import React from 'react'
import Image from 'next/image'
import PromoPicture from '@/assets/img/clothes/landing_spring.png'
const PromoFigure = () => {
  return (
    <div className='pr-44 mr-6 flex items-center'>
        <figure className='w-[800px] h-[800px]'>
            <Image src={PromoPicture} alt="" className="z-10" />
        </figure>
      <div className='bg-yellow-300 w-96 h-96 lg:w-[400px] lg:h-[700px] rounded-full absolute -right-50 -bottom-20 -z-10'></div>
    </div>
  )
}

export default PromoFigure
