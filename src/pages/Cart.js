import React from 'react';
import Product from '../components/products/Product';
import classes from '../components/products/Products.module.css';
import CartSummary from '../components/layout/CartSummary';

export default function Cart( props ) {
    const {cartItems, emptyCart, onAddToCart, onRemoveFromCart} = props;

    return (
        <div>
            <h1>CART</h1>
            {cartItems.length === 0 && <p>-- YOUR CART IS EMPTY ---</p>}
            {cartItems.length > 0 && <button onClick={emptyCart}>EMPTY CART</button>}
            <div className={classes.container}>
                {cartItems.map((product) => {
                    return (
                        <div key={product.id} className={classes.card}>
                            <Product product={product}/>
                            <div>
                                <p>qty: {product.qty}</p>
                                <button onClick={() => onRemoveFromCart(product)}>-</button>
                                <button onClick={() => onAddToCart(product)}>+</button>
                            </div>
                            <p className={classes.subTotal}>Sub-total: ${product.price * product.qty}</p>
                        </div>
                    )
                })}
            </div>
            <br></br><br></br>
            <hr></hr>
            <CartSummary cartItems={cartItems}/>
        </div>
    )
}
