import React from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/Footer";

const MarketingConsultancy = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between mt-16 mb-5">
          <div className="md:ml-6 mt-4">
            <div className="md:text-5xl text-3xl text-black font-poppins font-semibold">
              <div className="md:text-7xl text-4xl text-blue-600 mb-2 font-bold">
                Nectronix Digital
              </div>
              <p className="font-semibold">Where Creativity Meets Strategy.</p>
            </div>
          </div>
          <div className="w-1/2 hidden md:flex">
            <img src="AD1.png" alt="Marketig Consultancy" />
          </div>
        </div>
        <div className="bg-gray-100 flex md:flex-row flex-col-reverse justify-between mt-3 shadow-md mb-5 p-3">
          <div className="hidden md:flex md:w-1/3">
            <img src="Question.png" alt="" />
          </div>
          <div className="flex w-4/5 justify-between md:mx-20 items-center my-5">
            <div className="md:w-full w-64 md:mx-0 mx-4 h-56 bg-gray-300 p-4 relative z-0">
              <div className="w-full h-full md-p-5 p-2 md:items-center bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600 absolute top-4 left-4">
                <div className="md:text-3xl text-xl text-white md:text-left text-center font-semibold font-poppins mb-4">
                  Do you want to boost your revenue but don't know how?
                </div>
                <div className="md:text-3xl text-xl text-white md:text-left text-center font-semibold font-poppins">
                  Are you looking to elevate your brand to the next level?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            You can breathe easy knowing that Nectronix Digital has got your back!
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            We are a dedicated team of experts, ready to help you take your business to the next level. Whether you're an established brand looking to expand your reach or a new startup in need of guidance, our comprehensive range of services will support you every step of the way.
          </p>
          <div className="md:mb-2 mb-2">
            <div className="flex md:flex-row md:gap-2 flex-col mb-8 md:mx-2">
              <div className="">
                <h3 className="text-2xl font-semibold font-poppins text-blue-600">
                  Planning and Strategizing:
                </h3>
                <p className="text-base md:text-xl font-medium text-gray-800 tracking-tighter md:mb-8">
                  Our experienced consultants will work closely with you to develop a tailor-made marketing strategy that aligns with your business goals. We analyze market trends, competitor activity, and consumer behavior to ensure you have a solid plan in place to maximize your brand's potential.
                </p>
              </div>
              <div className="md:w-11/12">
                <img src="plan.jpg" alt="" />
              </div>
            </div>
            <div className="flex md:flex-row md:gap-2 flex-col-reverse mb-8 md:mx-2">
              <div className="md:w-11/12">
                <img src="imp.jpg" alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-poppins text-blue-600">
                  Implementation:
                </h3>
                <p className="text-base md:text-xl font-medium text-gray-800 md:mb-8 tracking-tighter">
                  Once the strategy is in place, we roll up our sleeves and get to work. Our team is well-versed in executing effective marketing campaigns across various digital platforms and traditional channels. From social media management to search engine optimization, we have the skills to take your brand to new heights.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row md:gap-2 flex-col mb-8 mx-2">
              <div>
                <h3 className="text-2xl font-semibold font-poppins text-blue-600">
                  Brand Audit:
                </h3>
                <p className="text-base font-medium md:text-xl text-gray-800 tracking-tighter">
                  Is your brand conveying the right message? Our brand audit service will analyze every aspect of your brand's identity, from your logo and visual assets to your messaging and tone of voice. We identify areas for improvement and provide actionable recommendations to strengthen your brand's presence in the marketplace.
                </p>
              </div>
              <div className="md:w-11/12">
                <img src="audit.jpg" alt="" />
              </div>
            </div>
            <div className="flex md:flex-row md:gap-2 flex-col-reverse mb-8 md:mx-2">
              <div className="md:w-11/12 w-1/12 mt-1">
                <img src="build.jpg" alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-poppins text-blue-600">
                  Brand Building:
                </h3>
                <p className="text-base font-medium text-gray-800 md:text-xl tracking-tighter">
                  Building a strong brand is essential in today's competitive landscape. We help you craft a unique brand identity that resonates with your target audience. Our team assists in brand positioning, messaging development, and creating a memorable brand experience that sets you apart from the competition.
                </p>
              </div>
            </div>
          </div>
          <div className="md:text-left text-center">
            <p className="text-lg text-gray-800 mb-8">
              At Nectronix Digital, we are passionate about driving results. We believe in the power of data-driven insights, creative thinking, and seamless execution. Partner with us and let us be the catalyst for your marketing success.
            </p>
          </div>
          <p className="text-lg text-center text-gray-800 mb-8">
            Contact us today to schedule a free consultation and let's start transforming your brand together!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketingConsultancy;
