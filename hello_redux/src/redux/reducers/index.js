import { combineReducers } from 'redux'
import cart from './cart'

// É necessário combinar todos os "reducers" dentro de uma função para poder passar para a Store
export default combineReducers({cart})