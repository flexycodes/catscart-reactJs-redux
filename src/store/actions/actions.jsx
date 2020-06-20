import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './types'

const addToCart = (productsInfo, quantity) => {
    return {
        type: ADD_TO_CART,
        productsInfo,
        quantity
    }
}

const removeFromCart = (index) => {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}

const clearCart = () => {
    console.log(CLEAR_CART);
    return {
        type: CLEAR_CART
    }
}

export {
    addToCart,
    removeFromCart,
    clearCart
}