import React, { useState } from 'react';
import Product from '../components/products/Product';

import classes from '../components/products/Products.module.css'

function AllProductsPage(props) {  
    const { onAddToCart, onAddToFavorites, dummyData } = props;
    
    return (
    <div>
        <h1>ALL PRODUCTS</h1>
        <div className={classes.container}>
            <Product dummyData={dummyData} onAddToFavorites={onAddToFavorites} onAddToCart={onAddToCart}/>
        </div>
    </div>
    );
}

export default AllProductsPage;