import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { CartProvider } from './contexts/cart'

function App() {

  return (
    <div className="App">
      <CartProvider>
        <List />
      </CartProvider>
    </div>
  );
}

export default App;
