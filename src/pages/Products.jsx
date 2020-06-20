import React, { useState, useEffect } from 'react'
import ProductItem from '../components/products/ProductItem'
import {getAll} from "../api/products"

function Products() {

    const [products, setProducts] = useState([])

    useEffect( () => {
        getAll()
        .then( (data) => {
            const products = data;
            setProducts(products);
        });
    }, []);
    
    return (
        <div className='products'>
            <h1 className='title-page'>Products</h1>
            <div className="row">
                {products.map( product =>
                    <div className={'col-4'} key={product.id}>
                        <ProductItem items={product} />
                    </div>
                )}
                
            </div>
        </div>  
    )
}

export default Products
