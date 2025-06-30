import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import  { useState } from 'react';
import './style.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 header-custom-bg " >
        <div className='container flex intems-center justify-between gap-5 text-white '>

          <div className=' w-[15%] flex items-center ' >

            {/* <Link to="/"><img src="" className="w-15 h-auto" /> </Link> */}
            <span class=" font-semibold text-lg">COMFILING</span>
          </div>
    

          <div className='col2 w-[100%] font-serif' >
            <ul className='flex items-center  gap-5 text-white mt-5 '>
               {/* Hamburger icon */}
        <div className="block lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </div>
               
        <div className={`w-full lg:w-[80%] font-serif ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-5 mt-5 lg:mt-0">
              <li className='relative group '>
                     <span className="cursor-pointer text-[18px] font-medium cursor-pointer">Income Tax</span>
                <ul className="absolute hidden group-hover:grid grid-cols-2 gap-1  bg-white text-black mt-1 rounded-md shadow-lg min-w-[20rem] z-50">
                        
                  <li>
                    <Link to="/efiling" className="block px-3 py-2 hover:bg-gray-100">Income Tax e Filing</Link>
                  </li>
                   <li>
                    <Link to="/incometax2" className="block px-3 py-2 hover:bg-gray-100">Business Tax Filing</Link>
                  </li>
                   <li>
                    <Link to="/incometax3" className="block px-3 py-2 hover:bg-gray-100">ITR-1 Return Filing </Link>
                  </li>
                  <li>
                    <Link to="/incometax4" className="block px-3 py-2 hover:bg-gray-100">ITR-2 Return Filing </Link>
                  </li>
                  <li>
                    <Link to="/incometax5" className="block px-3 py-2 hover:bg-gray-100">ITR-3 Return Filing </Link>
                  </li>
                  <li>
                    <Link to="/incometax6" className="block px-3 py-2 hover:bg-gray-100">ITR-4 Return Filing </Link>
                  </li>
                  <li>
                    <Link to="/incometax7" className="block px-3 py-2 hover:bg-gray-100">ITR-5 Return Filing </Link>
                  </li>
                                
                  <li>
                    <Link to="/incometax8" className="block px-3 py-2 hover:bg-gray-100">ITR-6 Return Filing </Link>
                  </li>
                  <li>
                    <Link to="/incometax9" className="block px-3 py-2 hover:bg-gray-100">ITR-7 Return Filing </Link>
                  </li>
                  <li>
                    <Link to="/incometax10" className="block px-3 py-2 hover:bg-gray-100">15CA - 15CB Filing </Link>
                  </li>
                  <li>
                    <Link to="/incometax11" className="block px-3 py-2 hover:bg-gray-100">TAN Registration </Link>
                  </li>
                  <li>
                    <Link to="/incometax12" className="block px-3 py-2 hover:bg-gray-100">TDS Return Filing </Link>
                  </li>
                  <li>
                    <Link to="/incometax13" className="block px-3 py-2 hover:bg-gray-100">Income Tax Notice Response</Link>
                  </li>
                
                 
                </ul>
              </li>

              
              <li className='relative group '>
                     <span className="cursor-pointer text-[18px] font-medium cursor-pointer">Goods and Services Tax</span>
                <ul className="absolute hidden group-hover:grid grid-cols-2 gap-1  bg-white text-black mt-1 rounded-md shadow-lg min-w-[20rem] z-50">
                        
                  <li><Link to="/gst1" className="block px-3 py-2 hover:bg-gray-100">GST Registration</Link></li>
                   <li><Link to="/gst2" className="block px-3 py-2 hover:bg-gray-100">GST Return Filing</Link> </li>
                    <li><Link to="/efiling" className="block px-3 py-2 hover:bg-gray-100">GST Registration for Foreigners</Link></li>
                    <li><Link to="/efiling" className="block px-3 py-2 hover:bg-gray-100">GST Annual Return Filing </Link></li>
                    <li><Link to="/efiling" className="block px-3 py-2 hover:bg-gray-100">GST Registration Amendment</Link></li>
                    <li><Link to="/efiling" className="block px-3 py-2 hover:bg-gray-100">GST E-Invoicing Software</Link></li>
                    <li><Link to="/efiling" className="block px-3 py-2 hover:bg-gray-100">GST Revocation</Link></li>
                    <li><Link to="/efiling" className="block px-3 py-2 hover:bg-gray-100">GST LUT Form</Link></li>
                    <li><Link to="/efiling" className="block px-3 py-2 hover:bg-gray-100">GSTR - 10</Link></li>
                    <li><Link to="/efiling" className="block px-3 py-2 hover:bg-gray-100">GST Tax Notice</Link></li>

                 </ul>
              </li>
             


              <li className='list none  '>
                <Link to="/" className='link transition text-[18px] font-[500]'>MCA</Link>
              </li>
              <li className='list none  '>
                <Link to="/" className='link transition text-[18px] font-[500]'>Compliance</Link>
              </li>
              <li className='list none  '>
                <Link to="/" className='link transition text-[18px] font-[500]'>Trademark</Link>
              </li>
              <li className='list none  '>
                <Link to="/" className='link transition text-[18px] font-[500]'> Registration</Link>
              </li>
              <li className='list none  '>
                <Link to="/" className='link transition text-[18px] font-[500]'>Start Up</Link>
              </li>
              <li className='list none  '>
                <Link to="/" className='link transition text-[18px] font-[500]'> Pricing</Link>
              </li>
              <li className='list none  '>
                <Link to="/" className='link transition text-[18px] font-[500]'> About Us</Link>
              </li>


            </ul>
          </div>
             </ul>
        </div>

          <div className="w-1/6 text-right">
             <ul className="flex items-center  gap-5 text-white mt-5">
          <li className='list none  '>
                <Link to="/SignIn" className='link transition text-[18px] font-[500]'>  Sign In</Link>
              </li>
              <li className='list none  '>
                <Link to="/register" className='link transition text-[18px] font-[500]'>  Register</Link>
              </li>
           </ul>
       
            
          </div>


        </div>
      </header>
    </>
  )
}

export default Header


