import React from 'react'
import { connect } from 'react-redux'
import {removeFromCart} from "../../store/actions/actions"

function CartItem(props) {
    const {item, index} = props
    const {product, quantity} = item

    const removeFromCart = (index) => {
        props.removeFromCart(index)
    }

    return (
        <div className="card mb-4">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {product.name}
                </h5>
                <p className="card-text">
                    Price : {product.price}$
                </p>

                <p className="card-text">
                    Quantity : {quantity}
                </p>

                <p className="card-text">
                    Total :  {product.price * quantity}$
                </p>
                
                <button 
                    className="btn btn-danger btn-css"
                    onClick={() => removeFromCart(index)}>
                        <i className="fa fa-trash"></i> Remove
                </button>
            </div>
        </div>        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);