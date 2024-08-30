import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailProducts.css'; // 用于样式设置

const DetailProducts = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log("try to connect database")
                const response = await fetch(`http://localhost:5001/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [id]);

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
        </div>
    );
};

export default DetailProducts;