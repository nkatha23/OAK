import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/productForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the Farm Products Store</h1>
      <ProductList />
      <ProductForm />
    </div>
  );
}

export default App;
