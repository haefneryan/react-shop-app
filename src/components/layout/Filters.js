import React from 'react'

function Filters(props) {
    const { filterGender, filterProductType, resetFilters } = props;
    return (
        <div>
            Gender: <select id='genderFilter' defaultValue='allproducts' onChange={(e) => filterGender(e)}>
                <option value='allproducts'>All Products</option>
                <option value='mens'>Men's</option>
                <option value='womens'>Women's</option>
            </select>

            Product Type: <select id='productTypeFilter' defaultValue='allproducts' onChange={(e) => filterProductType(e)}>
                <option value='allproducts'>All Products</option>
                <option value='hats'>Hats</option>
                <option value='jackets'>Jackets</option>
                <option value='shoes'>Shoes</option>
                <option value='sweatshirts'>Sweatshirts</option>
            </select>
            <button onClick={() => resetFilters()}>Reset Filters</button>
        </div>
    )
}

export default Filters;
