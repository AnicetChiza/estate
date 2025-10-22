import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div id='about' className='container mx-auto flex flex-col items-center justify-center py-15 px-4 sm:px-12 lg:px-24 xl:px-40'>
            <h1 className='text-[25px] text-gray-700 sm:text-[30px] md:text-[40px] font-bold'>About <span className='bg-gradient-to-r from-[#38BDF8] to-[#fcd3a4] bg-clip-text text-transparent'>Our Brand</span></h1>
            <p className='mt-4 max-w-80 text-center text-gray-400'>Passionate About Properties, Dedicated to Your Vision</p>
            
            <div className='flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-20 mt-10 text-gray-600'>
                <img src={assets.brand_img} alt="" className='w-1/1 md:w-1/2 max-w-lg' />
                
                <div className='flex flex-col items center md:items-start'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10'>
                        <div>
                            <p className='text-xl md:text-3xl font-medium text-gray-700'>10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-xl md:text-3xl font-medium text-gray-700'>12+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-xl md:text-3xl font-medium text-gray-700'>20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-xl md:text-3xl font-medium text-gray-700'>25+</p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='mt-10 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                    <button className='mt-8 rounded py-2 px-8 bg-[#38BDF8] text-white cursor-pointer'>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default About
