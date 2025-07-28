//import React, { children } from 'react'
import React, { createContext, useEffect, useState } from 'react';
import  productData  from '../data'
import Product from '../components/Product';


export const ShopContext = createContext();


export const ShopContextProvider = ({ children }) => {

  const [products, setProducts] = useState(productData);

  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  const [filteredProducts, setFilteredProducts] = useState(productData)

  const searchProducts =(query) => {
    if(query === ""){
      setFilteredProducts(products);
    }else{
      const filtered = products.filter((products) => products.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    setFilteredProducts(filtered)
    }
  }

  const addToCart = (Product, id) => {
    const newItem = { ...Product, amount: 1 }

    const cartItem = cart.find((item) => {
      return item.id === id
    })

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      });
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price)
      if (isNaN(priceAsNumber)) {
        return accumulator
      }
      return accumulator + priceAsNumber * currentItem.amount
    }, 0)
    setTotal(total)
  }, [cart])

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setQuantity(amount)
    }
  }, [cart])

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id == id
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      if (cartItem.amount < 2) {
        removeFromCart(id)
      }
    }
  }
  return (
    <ShopContext.Provider value={{
      products, setProducts, addToCart, cart, removeFromCart, clearCart, increaseAmount, decreaseAmount,
      quantity, total, searchProducts, filteredProducts
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;