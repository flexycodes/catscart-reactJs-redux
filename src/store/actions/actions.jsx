import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './types'
   
// Add item to cart
const createAddToCartAction = (productsInfo, quantity) => {
    return {
        type: ADD_TO_CART,
        productsInfo,
        quantity
    }
}

const addToCart = (productsInfo, quantity) => {
    return (dispatch) => {
        dispatch(
            createAddToCartAction(productsInfo, quantity)
        )
    }
}

// Remove item from Cart
const createRemoveFromCartAction = (index) => {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}
const removeFromCart = (index) => {
    return (dispatch) => {
        dispatch(
            createRemoveFromCartAction(index)
        )
    }
}

// Clear Cart
const createClearCartAction = () => {
    return {
        type: CLEAR_CART
    }
}

const clearCart = () => {
    return (dispatch) => {
        dispatch(
            createClearCartAction()
        )
    }
}

export {
    addToCart,
    removeFromCart,
    clearCart
}