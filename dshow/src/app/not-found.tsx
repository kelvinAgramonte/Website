import React from 'react'
import Container from '@/components/Container'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <Container className='flex items-center justify-center text-black'>
        <div className='max-w-2xl min-h-[500px] flex flex-col items-center justify-center gap-y-5'>
            <h2 className='text-4xl font-bold'>Unavailable</h2>
            <p className='text-base font-medium text-center'>
                We are currently working on this content. 
                Please check our social network for more information.
            </p>
            <Link href={"/"} className='py-3 px-6 border-double border-4 border-black-600 hover:bg-black hover:text-white duration-200 text-sm uppercase font-semibold'>Back to Home</Link>
        </div>
    </Container>
  )
}

export default NotFoundPage