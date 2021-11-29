import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation(props) {
    const {cartItems, cartCount} = props;

    return (
    <header className={classes.header}>
        <h1>REACT WEB STORE</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/products'>PRODUCTS</Link>    
                </li>
                <li>
                    <Link to='/favorites'>FAVORITES</Link>    
                </li>
                <li>
                    <Link to='/cart'>CART ({cartCount})</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation;