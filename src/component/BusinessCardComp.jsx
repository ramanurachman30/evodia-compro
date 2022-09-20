import React from 'react';

const BusinessCardComp = (props) => {
    return ( 
        <div className='bg-[#3789E5] p-4 rounded-xl' data-aos="fade-down" data-aos-duration={props.duration} data-aos-offset="300">
            <div className='grid place-items-center text-center text-white py-8'>
                <img className="w-36" src={props.img} alt="" />
                <p className="text-xl font-semibold pt-8 pb-4">{props.title}</p>
                <p className='pb-5 text-sm'>{props.desc}</p>
                <a href="" className="bg-[#FFD605] py-2 px-4 text-sm text-black font-semibold rounded-md">Read More</a>
            </div>
        </div>
     );
}
 
export default BusinessCardComp;