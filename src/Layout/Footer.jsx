import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <hr className='border-blue-500 ' />
      <div className='bg-gray-50'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between py-8 px-4'>
          <div className='flex justify-center'>
          <div className='md:w-1/4 w-2/3 mb-8 md:mb-0 flex justify-center'>
            <img src='/full.png' alt="Nectronix" />
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-2/4">
            <div className="text-gray-800">
              <div className="text-blue-600 font-poppins text-lg font-semibold mb-2">GET IN TOUCH</div>
              <div className="text-sm flex items-center gap-1 mb-2"><CiLocationOn /> 36E1, PECHS Block 6 Karachi</div>
              <div className="text-sm flex items-center gap-1 mb-2">
                <a href="mailto:info@techsol.com" className="text-blue-500 hover:underline">info@techsol.com</a>
              </div>
              <div className="text-sm flex items-center gap-1 mb-2"><BsTelephone /> +92 2135867521-22</div>
            </div>
            <div className="text-gray-800">
              <div className="font-semibold text-blue-600 font-poppins mb-4">QUICK LINKS</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/digital-marketing")}>DIGITAL MARKETING</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/about-us")}>ABOUT US</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/privacy-policy")}>PRIVACY POLICY</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/terms-of-services")}>TERMS OF SERVICES</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/disclaimer")}>DISCLAIMER</div>
            </div>
            <div className="text-blue-600 font-orbitron text-center md:text-left">
              <div className="font-semibold mb-3">SIGN-UP NOW FOR FREE CONSULTATION SESSION</div>
              <div className="flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-white items-center" />
        <div className='text-white text-[21px] text-center py-4 bg-blue-600'>All rights reserved</div>
      </div>
    </>
  );
};

export default Footer;
