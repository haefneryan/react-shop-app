import React from 'react';
import classes from '../components/products/Products.module.css';
import Product from '../components/products/Product';

function FavoritesProductsPage(props) {
    const { favoriteItems, removeFromFavorites } = props;

    return (
        <div>
            <h1>FAVORITE PRODUCTS</h1>
            {favoriteItems.length === 0 && <p>-- NO FAVORITES ---</p>}
            <div className={classes.container}>
                <Product favoriteItems={favoriteItems} removeFromFavorites={removeFromFavorites} />
            </div>
        </div>
        );
}

export default FavoritesProductsPage;
