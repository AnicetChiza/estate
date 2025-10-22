import React from 'react'
import {assets} from '../assets/assets';

const Navbar = () => {
    return (
        <div className='absolute top-0 w-full z-9 border-b border-gray-600'>
            <div className='flex items-center justify-between py-6 px-4 sm:px-12 lg:px-24 xl:px-40'>
                <img src={assets.logo} alt="" />
                <ul className='hidden md:flex gap-6'>
                    <li><a className='text-white/90 hover:text-sky-400' href="#header">Home</a></li>
                    <li><a className='text-white/90 hover:text-sky-400' href="#about">About</a></li>
                    <li><a className='text-white/90 hover:text-sky-400' href="#projects">Projects</a></li>
                    <li><a className='text-white/90 hover:text-sky-400' href="#testimonials">Testimonials</a></li>
                </ul>
                <button className='hidden md:flex bg-sky-400 text-white px-8 py-2 rounded'>Sign up</button>

                {/* Menu icon */}
                <div className='md:hidden flex border border-gray-600 px-3 py-3 rounded'>
                    <img src={assets.menu_icon} className='w-5 cursor-pointer' alt="" />
                </div>

                {/* Menu for mobile screen */}
                <div className='fixed top-0 left-0 w-full px-12 py-8 bg-gray-800/90'>
                    <ul className='flex flex-col gap-7'>
                        <a className='text-white/90 text-[17px] hover:text-sky-400' href="#header">Home</a>
                        <a className='text-white/90 text-[17px] hover:text-sky-400' href="#about">About</a>
                        <a className='text-white/90 text-[17px] hover:text-sky-400' href="#projects">Projects</a>
                        <a className='text-white/90 text-[17px] hover:text-sky-400' href="#testimonials">Testimonials</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
