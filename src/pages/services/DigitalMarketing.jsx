import React from 'react';
import { FaSearch, FaUsers, FaPencilAlt, FaBullhorn, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Layout/navbar';

const DigitalMarketing = () => {

  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    <div className="container mx-auto md:px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-2">Welcome to Nectronix Digital</h2>
        <p className="text-lg text-gray-700">Your one-stop solution for effective and result-driven digital marketing services.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* SEO Services */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaSearch className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">SEO Services</h3>
          <p className="text-gray-700">At Nectronix Digital, we specialize in optimizing your website to boost its search engine ranking. Our expert team uses cutting-edge strategies and techniques to ensure that your website appears at the top of search engine results pages (SERPs), driving organic traffic and increasing visibility.</p>
          <button className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 transition duration-300'onClick={()=>{navigate('/seo')}}>Go To Page</button>
        </div>
        {/* Social Media Management & Marketing */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaUsers className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Social Media Marketing</h3>
          <p className="text-gray-700">Engage with your target audience and build a strong online community with our social media management and marketing services. We create tailored social media strategies to enhance brand awareness, drive engagement, and generate leads, helping you connect with your customers on platforms like Facebook, Instagram, Twitter, LinkedIn, and more.</p>
          <button className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 transition duration-300'onClick={()=>{navigate('/smm')}}>Go To Page</button>
        </div>
        {/* Content Marketing */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaPencilAlt className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Content Marketing</h3>
          <p className="text-gray-700">Quality content is key to capturing the attention of your audience. Our content marketing services focus on creating compelling and relevant content that resonates with your target market. From blog posts to infographics, we develop content that drives traffic, engages users, and enhances brand credibility.</p>
          <button className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 transition duration-300'onClick={()=>{navigate('/content-marketing')}}>Go To Page</button>
        </div>
        {/* Digital Advertising */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaBullhorn className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Digital Advertising</h3>
          <p className="text-gray-700">Maximize your reach and drive conversions with our digital advertising solutions. We create targeted ad campaigns across various platforms such as Google Ads and Facebook Ads to reach your ideal customers at the right time and place.</p>
          <button className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 transition duration-300'onClick={()=>{navigate('/advertising')}}>Go To Page</button>
        </div>
        {/* Email Marketing */}
        {/* <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaEnvelope className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
          <p className="text-gray-700">Stay connected with your audience through personalized email campaigns.</p>
          <button className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 transition duration-300'>Go To Page</button>
        </div> */}
        {/* Lead Generation */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaEnvelope className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Lead Generating</h3>
          <p className="text-gray-700">By leveraging the power of data analytics and automation tools, we can optimize your lead generation process and ensure higher ROI. Our team continuously monitors the performance of your campaigns and makes necessary adjustments to maximize results.</p>
          <button className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 transition duration-300'onClick={()=>{navigate('/lead-generation')}}>Go To Page</button>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-lg text-gray-700">
          By choosing Nectronix Digital as your digital marketing partner, you can expect tailored strategies, transparent reporting, and measurable results. Contact us today to get started on your digital marketing journey!
        </p>
        <button className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 transition duration-300'>Contact Us</button>
      </div>
    </div>
    </>
  );
};

export default DigitalMarketing;
