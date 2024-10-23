import React from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate hook
import { assets } from '../assets/assets'

const Banner = () => {
  const navigate = useNavigate()  // Initialize the useNavigate hook

  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      {/* ............Left Side ............. */}
    <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-x1 sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
        <p>Book Appointment</p>
        <p className='mt-4'>With 100+ Trusted Doctors </p>
        </div>
        {/* Navigate to the login page and scroll to the top */}
        <button
        onClick={() => {
            navigate('/login');  // Correct way to navigate
            window.scrollTo(0, 0);  // Scroll to the top of the page
        }}
        className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'
        >
        Create Account
        </button>
    </div>

      {/* ............Right Side ............. */}
    <div className='hidden md:block md:w-1/2 lg:w-[-370] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
    </div>
    </div>
)
}

export default Banner
