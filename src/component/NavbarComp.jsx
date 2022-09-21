import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/icon/logo-evodia.svg';

const Navbar = () => {
    return ( 
            <div className="sticky top-0 z-10 flex justify-between items-center py-1 px-20 bg-white shadow-lg">
                <div>
                    <img src={logo} alt="logo_evodia" />
                </div>
                <div className="flex gap-12 font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/about-more">About Us</Link>
                    <div className="group relative">
                        <button className="rounded inline-flex items-center group">
                            <span className="mr-1">Our Business</span>
                            <svg
                                className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </button>
                        
                        {/* menu list */}
                        <div className="invisible opacity-0 flex absolute group-hover:opacity-100 group-hover:visible transition delay-75 translate-y-11 group-hover:translate-y-0 duration-300 w-[215px] py-2 font-semibold text-sm flex-col bg-white drop-shadow-md rounded">
                            <Link to="/financial-services" className="px-5 py-2 hover:text-[#196BC2]">Financial Services</Link>
                            <Link to="/enterprise-level" className="px-5 py-2 hover:text-[#196BC2]">Enterprise Level</Link>
                            <Link to="/sme-level" className="px-5 py-2 hover:text-[#196BC2]">SME Level</Link>
                            <Link to="/database-middleware" className="px-5 py-2 hover:text-[#196BC2]">Database & Middleware</Link>
                        </div>                    
                    </div>
                    <Link to="/our-product">Our Product</Link>
                    <Link to="/contact-us">Contact Us</Link>

                </div>            
            </div>


     );
}
 
export default Navbar;