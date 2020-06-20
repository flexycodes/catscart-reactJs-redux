import React from 'react'

import CartItem from '../components/cart/CartItem';
import { connect } from 'react-redux';
import CartCalculate from '../components/cart/CartCalculate';

function Cart(props) {
    const {cartItems, subTotal, shipping} = props

    if(cartItems.length <= 0)
        return (
            <div className="alert alert-warning mt-5" role="alert">
                Not product in your cart !
            </div>
        )

    return (
        <div className='cart'>
            <h1 className='title-page'>Cart</h1>

            <div className="row">
                <div className="col-8">
                    <div className='row cartitem'>
                        {cartItems.map((item, index) => 
                            <div className={'col-6'} key={index}>
                                <CartItem item={item} index={index} />
                            </div>
                        )}
                    </div>
                </div>

                <CartCalculate shipping={shipping} subTotal={subTotal} />

            </div>
        </div>
    )
}

const reduces = (total, item) => (total + (item.product.price * item.quantity))

const mapStateToProps = (state) => ({
    cartItems: state.cartProducts,
    subTotal: state.cartProducts.reduce(reduces, 0),
    shipping: state.shipping
})

export default connect(mapStateToProps)(Cart)
