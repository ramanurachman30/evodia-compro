import React from 'react';

const OurBusinessPageComp = (props) => {
    return (
        <div className='relative'>
            <div className="absolute top-0 right-0 bg-[#DFDFDF] w-[18.75rem] h-[37.438rem] -z-50"></div>
            <div className='grid grid-cols-2 py-11'>
                <div className="pl-20 place-self-center">
                    <p className='text-xl font-medium'>Our Business</p>
                    <p className='text-5xl font-semibold text-[#3789E5] py-5'>{props.title}</p>
                    <p className="text-xl" style={{whiteSpace: 'break-spaces'}}>{props.desc}</p>
                </div>
                <div className='place-self-end'>
                    <img className="w-[30rem]" src={props.img} alt="" />
                </div>
            </div>
        </div>

     );
}
 
export default OurBusinessPageComp;