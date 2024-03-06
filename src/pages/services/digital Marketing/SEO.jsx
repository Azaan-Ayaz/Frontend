import React from "react";
import Header from "../../../Layout/header";
import Footer from "../../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Layout/navbar";

const SEO = () => {
  const navigate = useNavigate();

  const eventHandler = () => {
    navigate("/contact");
  };

  return (
    <>
      <div>
        <Navbar />
        <>
          <div>
            <div className="md:flex gap-2/3 mb-3 mt-8 md:mt-36  ">
              <div className="flex justify-start text-black font-poppins w-4/5">
                <div className="text-2xl font-semibold md:text-7xl md:mt-16 ml-6">
                  "Optimize, Rank, Succeed: Your{" "}
                  <span className="text-blue-500">SEO Journey</span> Starts
                  Here"
                </div>
              </div>
              <div className="md:flex hidden gap-1/3 w-4/5 justify-end">
                <div className="flex justify-end mr-9 space-x-4">
                  {/* <div className="w-2/5 flex flex-col md:mt-16 mt-1  justify-end"> */}
                  <div className="w-2/5 flex flex-col md:mt-16 mt-1 justify-end">
                    <div className="mb-4">
                      <img
                        src="seo5.jpg"
                        alt="SEO 5"
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="seo4.jpg"
                        alt="SEO 4"
                        className="w-5/6 rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="w-2/5 flex flex-col">
                    <div className="mb-4">
                      <img
                        src="seo6.jpg"
                        alt="SEO 6"
                        className="w-auto rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="seo7.jpg"
                        alt="SEO 7"
                        className="w-5/6 rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-8">
              <hr className="border-gray-800 w-2/4 " />
            </div>
            <div className="my-8">
              <div className="flex flex-col md:flex-row justify-around gap-x-6">
                <div className="w-full px-1 md:pl-6">
                  <div className="text-blue-600 tracking-tight font-poppins font-semibold text-2xl md:text-4xl">
                    Worried about the growth of your website’s digital presence?
                  </div>
                  <div className="w-1/2 md:flex hidden ml-16">
                    <img src="Question.png" alt="Worry Man" />
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className="w-full mt-5">
                  <div className="flex justify-start">
                  <div className="md:w-full md:h-96 w-80 md:mx-0 mx-4 h-[550px] bg-gray-300 p-4 relative z-0 ">
                    <div className="w-full p-2 h-full bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600 absolute top-4 left-4">
                      <p className="font-semibold mb-2 md:text-2xl text-white text-2xl font-poppins">
                        Don’t worry{" "}
                        <span className="text-2xl md:text-3xl underline">
                          Nectronix Digital
                        </span>
                        {""} Search Engine Optimization (SEO) team has you
                        covered
                      </p>
                      <div className="text-white tracking-tight font-poppins md:text-xl  text-xl">
                      <p>
                        We are aware that no one size fits all approach to SEO.
                        At Nectronix Digital, our team creates a customized SEO
                        plan designed just for your company using our expert
                        analysis and your firm’s particular demands, industry,
                        present SEO performance, and goals. Contact us
                        immediately if you’re prepared to develop your unique,
                        revenue-generating SEO approach.
                      </p>
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center  overflow-x-auto">
              <div className="flex justify-center">
                <div className=" mt-12 ">
                  <table className="border md:w-[1200px]  border-gray-300">
                    <thead className="h-5 bg-blue-600">
                      <tr className="h-3">
                        {/* <th className="border border-gray-300"></th> */}
                        <th className="border  border-gray-300 text-white">
                          Direct
                        </th>
                        <th className="border  border-gray-300 text-white">
                          Express
                        </th>
                        <th className="border border-gray-300 text-white">
                          Turbo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {/* <td className="border border-gray-300">$1,499</td> */}
                        <td className="border text-center font-semibold border-gray-300">
                          $1,499
                        </td>
                        <td className="border text-center font-semibold border-gray-300">
                          $2,499
                        </td>
                        <td className="border text-center font-semibold border-gray-300">
                          $3,499
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ Keyword Research (50-100 Keywords)
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Keyword Research (200-300 Keywords)
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Keyword Research (300-500 Keywords)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ Analytics Setup & Configuration
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Analytics Setup & Configuration
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Analytics Setup & Configuration
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ Monthly Strategy Discussion
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Monthly Strategy Discussion
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Monthly Strategy Discussion
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ Internal Link Building (Crosslinking)
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Internal Link Building (Crosslinking)
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Internal Link Building (Crosslinking)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ Content Editing & Optimization
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Content Editing & Optimization
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Content Editing & Optimization
                        </td>
                        {/* <td className="border border-gray-300">✔️ Internal Link Building (Crosslinking)</td> */}
                        {/* <td className="border border-gray-300">✔️ Internal Link Building (Crosslinking)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ Basic On-Site Optimization
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Basic On-Site Optimization
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Advanced On-Site Optimization
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ Monthly Custom Report
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Monthly Custom Report
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Bi-Weekly Custom Report
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ Monthly Review Call
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Bi-Weekly Review Call
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Weekly Review Call
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ 1 Blog Post (400 words each)
                        </td>
                        <td className="border border-gray-300">
                          ✔️ 2 Blog Post (400 words each)
                        </td>
                        <td className="border border-gray-300">
                          ✔️ 3 Blog Post (400 words each)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ✔️ Image Alter Tags (1 page)
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Image Alter Tags (2 page)
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Image Alter Tags (4 page)
                        </td>
                        {/* <td className="border border-gray-300">✔️ Target Audience Identification</td> */}
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ❌ Competitor Analysis
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Target Audience Identification
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Target Audience Identification
                        </td>
                        {/* <td className="border border-gray-300"> Image Alter Tags (2 page)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ❌ Dedicated Resources
                        </td>
                        <td className="border border-gray-300">
                          ❌ Dedicated Resources
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Dedicated Resources
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ❌ Keyword Density Customization
                        </td>
                        <td className="border border-gray-300">
                          ❌ Keyword Density Customization
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Keyword Density Customization
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300">
                          ❌ A/B Testing
                        </td>
                        <td className="border border-gray-300">
                          ❌ A/B Testing
                        </td>
                        <td className="border border-gray-300">
                          ✔️ Competitor Analysis
                        </td>
                      </tr>
                      {/* <tr>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </tr> */}
                    </tbody>
                  </table>
                  <div className="flex justify-evenly gap-24 mt-4">
                    <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                      Learn More
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ml-4">
                      Learn More
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ml-4">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='flex gap-1/2 justify-around mx-16 mb-12 mt-36'> */}
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto mt-8 md:mt-36 mb-12 px-4 md:px-0">
  <img
    src="seo (2).png"
    alt="avatar"
    className="w-full md:w-96 h-auto mb-4 md:mb-0 md:mr-12 rounded-lg"
  />
  <div className="flex flex-col justify-center items-start md:items-center">
    <div className="font-poppins text-left mb-4 md:text-center">
      1) All prices are in USD and are on a monthly basis.
    </div>
    <div className="font-poppins text-left mb-4 md:text-center">
      2) We initially sign a contract for a minimum of 6 months.
    </div>
    <div className="font-poppins text-left md:text-center">
      3) Every plan includes a basic Brand Audit.
    </div>
  </div>
</div>

            <div className="text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-800 tracking-tighter font-semibold mx-4 md:mx-16 lg:mx-24 mb-8">
              At Techsol Solutions, we perform an in-depth analysis of a
              website's search engine optimization results, known as an SEO
              audit. Consider it as a medical check-up for the well-being of
              your website. Our SEO audit team checks your website's technical
              setup, content quality, and search engine exposure like a doctor
              would assess your physical health. The audit's goal is to find any
              problems that can prevent your website from showing up highly on
              search engine results pages (SERPs).
            </div>
            <div className="mb-12 mt-12 text-center">
              <h2 className="md:text-4xl text-2xl md:mx-4 mx-4 font-bold text-blue-600 mb-4">
                So, are you ready to outrank your competitors' websites?
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                Let's start your journey towards better search engine rankings
                today.
              </p>
            </div>
            <div className="flex flex-col mb-9 items-center">
              <p className="text-lg font-semibold  mb-2">Get started now:</p>
              <button
                className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded"
                onClick={eventHandler}
              >
                Contact Us
              </button>
            </div>
          </div>
        </>
        <Footer />
      </div>
    </>
  );
};

export default SEO;
