
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/types";

const cartReducer = (state, action) => {

    switch(action.type) {
        case ADD_TO_CART: {
            const new_state = [
                    ...state,
                    {
                        product: action.productsInfo,
                        quantity: action.quantity
                    }
                ]
            return new_state
        }
        case REMOVE_FROM_CART: {
            const item_index = action.index;
            const new_state = [...state]
            new_state.splice(item_index, 1) 
            return new_state
        }
        case CLEAR_CART: {
            let new_state = [...state]
            new_state = []
            return new_state
        }
        default: {
            return (state === undefined) ? [] : state
        }
    }
}

export default cartReducer