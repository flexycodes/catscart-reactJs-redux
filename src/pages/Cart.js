import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import CartItem from '../components/cart/CartItem';

function Cart() {

    return (
        <div className='cart'>
            <h1 className='title-page'>Cart</h1>

            <div className="row">
                <div className="col-8">
                    <CartItem />
                </div>

                <div className="col-4">
                    <div className="cart-calculator-wrapper">
                        <div className="cart-calculate-items">
                            <h3>Cart Totals</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>Sub Total</td>
                                        <td>200$</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>70$</td>
                                    </tr>
                                    <tr className="total">
                                        <td>Total</td>
                                        <td className="total-amount">270$</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <Router>
                            <Link to='#' className="sqr-btn d-block">Proceed To Checkout</Link>
                        </Router>
                        
                    </div> 
                </div>

            </div>
        </div>
    )
}

export default Cart
