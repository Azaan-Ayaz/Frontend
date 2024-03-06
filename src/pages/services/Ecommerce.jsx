import React from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";

const Ecommerce = () => {
  const navigate = useNavigate();

  const eventHandler = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="relative z-40">
        <Header />
      </div>
      <div className="md:mt-16 mt-5 w-full">
        <div className="">
          <div className="md:flex md:justify-between p-4 md:mx-16 items-center">
            <div className="">
              <img src="cartbg.png" alt="" className="md:flex hidden" />
            </div>
            <div className="md:text-5xl font-orbitron text-blue-600 p-4 md:ml-16 font-bold md:w-2/4">
              Seeking Seamless Solutions For Your E-Commerce Journey
            </div>
          </div>
        </div>
        <div className="">
          <div className="md:flex items-center gap-10 p-4 md:p-6 justify-around">
            <ul>
              <li className="md:text-2xl text-lg font-semibold font-orbitron text-black">
                 1 Is your brand missing out on the Online Presence?

              </li>
              <li className="md:text-2xl text-base font-orbitron font-semibold ">
                  2 Are your competitors going ahead due to their online presence
                  & their e-commerce website?

              </li>
            </ul>
            <div className="md:p-2">
              At Nectronix Digital, we are committed to delivering
              exceptional app development services. Our team of skilled
              professionals focuses on creating innovative solutions
              tailored to your business needs. Whether you are a small
              startup or a large enterprise, we have the expertise to turn
              your app ideas into reality.
            </div>
            <div className="w-1/4 md:block hidden">
              <img src="Question.png" alt="" />
            </div>
          </div>
          <div className="bg-blue-500 mx-3 text-white px-5 py-8">
            <div className="text-2xl font-serif text-center font-semibold">
              We offer state-of-the-art technology solutions to our valued
              customers. Our team of professionals is ready to give you a head
              start in winning all your business races.
            </div>
          </div>
          <div>
            <div className="my-7 text-center">
              <div className="text-4xl lg:text-6xl font-new text-yellow-400 font-semibold mb-3 ">
                Do you Know?
              </div>
              <div className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                One of the best methods to grow your business is through
                e-commerce websites. We help you gain new customers as well as
                uplift your brand’s presence.
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="p-4">
              <div className="text-green-600  font-poppins md:ml-4 font-semibold tracking-tighter text-3xl md:text-6xl">
                WHAT WE OFFER
              </div>
            </div>
            <div>
              <div className="md:flex ">
                <div className="md:w-2/3 p-2 md:pl-4 md:mx-5">
                  <div className="text-2xl  text-blue-600 font-semibold">
                    Website Development & Management
                  </div>
                  <div className="text-lg font-semibold tracking-tighter text-gray-800">
                    Techsol Solutions Technology team of web developers is
                    customer-centric and creates website solutions that deliver
                    tangible business outcomes. They help brands navigate the
                    ever-changing digital landscape. We offer website
                    development in 4 main concepts
                    <ul className="text-lg font-semibold font-poppins text-red-600">
                      <li>1) Shopify,</li>
                      <li>2) Magento,</li>
                      <li>3) WordPress,</li>
                      <li>4) Custom Built.</li>
                    </ul>
                    Shopify, Magento, and WooCommerce are CRMs that are
                    specialized solutions for e-commerce stores. We tend to
                    develop and deliver customer and brand-centric websites.
                    CRMs have advantages over custom-built websites, due to
                    their mobility as well as inventory management and
                    e-commerce-ready backend.
                  </div>
                </div>
                <div className="w-1/3">
                  <img src="S3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col-reverse gap-16 justify-between">
              <div className="md:w-3/5">
                <img
                  className="object-cover h-full w-full"
                  src="S6.jpg"
                  alt="SEO"
                />
              </div>
              <div className="flex md:flex-row flex-col-reverse justify-center md:w-1/3">
                <div className="p-2 pl-4 md:mx-5">
                  <div className="text-2xl font-semibold font-poppins text-blue-600">
                    Search Engine Optimization
                  </div>
                  <div className="text-lg font-semibold text-gray-800 tracking-tighter">
                    To bring success to your e-commerce store, Search Engine
                    Optimization or SEO is a crucial asset. Techsol Solutions
                    has a team of SEO specialists who are dedicated to
                    delivering top-ranked results for your e-commerce website.
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex md:flex-row flex-col-reverse md:mx-20 mt-5 gap-16 justify-between">
              <div className="flex flex-col justify-center md:w-2/3">
                <div className="p-2 pl-4 w mx-5">
                  <div className="text-2xl font-semibold text-blue-600">
                    Payment Gateway Integrations
                  </div>
                  <div className="text-lg font-semibold tracking-tighter text-gray-800 mt-2">
                    Payment gateways are a merchant service that processes
                    credit card payments for an e-commerce store. They can be
                    thought of as the metaphorical cash register in an
                    electronic transaction. We help you collect online payments
                    via bank payment gateway integrations to your online store.
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 w-2/4 flex justify-between">
                <img
                  className="object-cover h-full w-full"
                  src="S2.png"
                  alt="SEO"
                />
              </div>
            </div>
            <div className="flex-col-reverse flex md:flex-row mt-3 mx-6 mb-9 md:gap-16 justify-between">
              <div className="md:w-2/5 w-2/4">
                <img
                  className="object-cover h-full w-full"
                  src="crm.png"
                  alt="CRM"
                />
              </div>
              <div className="flex flex-col md:justify-center md:w-3/5">
                <div className="p-2 pl-4 mx-5">
                  <div className="text-2xl text-blue-600 font-poppins font-semibold">
                    Inventory Management via CRM
                  </div>
                  <div className="text-lg text-gray-800 font-semibold">
                    We offer inventory management solutions via CRMs inventory
                    management systems. We also offer inventory management
                    solutions for your traditional brick & mortar stores. .
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:mx-20 md:mt-5 md:gap-16 md:justify-between">
              <div className="flex flex-col justify-center md:w-3/5">
                <div className="p-2 pl-4 ">
                  <div className="text-2xl font-semibold text-blue-600 font-poppins">
                    E-commerce Digital Marketing
                  </div>
                  <div className="text-lg font-semibold  text-gray-800 ">
                    Techsol Solutions is a full-service digital marketing agency
                    offering Social Media Management and Marketing,
                    Strategizing, implementation, etc. Learn More about Techsol
                    Solutions Digital Marketing Services (HERE)
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 w-1/2 sm:flex sm:justify-center">
                <img
                  className="object-cover h-full w-full"
                  src="S5.png"
                  alt="DM"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col-reverse mt-3 mx-6 md:gap-16 justify-between">
              <div className="md:w-2/5">
                <img
                  className="object-cover h-full w-full"
                  src="S4.png"
                  alt="CRM"
                />
              </div>
              <div className="md:flex md:flex-row justify-center items-center w-full md:w-3/5 mx-auto">
                <div className="md:w-2/2 p-4">
                  <div className="text-2xl md:text-3xl text-blue-600 font-poppins font-semibold mb-4">
                    Performance Marketing
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-gray-800">
                    Combining paid advertising with brand marketing, performance
                    marketing refers to an advertising program in which we aim to achieve specific actions such as lead generation, sales, bookings, or downloads. At Techsol Solutions, we offer top-notch performance marketing services. Our campaign managers boast the highest success rates according to Google’s brand audit.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-2/5 h-32 items-center mb-6 bg-gray-300 p-4 relative  text-lg font-semibold ">
                <div className="w-full  flex flex-col h-full bg-blue-600 absolute top-4 left-4">
                  <div className="p-3 text-white text-xl text-center font-orbitron">
                    Sign Up now to get a free consultation session
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="border-2 p-1 text-white"
                      onClick={eventHandler}
                    >
                      Click Here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ecommerce;
