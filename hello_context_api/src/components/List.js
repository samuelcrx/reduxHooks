import React, { useContext, useState } from 'react'
import CartContext from '../contexts/cart/cart'

const List = () => {
    const [name, setName] = useState('')
    const {addItem, items, removeItem} = useContext(CartContext)

    const handleName = (value) => {
        addItem({name: value})
        setName('')
    }

    return (
    <>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => handleName(name)}>Adicionar</button>
        <ul>
            {items.map(item => (
                <li>{item.name}
                    <button onClick={() => removeItem(item)}>Remover</button>
                </li>
            ))}
        </ul>
    </>
    )
}

export default List 