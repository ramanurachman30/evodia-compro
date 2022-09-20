import React, {Component, Fragment} from 'react';
import logo from '../assets/icon/logo-evodia.svg';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className='px-20 py-7 text-sm bg-zinc-50'>
                    <div className="grid grid-cols-6 gap-3">
                        <div className="flex flex-col col-span-2">
                            <img className="w-32" src={logo} alt="" />
                            <p className='font-bold'>PT Evodia Nika Teknologi</p>
                            <p className='py-1'>Bellezza BSA 1st Floor SA1-06</p>
                            <p className=''>Jl. Letjen Soepono, Permata hijau <br /> Jakarta Selatan, DKI Jakarta</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold pb-3'>Company Profile</p>
                            <p className='py-1'>About Us</p>
                            <p className='py-1'>Contact Us</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold pb-3'>Our Business</p>
                            <p className='py-1'>Financial Services</p>
                            <p className='py-1'>Enterprise Level</p>
                            <p className='py-1'>SME Level</p>
                            <p className='py-1'>Database & Middleware</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold pb-3'>Our Products</p>
                            <p className='py-1'>Regulary Reporting</p>
                            <p className='py-1'>e-Procurement</p>
                            <p className='py-1'>Customer Relationship Management</p>
                            <p className='py-1'>Human Resource</p>
                            <p className='py-1'>Cash Management</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold pb-3'>Contact Us</p>
                            <p className='py-1'>(021) 50645040</p>
                            <p className='py-1'>info@evodiateknologi.com</p>
                        </div>
                    </div>
                </div>
                <div className='py-3 bg-[#212121] text-center text-white text-sm'>
                Copyright ©2022 PT Evodia Nika Teknologi. All rights reserved.
                </div>
            </Fragment>
        );
    }
}
 
export default Footer;