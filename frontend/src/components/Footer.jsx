import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faWhatsapp, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 cursor-pointer'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
        {/* .......Left Side......... */}
        <div className='mb-5 w-45'>
          <img src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 mt-2 text-gray-600 leading-6'>
            Disclaimer:<br />
            The content on this website is for informational purposes only and does not substitute professional medical advice,
            diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions 
            you may have regarding a medical condition.
          </p>
        </div>

        {/* .......Center Side......... */}
        <div className='mt-3'>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* .......Right Side......... */}
        <div className='mt-3'>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-blue-400  hover:text-blue-900 transition-colors" />
              +91 8088521583
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400 hover:text-blue-900 transition-colors" />
              nikhileshks09@gmail.com
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className='flex gap-4 mt-4'>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" className="text-blue-400 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500 hover:text-green-700 transition-colors" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600 hover:text-blue-800 transition-colors" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-400 hover:text-pink-800 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/*.............CopyRight........ */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @MyDoctors - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
