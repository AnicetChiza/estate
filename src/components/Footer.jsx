import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='overflow-hidden py-6 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-800'>
            <div className='flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full mb-3 md:w-1/3'>
                    <img src={assets.logo_dark} alt="" />
                    <p className='text-sm text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
                    <p></p>
                </div>
                <div className='w-full mt-7 md:w-1/5 md:mb-0'>
                    <h3 className='text-sky-500 font-bold text-[18px]'>Company</h3>
                    <ul className='flex flex-col gap-3 mt-3'>
                        <a className='text-white/90 hover:text-sky-500 transition-all duration-400' href="#header">Home</a>
                        <a className='text-white/90 hover:text-sky-500 transition-all duration-400' href="#about">About Us</a>
                        <a className='text-white/90 hover:text-sky-500 transition-all duration-400' href="#contact">Contact Us</a>
                        <a className='text-white/90 hover:text-sky-500 transition-all duration-400' href="#">Policy privacy</a>
                    </ul>
                </div>
                <div className='flex flex-col mt-7 w-full md:w-1/3'>
                    <h3 className='text-sky-500 font-bold text-[18px]'>Subscribe to our newsletter</h3>
                    <p className='mt-3 text-sm text-gray-400'>The latest news, articles, and resources sent to your inbox weekly.</p>
                    <div className='flex gap-1 mt-4'>
                        <input className='border border-gray-500 text-gray-400 text-sm px-3 py-3 rounded w-full md:w-auto' type="email" placeholder='Enter your email' />
                        <button className='bg-sky-500 border border-sky-500 text-white rounded text-sm px-3 py-3'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700 mt-10 text-center text-sm text-gray-300 pt-5'>
                Copyright 2025 © Anicet CHIZA - All right Reserved.
            </div>
        </div>
    )
}

export default Footer
