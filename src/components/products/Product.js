import React from 'react';

export default function Product(props) {
    const { product } = props;
    
    return (
    <>
        <img src={product.image} alt='none'/>
        <p>{product.name}</p>
        <p>$ {product.price}</p>
    </>
    )
}
