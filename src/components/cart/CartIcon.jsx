import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";

import "./CartIcon.css";

const CartIcon = (props) => {
    const {totalQuantity} = props
    
    return (
        <div id="cart-icon">
            <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="badge badge-danger">{totalQuantity}</span>
            </Link>
        </div>
    )
}
const reduces = (total, item) => (total + parseInt(item.quantity))

const mapStateToProps = (state) => ({
    totalQuantity: state.cartProducts.reduce(reduces, 0),
})

export default connect(mapStateToProps)(CartIcon)
