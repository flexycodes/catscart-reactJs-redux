import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom';

import { getById } from '../api/products'

function ProductSingle(props) {
    let {id} = useParams();
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(true)
    
    // Get Product By ID
    useEffect(() => {
        getById(id)
        .then( (product) => {
            setProduct(product)
            setLoading(false)
        })
    }, [id]);
    
    // Change value input And Quantity
    const handleQuantity = useCallback(
        (event) => {
            const quantity = event.target.value;
            
            if(quantity < 1)
                return ;
            setQuantity(quantity)
        },
        [],
    )

    if(loading)
        return 'Loading ..';

    return (
        <div className='product shop-details-content'>
            <h1 className='title-page'>Product : {product.name}</h1>

            <div className={'row mt-4'}>
                <div className="col-6">
                    <img src={product.image} width={'100%'} alt={product.name} />
                </div>
                <div className="col-6">
                    <h1>{product.name}</h1>

                    <div className="price">
                        <ul>
                            <li>{product.price}$</li>
                            <li>{product.price + 100}$</li>
                        </ul>
                    </div>

                    <p>{product.description}</p>

                    <input className="form-control" 
                            type="number" 
                            value={quantity}
                            onChange={handleQuantity}
                    />
                    
                    <br /><br />

                    <p>Total: {quantity * product.price}$</p>

                    <button className="btn btn-primary">
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>  
    )
}

export default ProductSingle
