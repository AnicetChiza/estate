import React from 'react'

const Contact = () => {
    return (
        <div className='py-15 px-4 sm:px-12 lg:px-24 xl:px-40'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[25px] text-gray-700 sm:text-[30px] md:text-[40px] font-bold'>Contact <span className='bg-gradient-to-r from-[#38BDF8] to-[#fcd3a4] bg-clip-text text-transparent'>With Us</span></h1>
                <p className='mt-4 max-w-80 text-center text-gray-400'>Ready to make a move? Let's build your future together.</p>
            </div>
        
            <form className='max-w-3xl mx-auto'>
                <div className='flex gap-4 mt-10'>
                    <div className='w-full flex flex-col gap-2 md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-gray-300 py-3 px-5 rounded outline-none' type="text" name='name' placeholder='Enter your name' required/>
                    </div>
                    <div className='w-full flex flex-col gap-2 md:w-1/2 text-left'>
                        Your Email
                        <input className='w-full border border-gray-300 py-3 px-5 rounded outline-none' type="email" name='email' placeholder='Enter your email address' required/>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2 mt-4 text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 py-3 px-5 rounded outline-none resize-none h-40' name="message" placeholder='Write your message here...' required></textarea>
                </div>
            </form>
        </div>
    )
}

export default Contact
