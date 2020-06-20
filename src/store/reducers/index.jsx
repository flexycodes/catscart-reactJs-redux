
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/types";

const cartReducer = (state, action) => {

    switch(action.type) {
        case ADD_TO_CART: {
            return {
                cartProducts: [
                    ...state.cartProducts,
                    {
                        product: action.productsInfo,
                        quantity: action.quantity
                    }
                ],
                shipping: 90
            }
        }
        case REMOVE_FROM_CART: {
            const item_index = action.index;
            const new_state = {...state};

            new_state.cartProducts.splice(item_index, 1) 

            return new_state
        }
        case CLEAR_CART: {
            const new_state = {...state};

            new_state.cartProducts = []

            return new_state
        }
        default:
            return state
    }
}

export default cartReducer