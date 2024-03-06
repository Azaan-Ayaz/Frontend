import React from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/Footer";

const WebDevelopment = () => {
  return (
    <>
    <Header/>
    <div className="mt-20 mb-4">
        <div className="flex items-center  justify-between mb-4 mx-10">
            <div>
                <div className="md:text-5xl text-center text-2xl font-semibold"><div className="text-blue-600 font-orbitron font-semibold">Nectronix Solutions</div> Your One-Stop Solution for Web Development Services</div>
            </div>
            <div className="md:flex hidden w-4/5">
                <img src="web.png" alt="" />
            </div>
        </div>
<div className=" mb-5 p-3">
    <div className="flex justify-between gap-16 mx-20 md:flex-row flex-col items-center my-5  ">
  <div>
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
      Does your website need a makeover?
      </h2>
      <div className="text-xl font-bold text-white mb-4">Are you looking for reliable and high-quality web development services?</div>
     </div>
  </div>
    {/* <div className="w-1/3"><img src="Question.png" alt="" /></div>     */}
<div className="w-2/3"> <p className="text-red text-xl font-semibold">
      Look no further! Techsol Solutions is here to cater to all your needs. With our team of experienced developers, we offer a wide range of services including <div className="text-red-800 font-bold text-[25px] mb-[2px]">WordPress development,</div> <div className="text-red-800 font-bold text-[25px] mb-[2px]">Custom Development,</div> <div className="text-red-800 font-bold text-[25px] mb-[2px]">Shopify Development,</div> <div className="text-red-800 font-bold text-[25px] mb-[2px]">PHP Laravel development.</div> 
      </p>
</div>
</div>
</div>
<div className="">
<div className="mt-2 flex justify-between items-center p-2 md:flex-row flex-col ">
  <div className="w-1/2 mx-4">
    <div className="text-3xl font-bold mb-2">WordPress Development</div>
    <div className="text-lg text-gray-700 tracking-tight">
      At Techsol Solutions, we specialize in WordPress development. Whether
      you need a simple blogging website or a complex e-commerce platform, our
      experts can create a stunning and user-friendly website that aligns with
      your business goals. We use the latest plugins and themes to ensure your
      website is responsive, secure, and tailored to your specific
      requirements.
    </div>
  </div>
  <div className="w-1/2">
    <img src="wpp.png" alt="WordPress Development" className="w-full" />
  </div>
</div>
<div className="flex justify-center">
  <hr className="border-6 border-solid border-red-800 my-5 w-1/3" />
</div>
<div className=" flex justify-between md:flex-row flex-col-reverse items-center mt-2 p-2">
<div className="w-3/5">
    <img src="Custom.png" alt="Avatar" />
</div>
    <div className="mx-4 w-4/5 bg-white p-3">
        <div className="text-3xl font-bold">Custom Development</div>
        <div className="text-gray-700 text-lg tracking-tight">We understand that every business is unique, and so are its requirements. Our custom development services are designed to provide you with a fully customized solution that meets your specific needs. Our experienced team of developers can create custom modules, plugins, and functionalities that align with your business objectives. We ensure that your website is optimized for performance and provides a seamless user experience.</div>
    </div>
</div>
<div className="flex justify-center">
  <hr className="border-6 border-solid border-red-800 my-5 w-1/3" />
</div>
<div className=" mt-2 flex md:flex-row flex-col justify-between gap-5 items-center p-2">
    <div className="mx-4 bg-white w-3/5 p-3">
        <div className="text-3xl font-bold">Shopify Development</div>
        <div className="tracking-tight text-lg ">Looking to start an e-commerce business? Our Shopify development services are tailored to help you create a successful online store. From setting up your store to customizing its design and functionality, we handle it all. Our experts use Shopify's robust platform to create a visually appealing and user-friendly store that drives conversions and enhances customer experience.</div>
    </div>
    <div className="w-3/5">
        <img src="Shopify.png" alt="Avatar" />
    </div>
</div>
  <div className="flex justify-center">
  <hr className="border-6 border-solid border-red-800 my-5 w-1/3" />
</div>
<div className=" flex justify-between md:flex-row flex-col-reverse items-center mt-2 p-2">
<div className="w-3/5">
    <img src="php.png" alt="Avatar" />
</div>
    <div className="mx-4 bg-white p-3 w-4/5">
        <div className="text-3xl font-bold">PHP Laravel Development:</div>
        <div className="text-lg tracking-tight">If you require a dynamic and scalable web application, our PHP Laravel development services are the perfect fit for you. Laravel is a popular PHP framework known for its elegant syntax and powerful features. Our developers leverage the capabilities of Laravel to create robust and secure web applications that are not only efficient but also easy to maintain and upgrade.</div>
    </div>
</div>
<div className="flex justify-center">
  <hr className="border-6 border-solid border-red-800 my-5 w-1/3" />
</div>
</div>
<div className="text-center mx-10 mt-10">
  <h2 className="text-3xl font-semibold mb-6">Why Choose Techsol Solutions?</h2>
  <div className="flex flex-col md:flex-row justify-center items-start md:items-center md:justify-between">
  <div className="max-w-md md:mr-6">
  <ol className="list-decimal justify-start text-xl list-inside">
    <li className="mb-3">Professional and experienced team of developers</li>
    <li className="mb-3">Tailor-made solutions to meet your unique needs</li>
    <li className="mb-3">Transparent communication and project management</li>
    <li className="mb-3">Timely delivery and adherence to deadlines</li>
    <li>Continuous support and maintenance services</li>
  </ol>
</div>
    <div className="w-full md:w-1/2">
      <img src="why.jpg" alt="Why Choose Techsol Solutions" className="rounded-lg" />
    </div>
  </div>
</div>
<div className="mt-8 py-8">
  <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center">
    <img src="part.jpg" alt="Partner with Techsol Solutions" className="w-full md:w-1/2 rounded-lg md:mr-6 mb-6 md:mb-0 shadow-md" />
    <div className="md:w-1/2 md:ml-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Partner with Techsol Solutions</h2>
      <p className="text-lg text-gray-700 mb-4">Take your web development project to new heights with Techsol Solutions. Our experienced team is ready to turn your ideas into reality.</p>
      <p className=" text-gray-700 text-xl font-semibold">Contact us today for a free consultation and let us help you bring your vision to life.</p>
      <div className="flex justify-center"><button className="bg-red-800 text-white p-2 rounded-md text-lg font-semibold ">Contact Us</button></div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-200" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4rem))' }}></div>
</div>
    </div>
    <Footer/>
    </>
  );
};

export default WebDevelopment;
