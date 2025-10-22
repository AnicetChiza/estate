import React from 'react'
import {assets} from '../assets/assets';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden' style={{backgroundImage: `url(${assets.header_img})`}}>
            <Navbar />

            {/* Hero section */}
            <div className='container text-white px-4 flex flex-col justify-center items-center gap-4 sm:px-12 lg:px-24 xl:px-40 text-center'>
                <h2 className='text-4xl text-[35px] sm:text-[40px] md:text-[70px] max-w-3xl font-bold'>Explore Homes That Fit <span className='bg-gradient-to-r from-[#38BDF8] to-[#fcd3a4] bg-clip-text text-transparent'>Your Dreams.</span></h2>
                <div className='flex items-center gap-4 mt-10'>
                    <a className='border border-white px-8 py-3 rounded' href="#">Our Projects</a>
                    <a className='bg-[#38BDF8] border border-[#38BDF8] px-8 py-3 rounded' href="#">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Header
