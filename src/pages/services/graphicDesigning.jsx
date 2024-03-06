import React from 'react';
import Header from '../../Layout/header';
import Footer from '../../Layout/Footer';
import { FaGem, FaVideo, FaCube } from 'react-icons/fa';

const GraphicDesigning = () => {
  return (
    <>
      <Header />
      <div className='md:mt-2 px-3 mt-3'>
        <div className='md:flex'>
          <div className='font-poppins text-center text-3xl md:text-left md:text-black md:font-semibold text-blue-600 md:text-6xl md:pl-16 md:pt-32 md:w-1/2'>
            Where Art Meets Functionality.
          </div>
          <div className='md:flex hidden md:w-1/2'>
            <div className='md:pt-20 md:p-6 md:gap-2 md:flex-col'>
              <img src="GD1.jpg" alt="Graphic Designing" className='shadow-2xl md:mb-2'/>
              <img src="GD2.jpg" alt="Graphic Designing" className='shadow-2xl'/>
            </div>
            <div className='md:pr-3 md:pt-4'>
              <img src="GD3.jpg" alt="Graphic Designing" className='md:mb-2 shadow-2xl' />
              <img src="GD4.jpg" alt="Graphic Designing" className='shadow-2xl' />
            </div>
          </div>
        </div>
        <div className='md:flex md:justify-center my-3 justify-center flex'>
          <hr className='border-blue-600 w-2/3 md:w-1/3'/>
        </div>
        <div className="bg-gray-100 shadow-md mb-5 md:mt-3 p-3 mx-4 md:mx-20">
          <div className="flex flex-col md:flex-row gap-16 items-center my-5">
            <div className="w-full md:w-1/3 bg-blue-600 p-2 rounded">
              <div>
                <h2 className="text-xl font-poppins font-semibold text-white mb-4">
                  Could your brand's designs benefit from an extra touch of creativity?
                </h2>
                <div className="text-xl font-poppins font-semibold text-white mb-4">
                  Do you want your intended audience to interact more with your social media posts?                  
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 flex justify-center md:mt-0">
              <div>
                <p className="text-gray-800 text-lg font-semibold">
                  Don’t worry we have you covered! Techsol Solutions has a team of professional graphic designers that specialize in providing a wide range of design services to help businesses enhance their visual presence and engage with their target audience.
                </p>
                <p className="text-gray-800 text-lg font-semibold">
                  Our team of talented designers is dedicated to delivering high-quality design solutions tailored to meet the unique needs of each client. Whether you need a logo, branding materials, website design, or promotional materials, we've got you covered.
                </p>
                <p className="text-gray-800 text-lg font-semibold">
                  At Techsol Solutions, we believe that great design is not just about aesthetics, but also about effectively communicating your brand message. That's why we take the time to understand your business goals and target audience, ensuring that every design we create aligns with your brand identity and resonates with your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 md:mx-16">
          <div className='flex items-center justify-between'>
            <div className='text-2xl text-blue-600 font-semibold font-poppins'>What we offer?</div>
            <div className='flex gap-2'>
              <FaGem className='text-blue-600' />
              <FaVideo className='text-blue-600' />
              <FaCube className='text-blue-600' />
            </div>
          </div>
          <div className='md:flex justify-between gap-2'>
            <div className='rounded text-white bg-gradient-to-t p-3 shadow-2xl from-blue-800 via-blue-700 to-blue-600 mb-4'>
              <div className='flex justify-center'>
                <FaGem className='mr-2 md:w-48' />
              </div>
              <div className='tracking-tighter'>
                Creative Stills: Whether it's designing Social Media Posts or crafting a User Interface for a Website, we've got you covered. Our expertise spans a diverse range of design needs, ensuring that you get the best possible results for your project. Let us help bring your vision to life with our top-notch design services. Starting from Just $149/design
              </div>
            </div>
            <div className='rounded text-white bg-gradient-to-t p-3 shadow-2xl from-blue-800 via-blue-700 to-blue-600 mb-4'>
              <div className='flex justify-center'>
                <FaVideo className='mr-2 md:w-48' />
              </div>
              <div className='tracking-tighter'>
                Videos and Animations: Our team, comprising skilled videographers, animators, and video editors, possesses a wealth of knowledge when it comes to crafting videos that are both entertaining and informative. With access to cutting-edge technological tools and our own creative talent, we have the ability to produce visually captivating videos that are sure to capture the attention of any viewer. Starting from Just $349/video
              </div>
            </div>
            <div className='rounded text-white bg-gradient-to-t p-3 shadow-2xl from-blue-800 via-blue-700 to-blue-600 mb-4'>
              <div className='flex justify-center'>
                <FaCube className='mr-2 md:w-48' />
              </div>
              <div className='tracking-tighter'>
                NFTs: Our team has dedicated ourselves to perfecting the craft of crafting the most captivating and immersive NFTs currently available on the market. We take pride in offering both 3D and 2D NFTs that are sure to impress even the most discerning collectors and enthusiasts. Whether you're looking for a stunning visual experience or a unique investment opportunity, our NFTs are designed to meet your needs and exceed your expectations. Allow us to show you the level of quality and excellence that we bring to every project we undertake. Starting from Just $249/NFT design
              </div>
            </div>
          </div>
        </div>
        <div className='mx-4 md:mx-16'>
          <div className='font-poppins text-center text-lg md:text-4xl font-semibold text-blue-600 my-5'>
            Why choose us?
          </div>
          <div className='font-poppins text-gray-800 text-lg md:text-lg'>
            We pride ourselves on our creativity, attention to detail, and ability to deliver stunning visual solutions that leave a lasting impression. Our team stays up-to-date with the latest design trends and technologies to ensure that we provide you with cutting-edge designs that set you apart from the competition.
          </div>
          <div className='font-poppins text-gray-800 text-lg md:text-lg mt-4'>
            When you work with us, you can expect a seamless and collaborative design process. We value your input and ideas and strive to involve you at every step, from the initial concept development to the final design delivery. Our goal is to not only meet but exceed your expectations.
          </div>
          <div className='font-poppins text-gray-800 md:text-lg mt-4'>
            So, whether you are a start-up looking to establish your brand or an established business seeking a design refresh, Graphic Designing Services is here to help. Contact us today to discuss your design needs and let us bring your vision to life!
          </div>
          <div className='font-poppins text-center text-lg md:text-xl text-gray-800 my-5'>
            So Let's Start Winning!
          </div>
          <div className='text-center'>
            <button className='bg-blue-600 mb-3 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300'>
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GraphicDesigning;
