import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation(props) {
    const { cartItems, favoriteItems } = props;

    return (
    <header className={classes.header}>
        <h1>REACT SHOP</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/'>ALL PRODUCTS</Link>
                </li>
                <li>
                    <Link to='/favorites'>FAVORITES ({favoriteItems.length})</Link>
                </li>
                <li>
                    <Link to='/cart'>CART ({cartItems.length})</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation;