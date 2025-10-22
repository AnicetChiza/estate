import React, { useEffect } from 'react'
import { useState } from 'react';
import {assets} from '../assets/assets';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect (() =>{
        if(menuOpen){
            document.body.style.overflow = 'hidden';
        } else{
            document.body.style.overflow = 'auto';
        }
        return ()=>{
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    return (
        <div className='absolute top-0 w-full z-9'>
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
                <div onClick={() => setMenuOpen(true)} className='md:hidden flex border border-gray-600 px-3 py-3 rounded'>
                    <img src={assets.menu_icon} className='w-5 cursor-pointer' alt="" />
                </div>
            </div>

            {/* Menu for mobile screen */}
                <div className={`md:hidden ${menuOpen ? 'fixed w-full' : 'w-0 h-0 opacity-0 invisible'} top-0 left-0 bottom-0 right-0 overflow-hidden px-12 py-6 bg-gray-800/90 backdrop-blur-sm transition-all duration-300`}>
                    <div onClick={() => setMenuOpen(false)} className='flex justify-end cursor-pointer border border-gray-600 px-3 py-3 rounded w-fit ml-auto'>
                        <img src={assets.cross_icon} className='w-4 invert brightness-100' alt="" />
                    </div>
                    <ul className='flex flex-col gap-7'>
                        <a onClick={() => setMenuOpen(false)} className='text-white/90 text-[17px] w-fit hover:text-sky-400' href="#header">Home</a>
                        <a onClick={() => setMenuOpen(false)} className='text-white/90 text-[17px] w-fit hover:text-sky-400' href="#about">About</a>
                        <a onClick={() => setMenuOpen(false)} className='text-white/90 text-[17px] w-fit hover:text-sky-400' href="#projects">Projects</a>
                        <a onClick={() => setMenuOpen(false)} className='text-white/90 text-[17px] w-fit hover:text-sky-400' href="#testimonials">Testimonials</a>
                    </ul>
                </div>
        </div>
    )
}

export default Navbar
