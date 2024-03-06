import React from 'react';
import Header from '../../Layout/header';
import Footer from '../../Layout/Footer';

const ManagedServiceBPO = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 shadow-md mb-5 p-3 mx-4 md:mx-20">
        <div className="flex justify-between md:flex-row flex-col gap-16 items-center my-5">
          <div className="w-full md:w-3/3 bg-blue-600 p-6 rounded-lg text-white">
            <div className="text-xl font-poppins font-semibold mb-4">
              Are you worried about your procurement policies?
            </div>
            <div className="text-xl font-poppins font-semibold mb-4">
              Are you struggling to locate top-notch IT professionals?
            </div>
            <div>
              Are you struggling with managing your hardware or software?
            </div>
          </div>
          <div>
          <span className="w-full md:w-4/4 flex md:justify-start justify-center md:mt-0 text-gray-800 text-lg md:text-xl font-semibold">
            Look no further than 
            <span className="text-blue-600 md:ml-1 text-lg md:text-2xl font-bold underline">
              Nectronix Digital
            </span>{" "}
          </span>
          
            Welcome to Nectronix Digital, your trusted partner for comprehensive and innovative Managed Services solutions. At Nectronix Digital, we offer a wide range of Managed Services designed to meet your unique needs. We aim to simplify and streamline your business operations, enhancing productivity and efficiency while reducing costs. Here are some of the key services we provide:
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManagedServiceBPO;
