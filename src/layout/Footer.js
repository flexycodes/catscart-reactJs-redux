import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer-bottom-area bg-gray pt-20 pb-20 mt-5">
            <div className="container">
                <div className="footer-bottom-wrap">
                    <div className="copyright-text">
                        <p>Copyright (C) 2020 <Link to="/">CatsStore.com</Link> All Rights Reserved.</p>
                    </div>
                    <div className="payment-method-img">
                        <img src={'./imgs/payment.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
