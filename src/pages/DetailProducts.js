// src/pages/DetailProducts.js

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './DetailProducts.css'; // 用于样式设置

const DetailProducts = () => {
    const { id } = useParams();
    const { state, dispatch } = useCart();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        alert(`${product.name} has been added to your cart`);
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-details">
            <img src={product.image_url} alt={product.name} className="product-image" />
            <h1>{product.name}</h1>
            <h2>{product.brand}</h2>
            <p>{product.description}</p>
            <p>${Number(product.price).toFixed(2)}</p>
            <p>Stock: {product.stock}</p>
            <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default DetailProducts;