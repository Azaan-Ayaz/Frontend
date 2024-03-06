import React from 'react';
import Header from '../../Layout/header';
import Footer from '../../Layout/Footer';
import { FaDesktop, FaCogs, FaFileAlt, FaChartBar } from 'react-icons/fa'; // Importing Font Awesome icons
import AnimatedTextLoop from '../animation'; // Adjust the path according to your project structure

const SoftwareDevelopment = () => {
  return (
    <>
      <Header />
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10">
          <div className="w-full md:h-full md:w-2/3">
            <div className="md:mb-3 mb-5 text-blue-600 md:font-semibold md:text-left md:text-4xl text-2xl text-center font-poppins">
              <AnimatedTextLoop />
            </div>
          </div>
          <div className="w-full md:visible hidden md:w-1/2 md:flex flex-col md:flex-row items-center justify-center">
            <div className="p-3 md:w-1/2 ">
              <img src="P1.jpg" alt="Software Development" className="mb-2 w-full md:w-auto rounded-lg shadow-lg" />
              <img src="P2.jpg" alt="Software Development" className="w-full md:w-auto rounded-lg shadow-lg" />
            </div>
            <div className="p-3 md:w-1/2">
              <img src="P3.jpg" alt="Software Development" className="mb-2 w-full md:w-auto rounded-lg shadow-lg" />
              <img src="P4.jpg" alt="Software Development" className="w-full md:w-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className='flex md:my-3 justify-center '>
          <hr className='w-1/3 border-blue-600'/>
        </div>
        <div className='bg-blue-600 shadow-xl md:mb-2 md:px-3 py-2 md:items-center md:align-middle'>
          <div className="text-lg md:text-xl mb-8 text-white md:tracking-tighter leading-relaxed">
            Look no further than Nectronix Digitals Technology - we've got you covered! We are a top-notch provider of Software Development Services. We specialize in developing various software, including ERPs, CRM, CMS, Business Intelligence Software, and custom software. Our team consists of highly skilled developers and designers who are committed to delivering innovative solutions that cater to the specific requirements of our clients.
          </div>
        </div>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img src="SD3.jpg" alt="ERP Software Development" className="rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl text-blue-600 font-semibold mb-4 flex items-center">
              <FaDesktop className="mr-2" /> ERP Software Development Services
            </h2>
            <p className="text-lg mb-4 text-gray-800 tracking-tight leading-relaxed">
              Are you looking to streamline your business processes and increase efficiency? Look no further than our ERP Software Development Services. We specialize in developing customized ERP software solutions that are tailored to meet the specific needs of your business.
            </p>
          </div>
        </div>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl text-blue-600 font-semibold mb-4 flex items-center">
              <FaCogs className="mr-2" /> CRM Software Development Services
            </h2>
            <p className="text-lg mb-4 text-gray-800 tracking-tight leading-relaxed">
              When it comes to CRM software development services, our team has the expertise and experience to create customized solutions that meet your business needs. We understand the importance of a well-designed CRM system in managing customer relationships and improving overall productivity.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="SD2.jpg" alt="CRM Software Development" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mb-8 grid flex-col-reverse grid-cols-1  md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img src="SD1.jpg" alt="CMS Software Development" className="rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl text-blue-600 font-semibold mb-4 flex items-center">
              <FaFileAlt className="mr-2" /> CMS Software Development Services
            </h2>
            <p className="text-lg mb-4 text-gray-800 tracking-tight leading-relaxed">
              CMS is essential for businesses looking to create, manage, and optimize their website content. At Nectronix Digitals, we offer top-notch CMS software development services tailored to meet your unique business requirements.
            </p>
          </div>
        </div>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl text-blue-600 font-semibold mb-4 flex items-center">
              <FaChartBar className="mr-2" /> Business Intelligence Software Development
            </h2>
            <p className="text-lg mb-4 text-gray-800 tracking-tight leading-relaxed">
              At Nectronix Digitals, we understand the importance of utilizing cutting-edge technology to gain valuable insights and make informed business decisions. That's why we specialize in developing software solutions that allow businesses to effectively manage and analyze their data, unlocking its true potential.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="SD4.jpg" alt="Business Intelligence Software Development" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
