import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './reducers/index'
import throttle from 'lodash.throttle'

// Get state
const loadState = () => {

    try {
        const state = localStorage.getItem('cartProducts');
        if (state !== null) {
            return JSON.parse(state)
        }
    } catch (error) {}
    
    return {
        cartProducts: []
    }
}

// Save State to local storage
const saveState = (state) => {
    console.log('save state ..');
    localStorage.setItem('cartProducts', JSON.stringify(state));  
}

const appReducers = combineReducers({
    cartProducts: cartReducer
})

// Create Store
const store = createStore(
    appReducers, 
    loadState(),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.subscribe(
    throttle(() => {
        saveState(store.getState())
    }, 2000)
)


export default store

