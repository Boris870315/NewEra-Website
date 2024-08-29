// src/pages/Shop.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/productCards';

const Shop = () => {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

  return (
     <div className="app">
      <h1>Shop</h1>

            {products.map(product => (
                <ProductCard
                    key={product.id}
                    image={product.image_url}
                    title={product.name}
                    brand={product.brand}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
  );
};

export default Shop;