import  { useState } from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/header';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/create-contact",{
      name,
      email,
      phone,
      message
    })
    // Add logic to handle form submission
    console.log("Form submitted:", { name, email, phone, message });
    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <>
      <Header />
      <div className='container mb-2 mx-auto mt-20'>
        <div className='flex flex-col px-2 md:flex-row justify-center items-center md:justify-between'>
          <div className='w-full md:w-1/3 bg-blue-600 rounded-md p-6 text-white'>
            <div className='text-center mb-4 text-3xl font-semibold'>Let Get in Touch</div>
            <div className='mb-4 text-center'>We are open for any suggestions or just to have a chat</div>
            <div className='flex items-center mb-2'>
              <CiLocationOn className='mr-2' />
              <div>Address: 198 West 21th Street, Suite 721 New York, NY 10016</div>
            </div>
            <div className='flex items-center mb-2'>
              <FaPhoneAlt className='mr-2' />
              <div>Phone: +1235 2355 98</div>
            </div>
            <div className='flex items-center mb-2'>
              <HiOutlineMail className='mr-2' />
              <div>Email: info@yoursite.com</div>
            </div>
            <div className='flex items-center mb-2'>
              <AiOutlineGlobal className='mr-2' />
              <div>Website: yoursite.com</div>
            </div>
          </div>
          <div className='w-full md:w-2/3 px-2 mt-8 md:mt-0'>
            <div className='text-blue-600 text-center font-poppins font-semibold text-4xl mt-2 mb-4'>Get in Touch</div>
            <form onSubmit={handleSubmit} className='w-full max-w-lg mx-auto'>
              <div className='mb-4'>
                <label htmlFor="name" className='block mb-2'>Name</label>
                <input
                  type="text"
                  id="name"
                  className="border-2 rounded-md p-2 w-full"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  type="email"
                  id="email"
                  className="border-2 rounded-md p-2 w-full"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="phone" className='block mb-2'>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="border-2 rounded-md p-2 w-full"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  id="message"
                  className="border-2 rounded-md p-2 w-full"
                  rows="4"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className='flex justify-center'>
              <button type="submit" className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
