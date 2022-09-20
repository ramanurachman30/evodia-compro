import React, { useEffect } from 'react';
import Gambar from '../assets/image/about-us.svg';
import Aos from 'aos'

const About = () => {
    useEffect(() => {
        Aos.init({ duration:2000 });
    })
  return (
    <div className="container">
        <div className="grid grid-cols-2 items-center">
            <div className="pl-10" data-aos="fade-up">
                <div className="mt-10 lg:mt-9 lg:left-10">
                    <img src={Gambar} alt="" className='max-w-full mx-auto bg-cover'/>
                </div>
            </div>
            <div className="pb-24 pl-12" data-aos="fade-up">
                <p className='font-bold text-[#3789E5] text-left text-2xl mb-5 lg:text-4xl'>About Us</p>
                <p className='font-medium text-dark text-justify mb-10 leading-relaxed'>PT Evodia Nika Teknologi is a system integrator company with super dedication and knowledge and technical capability. With numerous backgrounds in IT industry, system inegrator and IT consultant, our people have profound experience in the world of Information Technology. Despite the background from which our people enbark on, we all have one sole mission and vission to assist our customer in software/application innovation.</p>
                <div className="flex items-start">
                <a href="#" className="text-base font-semibold text-white bg-[#3789E5] py-2 px-8 rounded-lg   hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >Read More <i className="fas fa-arrow-right"></i></a>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default About;