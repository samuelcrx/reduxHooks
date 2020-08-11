import { createStore } from 'redux'
import reducer from '../reducers'

// A criação da Store precisa do reducer "como argumento"
export default createStore(reducer)