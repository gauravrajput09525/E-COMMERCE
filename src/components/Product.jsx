import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { BiCartAdd } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Product = () => {
  const { filteredProducts, addToCart } = useContext(ShopContext);
  
  return (
    <>
      <div className='mt-10'>
        <h1 className=' text-center text-4xl font-bold'>Our Collection</h1>
      </div>
      <div className=' grid grid-cols-5 gap-5 p-12'>
        {filteredProducts.map((product) => {
            const { id, image, title, price } = product;
            return (
              <div key={id} className='relative overflow-hidden border border-gray-300 p-4 text-center shadow transition hover:shadow-xl 
                            hover:scale-[102%]'>
                <div className=' relative'>
                  <img src={image} alt='' className='w-full h-64 transition-transform duration-300 hover:scale-100' />

                  <div className='absolute top-1/2 flex  gap-1 opacity-0 transition-opacity duration-300 hover:opacity-100'>
                    <button className='bg-red-500 text-white p-2 rounded-full transition-colors duration-300 hover:bg-red-600 flex items-center justify-center ml-10'>
                      <BiCartAdd  onClick={()=> addToCart(product, id)} className='text-xl ' />
                      </button>

                   <Link to={`/product/${product.id}`}>
                    <button className='bg-red-500 text-white p-2 rounded-full transition-colors duration-300 hover:bg-red-600 flex items-center justify-center ml-10'>
                      <FaEye  className='text-xl '/>
                      </button>
                   </Link>

                  </div>
                </div>
                <div className='mt-4'>
                  <h3 className='text-md font-bold'>{title}</h3>
                  <p className='text-red-500 text-2xl'>₹{price}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default Product
