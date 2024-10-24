/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext' // Ensure AppContext is correctly imported
import { doctors } from '../assets/assets'

const Doctor = () => {
  const { speciality } = useParams() // Extracting the speciality from the URL params
  const { doctors } = useContext(AppContext) // Getting doctors from context
  const navigate = useNavigate()
  const [filterDoc,setFilterDoc] = useState([])

  const applyfliter = () =>{
    if(speciality) {
    setFilterDoc(doctors.filter(doc =>doc.speciality=== speciality))
  } else {
    setFilterDoc(doctors)
  }
}

useEffect(()=>{
  applyfliter()
},[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors speciality.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-x-gray-600 rounded transition-all cursor-pointer  hover:bg-blue-200'}>General physician</p>
          <p className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-x-gray-600 rounded transition-all cursor-pointer  hover:bg-blue-200'}>Gynecologist</p>
          <p className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-x-gray-600 rounded transition-all cursor-pointer  hover:bg-blue-200'}>Dermatologist</p>
          <p className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-x-gray-600 rounded transition-all cursor-pointer  hover:bg-blue-200'}>Pediatricians</p>
          <p className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-x-gray-600 rounded transition-all cursor-pointer  hover:bg-blue-200'}>Neurologist</p>
          <p className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-x-gray-600 rounded transition-all cursor-pointer  hover:bg-blue-200'}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-7'>
          {
            filterDoc.map((item, index) => (
              <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={item.id || index}
              >
              <img className='bg-blue-50' src={item.image} alt={`Doctor ${item.name}`} />
              <div className='p-4'>
                  <div className='flex items-center'>
                      <span className='w-2 h-2 bg-green-600 rounded-full mr-2'></span>
                      <p className='text-green-600 text-sm'>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-800 text-sm'>{item.speciality}</p>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctor
1