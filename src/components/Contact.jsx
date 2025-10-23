import React from 'react'
import toast from 'react-hot-toast';

const Contact = () => {

    const onSubmit = async(event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "70609c73-6ec6-4094-854b-0776d40ab9a9");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message sent successfully !")
                event.target.reset();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='py-15 px-4 sm:px-12 lg:px-24 xl:px-40'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[25px] text-gray-700 sm:text-[30px] md:text-[40px] font-bold'>Contact <span className='bg-gradient-to-r from-[#38BDF8] to-[#fcd3a4] bg-clip-text text-transparent'>With Us</span></h1>
                <p className='mt-4 max-w-80 text-center text-gray-400'>Ready to make a move? Let's build your future together.</p>
            </div>
        
            <form onSubmit={onSubmit} className='max-w-3xl mx-auto'>
                <div className='flex flex-col md:flex-row gap-4 mt-10'>
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

                <button type='submit' className='bg-sky-400 text-white px-8 py-2 rounded mt-5 sm-w-full'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact
