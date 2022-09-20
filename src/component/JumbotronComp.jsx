import React from 'react';
import homeImage from '../assets/image/home-picture.png';

const Jumbotron = () => {
    return (
            <div className="flex justify-center items-center bg-cover h-screen bg-center bg-no-repeat" style={{ backgroundImage:`url(${homeImage})`}}>
                <div className="text-center text-white" data-aos="fade-up">
                    <p className="text-6xl">Welcome to Evodia</p>
                    <p className="font-light text-4xl">PT. Evodia Nika Teknologi</p>
                </div>
            </div>
     );
}
 
export default Jumbotron;