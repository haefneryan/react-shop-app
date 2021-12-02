import React from 'react';
import Product from '../components/products/Product';
import Filters from '../components/layout/Filters';

import classes from '../components/products/Products.module.css'

function AllProductsPage(props) {  
    const { onAddToCart, onAddToFavorites, products, filterGender, resetFilters, filterProductType } = props;

    return (
    <div>
        <h1>ALL PRODUCTS</h1>
        <Filters filterGender={filterGender} filterProductType={filterProductType} resetFilters={resetFilters}/>

        <div className={classes.container}>
        {products.map((product) => {
            return (
                <div key={product.id} className={classes.card}>
                    <Product products={products} product={product} onAddToFavorites={onAddToFavorites} onAddToCart={onAddToCart}/>
                    <button onClick={() => onAddToCart(product)}>ADD TO CART</button>
                    <button className={classes.favBtn} title='Add to Favorites' onClick={() => onAddToFavorites(product)}>+</button>
                </div>
            )
        })}
        </div>
    </div>
    );
}

export default AllProductsPage;
