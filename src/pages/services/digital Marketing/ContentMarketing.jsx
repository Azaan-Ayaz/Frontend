import React from 'react';
// import Header from '../../../Layout/header';
import Footer from '../../../Layout/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../Layout/navbar';

const ContentMarketing = () => {
  const navigate = useNavigate();

  const eventHandler = () => {
    navigate("/contact");
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="container md:mt-20 mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl text-blue-600 font-poppins font-semibold text-blue-6z00 leading-snug md:leading-normal mb-6 md:mb-12">
                "Elevate Your Brand Story, Elevate Your Success."
              </h1>
            </div>
            <div className="md:w-1/2 mr-16">
              <img src="CM.png" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-200 py-10 flex flex-col'>
        <div className='text-3xl md:text-4xl lg:text-5xl font-semibold mt-6  ml-4 md:ml-6 lg:ml-12 p-2 md:p-4 tracking-tighter text-blue-600'>
          <div>Is Your Content Missing Out On The Touch Of Brilliance?</div>
        </div>
        <div className='md:mt-5 mx-4 md:mx-9 pb-3 text-2xl md:text-3xl md:p-4 lg:text-4xl text-black tracking-tighter font-poppins font-semibold'>
          Don’t worry Techsol Solutions Content Marketing team has you covered!
        </div>
        <div className='mb-4 md:mx-9'>
          <div className='text-xl md:mx-9 tracking-tighter font-semibold ml-2'>Techsol Solutions is a premier provider of high-quality content marketing services that help you connect with your target audience and drive business growth. Our expert team of content strategists, writers, editors, and designers is dedicated to creating and promoting exceptional content that delivers results and strengthens your brand.</div>
        </div>
      </div>
      <div className='text-4xl font-bold mt-8 md:mt-6 md:text-7xl  font-new md:mt-18 text-blue-600 text-center'>What We Offer!</div>
      <div>
        <div className='flex align-middle mb-3 md:flex-row md:justify-start flex-col-reverse items-center'>
          <div className='flex justify-start md:w-1/2'><img src="ST.png" alt="" className='md:' /></div>
          <div className='flex  justify-end md:w-1/2'>
            <div className='flex ml-2 flex-col'>
              <h1 className='font-semibold text-blue-600 md:text-5xl text-start w-full text-2xl font-poppins '>Content Strategy: </h1>
              <div className='text-xl font-semibold'>Our content strategists work with you to understand your goals, audience, and brand messaging, creating a comprehensive content strategy that outlines the best approach to achieve optimal outcomes.</div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex md:flex-row flex-col align-middle items-center'>
            <div className='flex  justify-end ml-9 md:w-1/2'>
              <div className='flex flex-col'>
                <h1 className='font-semibold text-blue-600 font-poppins text-2xl md:text-5xl'>Content Creation:</h1>
                <div className='text-xl font-semibold'>Our team of expert writers and designers creates powerful, engaging content that resonates with readers and drives action. From blog posts and case studies to videos and infographics, we tailor our content to meet your specific needs.</div>
              </div>
            </div>
            <div className='flex justify-end mr-9 w-1/2'><img src="cmm.png" alt="" /></div>
          </div>
        </div>
        <div className='flex align-middle md:flex-row flex-col-reverse items-center'>
          <div className='flex justify-start md:ml-2 md:w-1/2'><img src="co.png" alt="" className='w-2/3 h-2/3' /></div>
          <div className='flex  justify-end w-1/2'>
            <div className='flex flex-col'>
              <h1 className='font-semibold text-blue-600 font-poppins text-5xl'>Content Optimization:</h1>
              <div className='text-xl font-semibold'>We optimize your existing content to enhance its visibility and increase the likelihood of conversion. We identify key opportunities to improve engagement and conversion, from headline optimization to internal linking.</div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex md:flex-row flex-col align-middle items-center'>
            <div className='flex  justify-start ml-9 md:w-1/2'>
              <div className='flex flex-col'>
                <h1 className='font-bold text-blue-600 font-poppins text-5xl'>Content Promotion:</h1>
                <div className='text-xl font-semibold'>We promote your content across a range of channels, ensuring maximum visibility and reach. From social media and email marketing to paid promotion, we create a targeted promotion plan that drives results.</div>
              </div>
            </div>
            <div className='flex justify-end  ml-16  w-1/3'><img src="cp.png" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200  my-16 px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-7xl text-center font-new font-bold text-blue-600 mb-8">How do we deliver success?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 md:mx-0 mx-8 cursor-pointer transition-all">
              <h3 className="text-2xl font-poppins font-semibold text-blue-600 text-center mb-3">Discuss Your Company’s Objectives</h3>
              <p className="text-gray-800 font-semibold md:text-lg text-center">
                We'll find out about your company’s short- and long-term goals in order to develop a content marketing strategy that advances those objectives.
              </p>
            </div>
            <div className="bg-white md:p-8 cursor-pointer transition-all p-6 md:mx-0 mx-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-poppins font-semibold text-blue-600  text-center mb-3">Review Your Market Segment</h3>
              <p className="text-gray-800 md:text-lg text-center font-semibold">
                To choose the best course of action, we’ll conduct a thorough analysis of your competition, both generally and in terms of search.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 cursor-pointer md:mx-0 mx-8 transition-all rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-poppins text-blue-600 font-semibold text-center mb-3">Examine Your Strategic Aims</h3>
              <p className="text-gray-800 md:text-lg text-center font-semibold">
                What main goals are listed on your roadmap? Increase content generation? Introduce a fresh product line? We’ll come up with a strategy that precisely fits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-9 md:mt-24 overflow-x-auto">
          <table className="w-full border-gray-300">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300">DIRECT</th>
                <th className="border border-gray-300">EXPRESS</th>
                <th className="border border-gray-300">TURBO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-center font-semibold border-gray-300">$1,000</td>
                <td className="border text-center font-semibold border-gray-300">$1,500</td>
                <td className="border text-center font-semibold border-gray-300">$2,700</td>
              </tr>
              <tr>
                <td className="border border-gray-300">✔️ 3 Content resources created</td>
                <td className="border border-gray-300">✔️ 6 Content resources created</td>
                <td className="border border-gray-300">✔️ 12 Content resources created</td>
              </tr>
              {/* Add more table rows here */}
              <tr>
          <td className="border border-gray-300">✔️ Shared Content Marketing Expert </td>
          <td className="border border-gray-300">✔️ Shared Content Marketing Expert </td>
          <td className="border border-gray-300">✔️ Personal Content Marketing Expert </td>
          {/* <td className="border border-gray-300">✔️ Analytics Setup & Configuration</td>
          <td className="border border-gray-300">✔️ Analytics Setup & Configuration</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">✔️ Keyword Research</td>
        <td className="border border-gray-300">✔️ Keyword Research</td>
        <td className="border border-gray-300">✔️ Keyword Research</td>
        {/* <td className="border border-gray-300">✔️ Monthly Strategy Discussion</td>
        <td className="border border-gray-300">✔️ Monthly Strategy Discussion</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">✔️  Monthly Strategy Report</td>
        <td className="border border-gray-300">✔️  Bi-Weekly Strategy Report</td>
        <td className="border border-gray-300">✔️  Weekly Strategy Report</td>
        {/* <td className="border border-gray-300">✔️ Internal Link Building (Crosslinking)</td>
        <td className="border border-gray-300">✔️ Internal Link Building (Crosslinking)</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">✔️ 1 long form text</td>
        <td className="border border-gray-300">✔️ 2 long form text</td>
        <td className="border border-gray-300">✔️ 3 long form text</td>
        {/* <td className="border border-gray-300">✔️ Content Editing & Optimization</td>
        <td className="border border-gray-300">✔️ Content Editing & Optimization</td> */}
        {/* <td className="border border-gray-300">✔️ Internal Link Building (Crosslinking)</td> */}
        {/* <td className="border border-gray-300">✔️ Internal Link Building (Crosslinking)</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">✔️ 1-3 blog posts</td>
        <td className="border border-gray-300">✔️ 1-3 blog posts</td>
        <td className="border border-gray-300">✔️ 3-5 blog posts</td>
        {/* <td className="border border-gray-300">✔️ Basic On-Site Optimization</td>
        <td className="border border-gray-300">✔️ Advanced On-Site Optimization</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">✔️ 1 Website Page content</td>
        <td className="border border-gray-300">✔️ 2 Website Page content</td>
        <td className="border border-gray-300">✔️ 4-6 Website Page content</td>
        {/* <td className="border border-gray-300">✔️ Monthly Custom Report</td>
        <td className="border border-gray-300">✔️ Bi-Weekly Custom Report</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">✔️ 1 Ad Copy</td>
        <td className="border border-gray-300">✔️ 3 Ad Copy</td>
        <td className="border border-gray-300">✔️ 12 Ad Copy</td>
        {/* <td className="border border-gray-300">✔️ Bi-Weekly Review Call</td>
        <td className="border border-gray-300">✔️ Weekly Review Call</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">✔️ Competitor analysis report</td>
        <td className="border border-gray-300">✔️ Competitor analysis report</td>
        <td className="border border-gray-300">✔️ Competitor analysis report</td>
        {/* <td className="border border-gray-300">✔️ 2 Blog Post (400 words each)</td>
        <td className="border border-gray-300">✔️ 3 Blog Post (400 words each)</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">✔️ Calendar Creation</td>
        <td className="border border-gray-300">✔️ Calendar Creation</td>
        <td className="border border-gray-300">✔️ Calendar Creation</td>
        {/* <td className="border border-gray-300">✔️ Image Alter Tags (2 page)</td>
        <td className="border border-gray-300">✔️ Image Alter Tags (4 page)</td> */}
        {/* <td className="border border-gray-300">✔️ Target Audience Identification</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">❌ Presentation</td>
        <td className="border border-gray-300">✔️ 1 Presentation</td>
        <td className="border border-gray-300">✔️ 2 Presentation</td>
        {/* <td className="border border-gray-300"> Image Alter Tags (2 page)</td> */}
        </tr>
        <tr>
        <td className="border border-gray-300">❌ Product Descriptions</td>
        {/* <td className="border border-gray-300">❌ Product Descriptions</td> */}
        <td className="border border-gray-300">✔️ 4 Product Descriptions</td>
        <td className="border border-gray-300">✔️  Product Descriptions</td>
        </tr>
        
        {/* <tr>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex justify-between items-center md:flex-col flex-col mx-16 mt-5 mb-12'>
        <img src="S7.png" alt="avatar" className='w-96 h-96 hidden md:block' />
        <div className='font-poppins'>
          1) All the prices are in USD and are on a monthly basis
        </div>
        <div className='font-poppins'>
          2) We initially sign a contract for a minimum of 6 months
        </div>
        <div className='font-poppins'>
          3) Every Plan includes a basic Brand Audit
        </div>
      </div>
      <div>
        <div className="mb-8 mt-12 text-center">
          <p className="text-2xl font-semibold text-gray-900">
            If you are ready to take your content marketing to the next level, then look no further. Contact us today to schedule a free consultation and discover how we can help you achieve your business goals through exceptional content marketing services.
          </p>
        </div>
        <div className="flex flex-col mb-32 items-center">
          <p className="text-lg font-semibold mb-2">Then let’s get started</p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-xl py-2 px-6 rounded" onClick={eventHandler}>
            Contact Us
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentMarketing;
