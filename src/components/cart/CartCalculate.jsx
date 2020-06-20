import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import { connect } from 'react-redux'
import {clearCart} from "../../store/actions/actions"

const CartCalculate = (props) => {
    const {subTotal, shipping} = props

    const proceedToCheckout = () => {
        // send request to the server
        // clear cart
        props.clearCart()
    }

    return (
        <div className="col-4">
            <div className="cart-calculator-wrapper">
                <div className="cart-calculate-items">
                    <h3>Cart Totals</h3>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>Sub Total</td>
                                <td>{subTotal}$</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>{shipping}$</td>
                            </tr>
                            <tr className="total">
                                <td>Total</td>
                                <td className="total-amount">{subTotal + shipping}$</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <Router>
                    <Link to='#' 
                        className="sqr-btn d-block"
                        onClick={() => proceedToCheckout()}
                    >Proceed To Checkout</Link>
                </Router>
                
            </div> 
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: (index) => dispatch(clearCart())
    }
}

export default connect(null, mapDispatchToProps)(CartCalculate)
