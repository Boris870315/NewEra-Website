// src/contexts/CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    cart: []
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.cart.findIndex(
                item => item.id === action.payload.id
            );

            if (existingProductIndex >= 0) {
                const newCart = [...state.cart];
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex],
                    quantity: newCart[existingProductIndex].quantity + action.payload.quantity
                };
                return {
                    ...state,
                    cart: newCart
                };
            }

            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);