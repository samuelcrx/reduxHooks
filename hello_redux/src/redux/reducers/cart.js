import { bindActionCreators } from "redux"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/cart"

const initialState = []

const cart = (state = initialState, action) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        return [...state, action.payload]
      case CART_REMOVE_ITEM:
        return [...state].filter((item) => (item.id !== action.payload.id))
      default:
        return state
    }
  }

  export default cart