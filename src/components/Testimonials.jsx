import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        <div id='testimonials' className='py-15 px-4 sm:px-12 lg:px-24 xl:px-40'>
            <div className='flex flex-col items-center'>
                <h2 className='text-[25px] text-gray-700 sm:text-[30px] md:text-[40px] font-bold'>Customer <span className='bg-gradient-to-r from-[#38BDF8] to-[#fcd3a4] bg-clip-text text-transparent'>Testimonials</span></h2>
                <p className='text-gray-400 max-w-80 text-center mt-5'>Real Stories From Those Who Found Home With Us.</p>

                <div className='flex flex-wrap gap-6 justify-center mt-10'>
                    {testimonialsData.map((testimonial, index) =>(
                        <div key={index} className='max-w-[340px] rounded border border-gray-200 py-12 px-8 shadow-lg text-center'>
                            <img src={testimonial.image} alt={testimonialsData.alt} className='w-20 h-20 mx-auto rounded-full mb-4' />
                            <h2 className='font-semibold text-[18px] text-gray-700'>{testimonial.name}</h2>
                            <p className='text-sm text-gray-400'>{testimonial.title}</p>
                            <div className='flex items-center justify-center gap-1 text-red-500 mt-4 mb-4 '>
                                {Array.from({length: testimonial.rating}, (item, index)=>(
                                    <img key={index} src={assets.star_icon} alt='' />
                                ))}
                            </div>
                            <p className='text-gray-500'>{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
