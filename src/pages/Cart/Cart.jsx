import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import CartDetails from './CartDetails'

const Cart = () => {
  const { cart, clearCart, total, quantity } = useContext(ShopContext);

  return (
    <div className="flex justify-between p-5">
{/* Left Side - Cart Items */}
      <div className="w-2/3 bg-white p-5 mt-5">
        <div className='flex justify-between font-bold'>
          <h1 className="flex justify-between font-bold">SHOPPING CART</h1>
          <h1 className="text-gray-600 flex justify-between ">Items:{quantity}</h1>
          <FiTrash2 onClick={clearCart}
            className="text-2xl cursor-pointer flex justify-between "  title='Clear Cart'/>

        </div>
        <div className="flex justify-between font-bold mt-5">
          <span>Product Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>total</span>
        </div>
        <div className='mt-5'>
          {
            cart.length > 0 ? (
              cart.map((item) =><CartDetails item={item} key={item.id} />)
            ) : (
              <p className="text-gray-500 mt-10">Your cart is currently empty</p>
            )
            }
       </div>
      </div>
      <div className='w-1/3 bg-gray-100 p-5 rounded-lg mt-5'>
        <h2 className='text-lg font-bold mb-5'>Cart Summary</h2>
        <div className='flex justify-between'>
          <span>Items: </span>
          <span>{quantity} </span>
        </div>
        <div className='mb-5'>
          <div className='flex justify-between mb-2'>
            <span>Subtotal</span>
            <span>${isNaN(total) ? 0 : total} </span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>Shipping Fee</span>
            <span> Free</span>
          </div>
          <div className='flex justify-between font-bold text-lg mt-3'>
            <span>Total Cost</span>
            <span>${isNaN(total) ? 0 : total} </span>
          </div>
          <button className='w-full bg-blue-500 text-white py-3 rounded-lg mt-5 hover:bg-blue-600'>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
