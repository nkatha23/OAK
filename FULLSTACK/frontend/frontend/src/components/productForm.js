import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the data to the backend
    axios.post('http://localhost:5000/api/products', { name, price, quantity })
      .then(response => {
        alert('Product added successfully!');
        setName('');
        setPrice('');
        setQuantity('');
      })
      .catch(error => {
        console.error('There was an error adding the product!', error);
      });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}



export default ProductForm;
