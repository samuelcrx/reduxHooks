import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { addItem, removeItem } from './redux/actions/cart'

function App(props) {
  const [name, setName] = useState('')

  const handleName = (value) => {
    props.addItem({name: value})
    setName('')
  }

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => handleName(name)}>Adicionar</button>
      <ul>
        {props.cart.map(item => (
            <li>{item.name}<button onClick={() => props.removeItem(item)}>Remover</button></li>
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = { addItem, removeItem }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
