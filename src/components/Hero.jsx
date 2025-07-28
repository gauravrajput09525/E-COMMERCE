import React from 'react'
import New_Hero_image from '../assets/New_Hero_image.png';

const Hero = () => {
  return (
    <div>
      <div className='grid w-full place-items-center bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff]'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold mt-20 text-white'>Step Into The Future With Our Collection</h1>
          <p className='text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, similique!</p>
          <div className='justify-center mt-4'>
            <button className='px-10 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-sky-500 hover:text-white'>View Collection</button>
          </div>
          <img src={New_Hero_image} className='w-{790px} h-{400px}  ml-40 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]' alt='Hero image'/>
        </div>
      </div>

    </div>
  )
}

export default Hero;
