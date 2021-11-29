import React from 'react';
import Product from '../components/products/Product';
import classes from '../components/products/Products.module.css';

export default function Cart( props ) {
    const {cartItems, removeFromCart} = props;

    return (
        <div>
            <h1>CART</h1>
            {cartItems.length === 0 && <p>-- YOUR CART IS EMPTY ---</p>}
            <div className={classes.container}>
                <Product cartItems={cartItems}  removeFromCart={removeFromCart}/>
            </div>
            <div>
            <h1>TOTAL:</h1>
            <p>{cartItems.length}</p>
            
            </div>
        </div>
    )
}
