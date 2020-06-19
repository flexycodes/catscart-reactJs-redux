import React from 'react'

function CartItem() {
    return (
        <div className='row cartitem'>
            <div className={'col-6'}>
                <div className="card mb-4">
                    <img src='./imgs/1.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                            White Cat
                        </h5>
                        <p className="card-text">
                            Price : 200$
                        </p>

                        <p className="card-text">
                            Quantity : 2
                        </p>

                        <p className="card-text">
                            Total :  {200 * 2}$
                        </p>
                        
                        <button 
                            className="btn btn-danger btn-css">
                                <i className="fa fa-trash"></i> Remove
                        </button>

                    </div>
                </div>      
            </div>

            <div className={'col-6'}>
                <div className="card mb-4">
                    <img src='./imgs/1.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                            White Cat
                        </h5>
                        <p className="card-text">
                            Price : 200$
                        </p>

                        <p className="card-text">
                            Quantity : 2
                        </p>

                        <p className="card-text">
                            Total :  {200 * 2}$
                        </p>
                        
                        <button 
                            className="btn btn-danger btn-css">
                                <i className="fa fa-trash"></i> Remove
                        </button>

                    </div>
                </div>      
            </div>
        </div>
    )
}

export default CartItem
