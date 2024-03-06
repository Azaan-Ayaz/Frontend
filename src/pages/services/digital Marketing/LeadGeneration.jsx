import React, { useEffect } from "react";
// import { motion, AnimatePresence } from 'framer-motion';
// import Header from "../../../Layout/header";
import Footer from "../../../Layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Navbar from "../../../Layout/navbar";

const LeadGeneration = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="z-10 relative">
        <Navbar />
      </div>
      <div>
        <div className="flex md:w-full bg-white-800 bg-opacity-80">
          <div className="flex items-center md:mx-4 md:w-1/2">
            <div className="md:w-5/5 p-2 hidden md:flex md:ml-10 gap-4">
              <div className="flex flex-col p-2 gap-2">
                <div className=" md:mt-32">
                  <img
                    className="object-cover w-full h-full rounded-lg shadow-md"
                    src="lead2.jpg"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="object-cover w-full h-full rounded-lg shadow-md"
                    src="lead1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col p-2 gap-2">
                <div className="">
                  <img
                    className="object-cover w-full h-full rounded-lg shadow-md"
                    src="laed3.jpg"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="object-cover w-full h-full rounded-lg shadow-md"
                    src="lead4.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-center mr-16 md:w-1/2">
            <h1 className="text-2xl md:text-left text-center md:text-6xl font-semibold font-poppins text-blue-600 leading-tight ml-8">
              We Don't Make Leads
            </h1>
            <h1 className="text-2xl text-center md:text-left font-poppins md:text-6xl font-semibold text-blue-600 leading-tight ml-8">
              We Make Leads Better
            </h1>
          </div>
        </div>
        <div className="flex mb-3 justify-center">
          <hr className=" border-gray-800 w-1/2" />
        </div>
        <div className="flex justify-between items-center md:ml-9 md:mr-16">
          <div className="md:w-2/3" data-aos="fade-up">
            <div className="bg-blue-600 p-3 ml-2 rounded-xl">
                <div className="text-white  md:text-3xl font-poppins ">
                  Looking for effective lead generation services for your
                  business?
                </div>
                <div className="text-white font-poppins tracking-tighter md:text-lg">
                  <p>
                    Lead generation services are essential for expanding your
                    customer base and increasing your online presence. We offer
                    top-notch lead generation services tailored to your specific
                    needs. Our team of experts utilizes cutting-edge strategies
                    to attract high-quality leads and maximize conversion rates.
                    With our services, you can expect a steady stream of
                    qualified leads that are ready to engage with your business.
                  </p>
            </div>
            </div>
          </div>
          <div className="w-1/3" data-aos="fade-left">
            <img src="Question.png" alt="" className="md:flex hidden" />
          </div>
        </div>
        <div className="flex mt-14 items-center justify-between gap-24 md:mx-5">
          <div className="md:w-[32%] md:flex hidden md:mr-2">
            <img src="Thinking.png" alt="" data-aos="fate-right" />
          </div>
          <div className="md:w-[65%] flex justify-end flex-col">
            <div className="bg-blue-600 rounded-lg p-2 mx-1">
                <div className="text-white mb-1  font-poppins text-3xl">
              Worried about your Leads not converting?
                </div>
                <div className="text-white mb-1 font-poppins text-3xl">
                Don’t worry we have you covered!
                </div>
                <div className="text-white tracking-tighter text-lg">
                  <p>
                  Our comprehensive lead generation approach includes various
              tactics such as targeted online advertising, engaging content
              creation, search engine optimization, email marketing, and social
              media campaigns. We conduct thorough research to identify your
              target audience and customize our strategies to reach them
              effectively.
                </p>
                </div>
                </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-12 px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl text-blue-600 font-semibold mb-6">
                  When you partner with us for lead generation services, you can
                  expect:
                </h2>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    <strong>Increased visibility:</strong>
                    <div className="font-semibold">
                      {" "}
                      Our strategies are designed to enhance your online
                      visibility and attract potential customers to your
                      website.
                    </div>
                  </li>
                  <li>
                    <strong>Quality leads:</strong>
                    <div className="font-semibold">
                      We focus on attracting high-quality leads that are more
                      likely to convert into paying customers. Our targeted
                      approach ensures that you reach the right audience.
                    </div>
                  </li>
                  <li>
                    <strong>Improved conversion rates:</strong>
                    <div className="font-semibold">
                      {" "}
                      Through strategic content creation and personalized
                      messaging, we help you nurture leads and convert them into
                      loyal customers.
                    </div>
                  </li>
                  <li>
                    <strong>Cost-effective solutions:</strong>
                    <div className="font-semibold">
                      {" "}
                      Our lead generation services are designed to provide
                      maximum ROI. We optimize your campaigns to minimize costs
                      while maximizing results.
                    </div>
                  </li>
                  <li>
                    <strong>Transparent reporting:</strong>{" "}
                    <div className="font-semibold">
                      {" "}
                      We provide regular reports and insights on the performance
                      of your lead generation campaigns. You can track the
                      progress and effectiveness of our strategies.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-4xl font-semibold text-blue-600">
                Remember, effective lead generation is an ongoing process.
              </p>
              <p className="mt-4 font-semibold text-lg text-black-600">
                With our services, you can establish a steady pipeline of leads
                and consistently grow your business.
              </p>
              <p className="mt-4 text-lg text-black font-semibold">
                Get in touch with us today to discuss how we can help you boost
                your lead-generation efforts and take your business to new
                heights.
              </p>
              <button className="mt-6 mb-6 bg-blue-600 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LeadGeneration;
