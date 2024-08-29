// src/components/ProductCard.js

import React from 'react';
import './productCards.css'; // 引入 CSS 文件进行样式设置

const ProductCard = ({ image, title, brand, description, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <h3 className="product-brand">{brand}</h3>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;