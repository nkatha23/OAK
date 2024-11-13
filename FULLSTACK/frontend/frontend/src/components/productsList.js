import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Tomatoes', price: '$3 per kg', image: '/assets/images/product1.jpg' },
  { id: 2, name: 'Green Beans', price: '$2 per kg', image: '/assets/images/product2.jpg' },
  { id: 3, name: 'Potatoes', price: '$1 per kg', image: '/assets/images/product3.jpg' },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
