import React, { useState, useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

    const [currentIndex, setCurrentIndex]= useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 1024) setCardsToShow(4);
        else if (window.innerWidth >= 640) setCardsToShow(2);
        else setCardsToShow(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextProject= () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }

    const prevProject= () =>{
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex -1));
    }

    return (
        <div id='projects' className='container overflow-hidden py-15 px-4 sm:px-12 lg:px-24 xl:px-40'>
            <div className='flex flex-col items-center'>
                <h2 className='text-[25px] text-gray-700 sm:text-[30px] md:text-[40px] font-bold'>Projects <span className='bg-gradient-to-r from-[#38BDF8] to-[#fcd3a4] bg-clip-text text-transparent'>Completed</span></h2>
                <p className='text-gray-400 max-w-80 text-center mt-5'>Crafting Space, Building legacies-Explore Our Portfolio.</p>
            </div>

                {/* slider buttons */}
                <div className='flex items-center justify-end gap-2 mt-10'>
                    <button onClick={prevProject} className='bg-gray-200 px-4 py-3 rounded'>
                        <img src={assets.left_arrow} alt="" aria-label='previous project' />
                    </button>
                    <button onClick={nextProject} className='bg-gray-200 px-4 py-3 rounded'>
                        <img src={assets.right_arrow} alt="" aria-label='previous project' />
                    </button>
                </div>

                {/* Project slider container */}
                <div className='overflow-hidden mt-10'>
                    <div 
                    className='flex gap-4 transition-all duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                        {projectsData.map((project, index) => (
                            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                                <img className='rounded w-full h-auto mb-14' src={project.image} alt={project.title} />
                                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                    <div className='inline-block rounded w-3/4 px-4 py-2 shadow-md bg-white'>
                                        <h3 className='font-semibold'>{project.title}</h3>
                                        <p className='text-gray-400'>{project.price} <span>||</span> {project.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        
        </div>
    )
}

export default Projects
