import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

const Cart = () => {
    const { state, dispatch } = useCart();

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {state.cart.length > 0 ? (
                state.cart.map((product) => (
                    <div key={product.id} className="cart-item">
                        <img src={product.image_url} alt={product.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h2>{product.name}</h2>
                            <p>${Number(product.price).toFixed(2)} x {product.quantity}</p>  {/* 显示数量 */}
                            <p>Total: ${Number(product.price * product.quantity).toFixed(2)}</p> {/* 显示总价 */}
                            <button className="remove-from-cart-btn" onClick={() => removeFromCart(product.id)}>Remove</button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="empty-cart">Your cart is empty</div>
            )}
        </div>
    );
};

export default Cart;