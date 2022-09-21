import React, { useEffect } from 'react';
import regulary from '../assets/icon/regulary.png';
import e_procurement from '../assets/icon/e-procurement.png';
import crm from '../assets/icon/crm.png';
import hr from '../assets/icon/hr.png';
import cash from '../assets/icon/cash-manage.png';
import Aos from 'aos';

const Product = () => {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <div className="px-20 py-20 bg-zinc-50">
        <p className='text-4xl pb-10 font-bold text-[#3789E5] text-center' data-aos="fade-up" data-aos-duration="2000">Our Product</p>
        <div className="grid grid-rows-2 gap-6 text-center">
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-10 py-5 rounded-xl" data-aos="fade-up">
                    <img className='w-28 row-span-2 place-self-center' src={regulary} alt="" />
                    <p className='text-xl font-bold'>Regulary Reporting</p>
                </div>
                <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-10 py-5 rounded-xl" data-aos="fade-up">
                    <img className='w-28 row-span-2 place-self-center' src={e_procurement} alt="" />
                    <p className='text-xl font-bold'>e-Procurement</p>
                </div>
                <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-10 py-5 rounded-xl" data-aos="fade-up">
                    <img className='w-28 row-span-2 place-self-center' src={crm} alt="" />
                    <p className='text-xl font-bold'>Customer Relationship Management</p>
                </div>
            </div>
            
            <div className="grid grid-cols-6 gap-6">
                <div className="col-start-2 col-span-2">
                    <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-10 py-5 rounded-xl" data-aos="fade-up">
                        <img className='w-28 row-span-2 place-self-center' src={hr} alt="" />
                        <p className='text-xl font-bold'>Human Resource</p>
                    </div>
                </div>
                <div className="col-start-4 col-span-2">
                    <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-10 py-5 rounded-xl" data-aos="fade-up">
                        <img className='w-28 row-span-2 place-self-center' src={cash} alt="" />
                        <p className='text-xl font-bold'>Cash Management</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='flex justify-center gap-4 text-center'>
            <div className="bg-[#EEEEEE] flex flex-col justify-center items-center py-10 px-24 rounded-xl">
                <img src={regulary} alt="" />
                <p className='text-xl font-medium pt-3'>Regulary Reporting</p>
            </div>
            <div className="bg-[#EEEEEE] flex flex-col justify-center items-center py-10 px-24 rounded-xl">
                <img src={e_procurement} alt="" />
                <p className='text-xl font-medium pt-3'>e-Procurement</p>
            </div>
            <div className="bg-[#EEEEEE] flex flex-col justify-center items-center py-10 px-24 rounded-xl">
                <img src={crm} alt="" />
                <p className='text-xl font-medium pt-3'>Customer Relationship Management</p>
            </div>
        </div>
        <div className='flex justify-center gap-4 py-5'>
            <div className="bg-[#EEEEEE] flex flex-col justify-center items-center py-10 px-24 rounded-xl">
                <img src={hr} alt="" />
                <p className='text-xl font-medium pt-3'>Human Resource</p>
            </div>
            <div className="bg-[#EEEEEE] flex flex-col justify-center items-center py-10 px-24 rounded-xl">
                <img src={cash} alt="" />
                <p className='text-xl font-medium pt-3'>Cash Management</p>
            </div>
        </div> */}
    </div>
  );
};

export default Product;