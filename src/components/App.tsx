import React from 'react';
import './App.css';
import Shop from './Shop.tsx';

import ProductService from '../servises/ProductService.ts'

function App() {
  ProductService.getProduct(44)
  return (
    <div className="App">
      <Shop/>
    </div>
  );
}

export default App;
