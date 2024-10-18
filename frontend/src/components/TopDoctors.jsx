import React from 'react';
import { doctors } from '../assets/assets';

const TopDoctors = () => {
    return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
    <h1 className='text-3xl'>Top Doctors to Book</h1>
    <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>
    <div className='w-full grid grid-cols-auto gap-4 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
        <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={item.id || index}>
            <img src={item.image} alt={`Doctor ${item.name}`} />
            <div className='p-4'>
                <p className='text-sm text-green-600'>Available</p>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-gray-600'>{item.speciality}</p>
            </div>
        </div>
        ))}
    </div>
    <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
        More
    </button>
    </div>
  )
}

export default TopDoctors
