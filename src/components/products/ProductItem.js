import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem(props) {
    const {items} = props
    const product = items

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
                
                <Link to={"/products/" + product.id} className="btn btn-primary">Details</Link>
            </div>
        </div>
    )
}

export default ProductItem
