import React, { useContext, useState } from 'react'
import { BiCart, BiSearch, BiUser } from 'react-icons/bi'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {quantity, searchProducts } = useContext(ShopContext)

    const [query, setQuery] = useState('')

    const handleSearch = (e) => {
      setQuery(e.target.value)
      searchProducts(e.target.value)
    }
  return (
    <div>
      <div className='navbar flex justify-between items-center px-14 py-6 w-full z-50 transition-all duration-500 bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff]'>
        <Link to='/'>
        <div>
    <h2 className='text-2xl font-semibold text-white'>LOGO HERE</h2>
</div>
        </Link>

<div className='relative search flex items-center'>
    <BiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-black'/>

    <input 
    value={query}
    onChange={handleSearch}
    type='text'
     placeholder='search for Products'
    className='pl-14  bg-white pr-8 py-3 w-140 rounded-full border-2 border-white focus:outline-none'
    />
    </div>

<div className='flex items-center space-x-8'>
 <Link to='/cart' >
    <BiCart className='relative text-3xl text-white'/>
    <span className='absolute top-7 right-27 bg-red-500 text-white text-xs h-4 w-4 flex items-center justify-center rounded-full'>{quantity}</span>
 </Link>
    <BiUser className=' text-3xl text-white'/>
</div>
      </div>
    </div>
  )
}

export default Navbar;
