import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div id='about' className='flex flex-col items-center justify-center py-6 px-4 sm:px-12 lg:px-24 xl:px-40'>
            <h1 className='text-[25px] sm:text-[30px] md:text-[40px] font-bold'>About <span className='bg-gradient-to-r from-[#38BDF8] to-[#fcd3a4] bg-clip-text text-transparent'>Our Brand</span></h1>
            <p className='mt-4 max-80 text-center text-gray-400'>Passionate About Properties, Dedicated to Your Vision</p>
            <div className='flex flex-col items-center md:flex-row md:items-start md:gap-10 mt-10'>
                <img src={assets.brand_img} alt="" className='w-1/2 md:w-full max-w-lg' />
                <div className='flex flex-col items center md:items-start'>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
