import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // 确保引用路径正确
import './Shop.css'; // 确保引入样式文件

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:5001/api/products';
        
        if (category) {
          url = `http://localhost:5001/api/searchProductsByCategory?category=${category}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="app">
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'Shop'}</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image_url}
              title={product.name}
              brand={product.brand}
              description={product.description}
              price={product.price}
            />
          ))
        ) : (
          <p className="coming-soon">敬請期待 (Coming Soon)</p>
        )}
      </div>
    </div>
  );
};

export default Shop;