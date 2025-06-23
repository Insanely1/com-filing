import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import './style.css';

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 header-custom-bg " >
        <div className='container flex intems-center justify-between gap-5 text-white '>

          <div className='col1 w-[15%] flex items-center ' >

            <Link to="/"><img src="logo.png" className="w-15 h-auto" /> </Link>
            <span class=" font-semibold text-lg">COMFILING</span>
          </div>
    

          <div className='col2 w-[70%] font-serif' >
            <ul className='flex items-center  gap-5 text-white mt-5 '>


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

              
              <li className='list none  '>
                <Link to="/" className='link transition text-[18px] font-[500]'>Goods and Services Tax</Link>
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

          <div className="w-1/5 text-right">
            <Button
              component={Link}
              to="/SignIn"
              variant="contained"
              color="primary"
              className="btn-white btn-lg btn-big btn-round"
            >
              Sign In
            </Button>
             <Button
              component={Link}
              to="/register"
              variant="contained"
              color="primary"
              className="btn-white btn-lg btn-big btn-round"
            >
              Register
            </Button>
          </div>


        </div>
      </header>
    </>
  )
}

export default Header


