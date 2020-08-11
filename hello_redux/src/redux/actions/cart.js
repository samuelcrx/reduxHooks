import { v4 as uuidv4 } from 'uuid';
export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'

export const addItem = (product) => {
    return {
        type: CART_ADD_ITEM,
        payload: {...product, id: uuidv4()}
    }
}

export const removeItem = (product) => {
    console.log(product)
    return  {
        type: CART_REMOVE_ITEM,
        payload: product
    }
}