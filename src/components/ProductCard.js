import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'; // 引入 CSS 文件进行样式设置

const ProductCard = ({ id, image, title, brand, description, price }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (id) {
            navigate(`/product/${id}`);
        } else {
            console.error('Product ID is undefined');
        }
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <h3 className="product-brand">{brand}</h3>
            <p className="product-description">{description}</p>
            <p className="product-price">${Number(price).toFixed(2)}</p> {/* 确保price为数字 */}
        </div>
    );
};

export default ProductCard;