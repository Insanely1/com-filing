import React, { useEffect, useState } from 'react';
import './style.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";




const Footer = () => {

    // ✅ Visit counter logic inside Footer
  const [count, setCount] = useState(0);


useEffect(() => {

   localStorage.removeItem("visitCount");
  const storedCount = localStorage.getItem("visitCount");
 

  if (storedCount) {
    const newCount = parseInt(storedCount) + 1;
    setCount(newCount);
    localStorage.setItem("visitCount", newCount);
  } else {
    // Start from 1000 on first time
    const initialCount = 1851;
    setCount(initialCount);
    localStorage.setItem("visitCount", initialCount);
  }
}, []);

   const countDigits = count.toString().split('');
  return (

    <>
      <footer className=" footer-custom-bg flex  text-white py-8 ">
        <div className='part1 w-[30%] max-w-6xl mx-auto'>
          <h2 className='text-[20px] font-[600] mb-4'>Contact us</h2>
          <p className='text-[14px] font-[400] pb-4'>QUIK BOOKS PRIVATE LIMITED<br />
            A-18 SECOND FLOOR, D.K. ROAD <br />
            MOHAN GARDEN, UTTAM NAGAR, NEW DELHI-110059</p>

          <Link className="link" to="mailto:support@biz-ebooks.com">Support@biz-ebooks.com</Link>
          <span className='text-[15px] font-600 block  text-red' >(+91) 11 7428355500 </span>

          www.biz-ebooks.com

        </div>

        <div className='part2 w-[40%] flex items-center '>
          <div className='part2_col w-[50%]'>
            <h2 className='text-[25px] font-[400] mb-4'> Services</h2>

            <ul className='list'>
              <li className='list-none'> <Link to="/" className='link'> Income Tax  </Link> </li>
              <li className='list-none'> <Link to="/" className='link'> Goods and Services Tax  </Link> </li>
              <li className='list-none'> <Link to="/" className='link'> MCA </Link> </li>
              <li className='list-none'> <Link to="/" className='link'> Compliance</Link> </li>
              <li className='list-none'> <Link to="/" className='link'> Trademark</Link> </li>
              <li className='list-none'> <Link to="/" className='link'> Registration</Link> </li>
              <li className='list-none'> <Link to="/" className='link'> Start Up</Link> </li>
              <li className='list-none'> <Link to="/" className='link'> Pricing</Link> </li>
              <li className='list-none'> <Link to="/" className='link'> About Us</Link> </li>
            </ul>
          </div>

          <div className='part2_col w-[50%]'>
            <h2 className='text-[25px] font-[400] mb-4'> Our company</h2>

            <ul className='list'>
              <li className='list-none text-[14px] w-full mb-2  '> <Link to="/"
                className='link'>   </Link> </li>
              <li className='list-none text-[14px] w-full mb-2  '> <Link to="/privacy"
                className='link'> Privacy Policy  </Link> </li>
              <li className='list-none text-[14px] w-full mb-2  '> <Link to="/terms"
                className='link'> Terms and conditions  </Link> </li>
                <li className='list-none text-[14px] w-full mb-2  '> <Link to="/disclaimer"
                className='link'> Disclaimer </Link> </li>
              <li className='list-none text-[14px] w-full mb-2  '> <Link to="aboutus"
                className='link'> About us  </Link> </li>

            </ul>
          </div>
           {/* Right: Visit Counter column */}
            {/* Visit counter column */}
            <div className="w-[32%] flex flex-col justify-center items-center p-4  text-black rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">Visit Counter</h2>
            <div className="flex space-x-1">
              {countDigits.map((digit, index) => (
                <div
                  key={index}
                  className="w-8 h-10 bg-gray-100 border border-gray-300 rounded flex justify-center items-center text-lg font-semibold"
                >
                  {digit}
                </div>
              ))}
            </div>
          </div>
        </div>
    
      

        <div className=" px-4  justify-between items-center gap-4">

          <div className=" container text-center flex md:text-left">
            <ul className='flex items:center '>
              <li className='list-none'>
                <Link to="https://www.facebook.com/rupak.deb.129142" target="_blank" className='w-[35px] h-[35px] rounded-full border 
                  border-[rgba(0,0,0,1)] flex justify-center items-center hover:bg-primary '>
                  <FaFacebookF className='text-[15px]  ' />

                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" target="_blank" className='w-[35px] h-[35px] rounded-full border 
                  border-[rgba(0,0,0,1)] flex justify-center items-center hover:bg-primary'>
                  < CiTwitter className='text-[15px]  ' />

                </Link>
              </li>

              <li className='list-none'>
                <Link to="https://www.youtube.com/channel/UCBioyqkFyf5ntSSWg1X3WsA" target="_blank" className='w-[35px] h-[35px] rounded-full border 
                  border-[rgba(0,0,0,1)] flex justify-center items-center hover:bg-primary'>
                  <IoLogoYoutube className='text-[15px]  ' />

                </Link>
              </li>
            </ul>

          </div>

        </div>
  </footer>

      <span className="text-sm md:text-base font-medium  text-black">
        © 2025 Comfiling. All rights reserved.
      </span>
      <div className='bottamstrip border-t border-[rgba(0,0,0,2)] py-3' >
        <div className='container'>
          <ul>
            <li className=""></li>
          </ul>
        </div>
      </div>
 
    </>
  );
};

export default Footer;

