import React from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";

const AppDevelopment = () => {
  const navigate = useNavigate();
  const eventHandler = () => {
    navigate("/contact");
  };
  return (
    <>
    <Header/>
      <div className="   z-0">
        <div className="md:mt-20">
        <div className="flex flex-col md:flex-row mb-8 md:mb-10 mt-5 gap-5 justify-center mx-4 md:mx-20">
            <div className="w-full md:w-3/5">
              <div className="text-xl md:text-3xl lg:text-5xl font-orbitron font-semibold text-center md:text-left text-gray-800 leading-normal md:leading-relaxed">
                Unlock the{" "}
                <span className="text-blue-600 md:text-4xl lg:text-6xl font-semibold">
                  Power of Mobile
                </span>{" "}
                with Our Custom App Solutions
              </div>
            </div>
            <div className="w-full md:w-2/5 flex justify-center">
              <img src="mob.jpg" alt="App Development" className="w-full md:max-w-md" />
            </div>
          </div>
          <div className="bg-gray-100 shadow-md mb-5 p-3 mx-4 md:mx-20">
            <div className="flex justify-between md:flex-row flex-col gap-16 items-center my-5">
              <div className="w-full md:w-1/3 bg-blue-600 p-2 rounded">
                <div>
                  <h2 className="text-xl font-poppins font-semibold text-white mb-4">
                    Is your business missing out on an App?
                  </h2>
                  <div className="text-xl font-poppins font-semibold text-white mb-4">
                    Are you looking to enhance the digital presence of your
                    business?
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 flex justify-center md:mt-0">
                <p className="text-gray-800 text-lg md:text-xl font-semibold">
                  Look no further than{" "}
                  <span className="text-blue-600 text-lg md:text-2xl font-bold underline">
                    NECTRONIX DIGITAL!
                  </span>{" "}
                  We specialize in top-notch app development services that cater
                  to all your needs. Whether you need an app built with Flutter,
                  React Native, or require custom app development, our team of
                  experts has got you covered. Businesses with mobile apps cater
                  to a bigger audience and our able to gain a competitive edge
                  over their competitors.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-16">
            <div className="w-full md:w-2/3">
              <div className="text-2xl md:text-4xl font-semibold text-center md:text-left">
                Why Choose{" "}
                <span className="text-blue-600 md:text-blue-600 underline font-orbitron md:text-4xl text-2xl  font-bold">
                  NECTRONIX DIGITAL
                </span>{" "}
                for App Development Services?
              </div>
            </div>
            <div className=" md:w-1/2 flex justify-center mt-4 md:mt-0">
              <img src="chose.png" alt="" className="hidden md:block" />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <hr className="border-6 border-solid border-gray-800 my-5 w-1/3" />
            </div>
            <div className="mt-2 flex flex-col md:flex-row mx-4 md:mx-16 justify-between items-center p-2 ">
              <div className="w-full md:w-1/2 mx-4 mb-4 md:mb-0 md:mr-4">
                <div className="text-xl md:text-2xl lg:text-3xl font-poppins font-semibold text-blue-600 mb-2">
                  Expertise in Flutter
                </div>
                <div className="text-base md:text-lg text-gray-800 tracking-tight">
                  Our skilled developers are well-versed in Flutter, a popular
                  cross-platform framework. With Flutter, we can create visually
                  appealing and highly functional apps that work seamlessly
                  across various platforms.
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img
                  src="Fluuter.png"
                  alt="flutter Development"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="border-6 border-solid border-orange-500 my-5 w-1/3" />
            </div>
          </div>
          <div>
            <div className="mt-2 flex flex-col-reverse md:flex-row justify-between items-center p-2 mx-4 md:mx-auto md:max-w-screen-lg">
              <div className="w-full md:w-1/3 md:ml-6 mb-4 md:mb-0">
                <img
                  src="mobile.png"
                  alt="react Native Development"
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-1/2 mx-4">
                <div className="text-lg md:text-xl lg:text-2xl font-poppins text-blue-600 font-semibold mb-2">
                  Mastering React Native
                </div>
                <div className="text-base md:text-lg text-gray-800 tracking-tight">
                  React Native is another powerful framework we excel in. Being
                  a preferred choice for many developers, React Native allows us
                  to develop efficient and scalable apps that run smoothly on
                  both iOS and Android platforms.
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="border-6 border-solid border-orange-500 my-5 w-1/3 md:w-1/4" />
            </div>
          </div>
          <div>
            <div className="mt-2 flex flex-col md:flex-row justify-between items-center p-2 mx-4 md:mx-auto md:max-w-screen-lg">
              <div className="w-full md:w-1/2 md:ml-6 mx-4 mb-4 md:mb-0">
                <div className="text-lg md:text-xl lg:text-2xl text-blue-600 font-poppins font-semibold mb-2">
                  Custom App Development
                </div>
                <div className="text-base md:text-lg text-gray-800 tracking-tight">
                  At Techsol Solutions, we understand that each business has
                  unique requirements. Our custom app development services
                  ensure that we craft tailor-made solutions that align with
                  your specific business objectives. From concept to execution,
                  we work collaboratively with you to bring your vision to life.
                </div>
              </div>
              <div className="w-full md:w-1/3 mr-6">
                <img
                  src="Mobileee.png"
                  alt="Custom Development"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="border-6 border-solid border-orange-500 my-5 w-1/3" />
            </div>
          </div>
          <div className="mt-2 flex flex-col-reverse md:flex-row justify-between items-center p-2 mx-4 md:mx-auto md:max-w-screen-lg">
            <div className="w-full md:w-1/3 ml-6 mb-4 md:mb-0">
              <img
                src="integrationn.png"
                alt="Seamless Integration"
                className="w-full"
              />
            </div>
            <div className="w-full md:w-1/2 mx-4">
              <div className="text-lg md:text-xl text-blue-600 font-poppins font-semibold mb-2">
                Seamless Integration
              </div>
              <div className="text-base md:text-lg text-gray-800 tracking-tight">
                We ensure seamless integration of your app with existing systems
                and third-party APIs. This allows for a seamless user experience
                and ensures your app performs optimally.
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="border-6 border-solid border-orange-500 my-5 w-1/3" />
          </div>
          <div>
            <div className="mt-2 flex flex-col md:flex-row justify-between items-center p-2 mx-4 md:mx-auto md:max-w-screen-lg">
              <div className="w-full md:w-1/2 mx-4 mb-4 md:mb-0">
                <div className="text-lg md:text-xl text-blue-600 font-poppins font-semibold mb-2">
                  User-Centric Design
                </div>
                <div className="text-base md:text-lg text-gray-700 tracking-tight">
                  We prioritize user experience and design stunning interfaces
                  that engage and delight users. Our intuitive designs ensure
                  smooth navigation and enhance usability, giving your app a
                  competitive edge.
                </div>
              </div>
              <div className="w-full md:w-1/3 mr-10">
                <img
                  src="conmob.png"
                  alt="User Centric Design"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="border-6 border-solid border-orange-500 my-5 w-1/3" />
            </div>
          </div>
          <div className="mt-2 flex flex-col-reverse md:flex-row justify-between items-center p-2 mx-4 md:mx-auto md:max-w-screen-lg">
            <div className="w-full md:w-1/2">
              <img
                src="sqa.png"
                alt="WordPress Development"
                className="w-full"
              />
            </div>
            <div className="w-full md:w-1/2 mx-4 mb-8 md:mb-0">
              <div className="text-xl md:text-3xl font-semibold text-blue-600 mb-2">
                Quality Assurance and Testing
              </div>
              <div className="text-base md:text-lg text-gray-800 tracking-tight">
                Before deploying your app, we conduct rigorous quality assurance
                and testing to ensure it meets the highest standards of
                functionality, performance, and security. We are dedicated to
                delivering reliable and bug-free apps to our clients.
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200 shadow-lg ">
            <div className="flex flex-col md:flex-row justify-between items-center md:mx-16 md:mt-4 md:mb-4 ">
              <img
                src="seo2.png"
                alt="avatar"
                className="w-full md:flex hidden md:w-96 h-96"
              />
              <div className="w-4/5 flex md:flex-col flex-col justify-center md:w-3/5">
              <div className="p-3 text-white md:font-semibold text-xl md:text-3xl font-orbitron">
                Partner with <span className="text-2xl">NECTRONIX DIGITAL</span>{" "}
                for App Development Excellence
              </div>
              <div className="text-white-500 text-lg font-medium md:p-2">
                At Nectronix Digital, we are committed to delivering exceptional
                app development services. Our team of skilled professionals
                focuses on creating innovative solutions tailored to your
                business needs. Whether you are a small startup or a large
                enterprise, we have the expertise to turn your app ideas into
                reality.
              </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              Don't miss out on the opportunities that mobile applications can
              bring to your business!
            </p>
            <p className="text-base md:text-lg font-semibold text-gray-800 mt-4">
              Contact Techsol Solutions today to discuss your app development
              requirements and take your business to new heights with our
              cutting-edge solutions.
            </p>
            <div className="flex justify-center mt-4 md:mt-6">
              <button
                className="bg-blue-600 hover:bg-orange-600 font-semibold text-white px-6 md:px-8 py-3 md:py-4 rounded-md"
                onClick={eventHandler}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppDevelopment;
