import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import  productData  from '../data'
import { useParams } from 'react-router-dom'


 const ProductDetails = () => {
  const {addToCart} = useContext(ShopContext)

  const {id} = useParams();

  const product = productData.find((product)=>{
    return product.id === parseInt(id)
  })
  return (
    <div>
      <div className='flex p-20'>
      <div className=' flex-shrink-0 mt-20'>
        <img src={product.image}  alt=''  className='w-[460px]'/>
      </div>
      <div className='pl-16 mt-20'>
        <h3 className='text-3xl font-bold'>{product.title}</h3>
        <p className='text-2xl text-red-500 mt-3'>{product.price}</p>
         <p className='text-lg text-gray-600 mt-4'>{product.description}</p>
         <button onClick={()=> addToCart(product, id)} className='mt-4 px-14 py-4 bg-red-400 text-white rounded hover:bg-red-600'>ADD TO CART</button>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails
