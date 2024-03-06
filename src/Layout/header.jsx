import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
    // setIsDigitalMarketingOpen(false); // Close digital marketing submenu when services are opened
  };



  return (
    <>
      <nav className="bg-white md:w-full shadow-lg md:relative ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="Nectronix.png" className="h-16" alt="Nectronix Logo" />
          </div>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={open ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <IoMdMenu className="w-5 h-5" />
            )}
          </button>
          <div
            className={`w-full md:flex md:w-auto duration-500 ease-in ${
              open ? "block" : "hidden"
            } md:block`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white ">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  <FaHome className="w-7 h-7"/>
                </a>
              </li>
              <li className="relative">
              <span className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isServicesOpen ? 'text-blue-800' : 'text-white'} hover:text-blue-500 font-semibold text-md cursor-pointer`} onClick={handleServicesToggle}>Services</span>
              <ul className={`absolute left-0 top-full bg-white rounded-lg shadow-lg mt-2 w-60 ${isServicesOpen ? 'block' : 'hidden'}`} onMouseLeave={() => setIsServicesOpen(false)}>
                <li><Link to="/web-development" className='font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200'>Web Development</Link></li>
                <li><Link to="/software-development" className='font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200'>Software Development</Link></li>  
                <li><Link to="/app-development" className='font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200'>App Development</Link></li>                            
                <li><Link to="/marketing-consultancy" className='font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200'>Marketing Consultancy</Link></li>
                <li><Link to="/managed-service-bpo" className='font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200'>Managed Service BPO</Link></li>
                <li><Link to="/ecommerce" className='font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200'>E-commerce</Link></li>
                <li><Link to="/graphic-designing" className='font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200'>Graphic Desigining</Link></li>
                <li><Link to="/digital-marketing" className='font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200'>Digital Marketing</Link></li>                
              </ul>
            </li>
            <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;