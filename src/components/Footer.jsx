import React from 'react'
import { BsTwitterX, BsInstagram  } from 'react-icons/bs'

import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-white pb-12'>
     <div className='flex justify-between items-center px-8 py-6 border-b-2 border-gray-600'>
      <div className='text-2xl font-bold'>
        <h2>LOGO HERE</h2>
      </div>
      <div className='flex space-x-4'> 
        <FaFacebook className='text-xl cursor-pointer' />
        <BsInstagram className='text-xl cursor-pointer' />
        <BsTwitterX className='text-xl cursor-pointer' />
      </div>
     </div>
     <div className='text-center py-4'>
      <p> <span className='font-bold'>Contact :</span>  9525188548</p>
      <p>visit our website 100% satisfaction</p>
     </div>
    </div>
  )
}

export default Footer
