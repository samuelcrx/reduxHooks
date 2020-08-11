import React, { useState, Children } from 'react';
import CartContext from './cart'

const Provider = ({ children }) => {
  const [items, setItems] = useState([])

  const addItem = (value) => {
    setItems(items => ([...items, value]))
  }

  const removeItem = value => {setItems([...items].filter(item => item !== value))}

  return (
      <CartContext.Provider value={{items, addItem, removeItem}}>
        {children}
      </CartContext.Provider>
  )
}

export default Provider;
