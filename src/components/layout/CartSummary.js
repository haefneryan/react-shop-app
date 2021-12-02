import React from 'react';

import classes from './CartSummary.module.css';

function CartSummary(props) {
    const {cartItems} = props;

    const itemsPrice = cartItems.reduce((total, item) => {
        return total + (item.price * item.qty)
    }, 0);
    const taxPrices = itemsPrice * 0.06;
    const shippingPrice = (itemsPrice > 100 ? 0 : 10);
    const totalPrice = itemsPrice + taxPrices + shippingPrice;

    return (
        <div className={classes.cartSummaryContainer}>
            <p>*Free shipping on orders more than $100 (before taxes)*</p>
            <br></br>
            {cartItems.length !== 0 &&
                <div>
                    <p>Items Price: ${itemsPrice.toFixed(2)}</p>
                    <p>Taxes: ${taxPrices.toFixed(2)}</p>
                    <p>Shipping: ${shippingPrice.toFixed(2)}</p>
                    <p>Total: ${totalPrice.toFixed(2)}</p>
                </div>
            }
        </div>
    )
}

export default CartSummary
