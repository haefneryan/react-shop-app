import React from 'react';
import classes from '../components/products/Products.module.css';
import Product from '../components/products/Product';

function FavoritesProductsPage(props) {
    const { favoriteItems, onRemoveFromFavorites, onAddToCart } = props;

    return (
        <div>
            <h1>FAVORITE PRODUCTS</h1>
            {favoriteItems.length === 0 && <p>-- NO FAVORITES ---</p>}
            <div className={classes.container}>
                {favoriteItems.map((product) => {
                    return (
                        <div key={product.id} className={classes.card}>
                            <Product product={product}/>
                            <button onClick={() => onAddToCart(product)}>ADD TO CART</button>
                            <button onClick={() => onRemoveFromFavorites(product)}>REMOVE</button>
                        </div>
                    )
                })}
            </div>
        </div>
        );
}

export default FavoritesProductsPage;
