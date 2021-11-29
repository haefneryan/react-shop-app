import React from 'react';
import classes from './Products.module.css';

export default function Product(props) {
    const { dummyData, cartItems, favoriteItems, onAddToCart, onAddToFavorites, removeFromCart, removeFromFavorites} = props;
    let data;
    if (window.location.href.endsWith('favorites')) {
        data = favoriteItems;
    } else if (window.location.href.endsWith('cart')) {
        data = cartItems;
    } else {
        data = dummyData;
    }
    
    return (
    <>
        {data.map((product) => {
            return (
                <div key={product.id} className={classes.card}>
                    <p>{product.name}</p>
                    {/* <p>$ {product.cost}</p> */}
                    {window.location.href.endsWith('cart') && <p>$ {product.cost} x ({product.qty}): ${product.cost * product.qty}</p>}
                    {window.location.href.endsWith('cart') && <button onClick={() => removeFromCart(product)}>REMOVE</button>}
                    {window.location.href.endsWith('favorites') && <p>$ {product.cost}</p>}
                    {window.location.href.endsWith('favorites') && <button onClick={() => removeFromFavorites(product)}>REMOVE</button>}
                    {window.location.href.endsWith('products') && <p>$ {product.cost}</p>}
                    {window.location.href.endsWith('products') && <input type='number' defaultValue='1' min='1' id={product.id}/>}
                    {window.location.href.endsWith('products') && <button onClick={() => onAddToCart(product)}>ADD TO CART</button>}
                    {window.location.href.endsWith('products') && <button className={classes.favBtn} onClick={() => onAddToFavorites(product)}>ADD TO FAVORITES</button>}
                </div>
            )
        })}
    </>
    )
}
