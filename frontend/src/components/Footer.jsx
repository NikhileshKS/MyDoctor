import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 cursor-pointer'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* .......Left Side......... */}
            <div className='mb-5 w-45'>
                <img src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 mt-2 text-gray-600 leading-6'>Disclaimer:<br/>
                The content on this website is for informational purposes only and does not substitute professional medical advice,
                diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions 
                you may have regarding a medical condition.</p>
            </div>

            {/* .......Right Side......... */}
            <div>
              <p className='text--xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us </li>
                <li>Contant us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* .......Right Side......... */}
            <div>
              <p className='text--xl font-medium mb-5'>GET IN TOUCH</p>
              <ul  className='flex flex-col gap-2 text-gray-600'>
                <li>+91 8088521583</li>
                <li>nikhileshks09@gmail.com</li>
              </ul>
            </div>
        </div>
        {/*.............CopyRight........ */}
        <div>
          <hr/>
          <p className='py-5 text-sm text-center'>Copyright 2024 @MyDoctors -All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer