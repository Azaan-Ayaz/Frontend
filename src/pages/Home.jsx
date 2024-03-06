import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../Layout/header";
import Footer from "../Layout/Footer";
import Testimonials from "../Testimonials";
import {
  FaPencilAlt,
  FaBullhorn,
  FaShoppingCart,
  FaCogs,
  FaChartLine,
  FaCode,
} from "react-icons/fa";

const Home = () => {
  const words = ["Achievers", "Doers", "Performers", "Executers"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Delay between each word change

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex, words]);

  return (
    <>
    <div>
      <div className="md:relative z-10">
        <Header />
      </div>
      <div className="md:mx-4 mx-1 mt-6 md:mt-20">
        <div className="flex md:justify-around flex-col md:flex-row items-start md:items-center">
          <div className="mt-7 pl-4 flex md:flex-row flex-col">
            <h1>
              <div className="flex md:flex-rows text-left flex-col mb-2">
                <div className="text-blue-600 font-bold font-poppins text-5xl md:text-9xl">
                  The
                </div>
                <div className="">
                  <div className="message md:text-9xl text-5xl font-poppins font-bold ml-2 text-white p-1 bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600">
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {words[currentWordIndex]}
                    </motion.div>
                  </div>
                </div>
              </div>
            </h1>
          </div>
          <div className="relative ">
            <div className="w-full h-96">
              <div className="md:w-80 w-64 md:mx-0 mx-4 h-96 bg-gray-300 p-4 relative z-0 ">
                <div className="w-full h-full bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600 absolute top-4 left-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 md:p-8 mt-10 md:mt-6">
        <div className="font-semibold md:text-5xl text-6xl text-center font-poppins md:mb-2 md:text-left text-blue-600">
          Services
        </div>
        <div className="grid grid-cols-1 md:m-0 md:grid-cols-3 gap-8 mt-8 md:mx-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="md:p-6 border border-gray-500 bg-gradient-to-t from-indigo-600 to-blue-300 rounded-lg shadow-lg"
            >
              <div className="text-center font-poppins md:font-poppins text-3xl md:text-4xl font-semibold text-white">
                {<service.icon className="inline-block mb-4 text-4xl" />}
              </div>
              <div className="text-center font-poppins md:font-poppins text-2xl md:text-xl font-semibold text-white mt-4">
                {service.title}
              </div>
              <div className="text-white font-poppins text-center text-lg tracking-tight mt-2">
                {service.description}
              </div>
              <div className="flex justify-center mt-4">
                <button className="rounded-full px-6 py-3 bg-i-800 text-white hover:bg-gray-800 text-lg font-semibold">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center text-5xl font-bold text-blue-500">
        Testimonials
        <div className="flex justify-center">
          <hr className="border-2 w-1/6 border-black " />
        </div>
      </div>
      <div className="md:flex hidden">
        <Testimonials />
      </div>
      <div className="md:mt-12 mt-4 text-center md:text-5xl text-4xl font-semibold text-blue-500">
        Partners
        <div className="flex justify-center">
          <hr className="border-2 w-1/6 border-gray-500" />
        </div>
      </div>
      <div className="md:flex flex md:mb-3 mb-2 justify-center">
      <div className="grid md:w-1/3 w-2/3 grid-cols-3 md:grid-cols-3 gap-4 mt-8">
          <img src="ads.png" alt="Ads Partner" className="w-full h-auto" />
          <img src="clutch.png" alt="Clutch Partner" className="w-full h-auto" />
          <img src="google.png" alt="Google Partner" className="w-full h-auto" />
          <img src="shopify.jpg" alt="Shopify Partner" className="w-full h-auto" />
          <img src="tiktok.png" alt="TikTok Partner" className="w-full h-auto" />
          <img src="meta.png" alt="Meta Partner" className="w-full h-auto" />
        </div>
        </div>
            <Footer />
            </div>
    </>
  );
};

const services = [
  {
    title: "Designing Content and Videos",
    description:
      "If you’re in need of captivating visual solutions, explore our website where we offer expert graphic design services to enhance your brand and communication.",
    icon: FaPencilAlt,
  },
  {
    title: "Digital Marketing",
    description:
      "Unlock the full potential of your online presence with our digital marketing expertise, driving targeted strategies that expand your reach, engage your audience, and deliver measurable results.",
    icon: FaBullhorn,
  },
  {
    title: "E-Commerce",
    description:
      "Elevate your shopping experience with our seamless e-commerce platform, where you can discover a diverse range of products, enjoy secure transactions, and have items delivered conveniently to your doorstep",
    icon: FaShoppingCart,
  },
  {
    title: "Managed Services BPO'S",
    description:
      "Experience operational excellence through our managed services BPOs, where we leverage industry expertise and advanced technology to streamline your business.",
    icon: FaCogs,
  },
  {
    title: "Marketing Consultancy",
    description:
      "Navigate the complexities of modern business with our marketing consultancy services, as we collaborate with you to develop tailored strategies that drive brand success.",
    icon: FaChartLine,
  },
  {
    title: "Web/App Development",
    description:
      "Empowering your digital journey with expert web app development, where innovation converges with sleek design and robust functionality to deliver truly impactful and user-centric online experiences.",
    icon: FaCode,
  },
];

export default Home;
