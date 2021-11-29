import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import AllProductsPage from './pages/AllProducts';
import FavoritesProductsPage from './pages/Favorites';
import Cart from './pages/Cart';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  const [cartItems, setCart] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  const onAddToCart = (product) => {
    console.log(product);
    product.qty = parseInt(document.getElementById(product.id).value);
    console.log(product.qty);
    if (cartItems.length >= 1) {
      for(let i=0; i<cartItems.length; i++) {
        if(cartItems[i].id == product.id) {
          cartItems[i].qty += product.qty;
        } else {
          console.log('THREE');
          setCart([...cartItems, product]);
        }
      }
    } else {
      setCart([...cartItems, product]);
    }
    console.log(cartItems);
  }

  const onAddToFavorites = (product) => {
    console.log(product);
    setFavoriteItems([...favoriteItems, product]);
  }

  let filteredFavoriteProducts;
  const removeFromFavorites = (product) => {
    let favId = product.id;
    filteredFavoriteProducts = favoriteItems.filter(function(product) {
        return product.id !== favId;
    });
    setFavoriteItems(filteredFavoriteProducts);
  }

  let filteredCartProducts;
  const removeFromCart = (product) => {
    let cartId = product.id;
    filteredCartProducts = cartItems.filter(function(product) {
      return product.id !== cartId;
    });
    setCart(filteredCartProducts);
  };
  

  const [dummyData] = useState([
    {
      id: '1',
      name: 'Item1',
      cost: 5.00,
      qty: 1
    },
    {
      id: '2',
      name: 'Item2',
      cost: 20.00,
      qty: 1
    },
    {
      id: '3',
      name: 'Item3',
      cost: 30.00,
      qty: 1
    },
    {
      id: '4',
      name: 'Item4',
      cost: 100.00,
      qty: 1
    }
])

  return (
    <div>
      <MainNavigation cartItems={cartItems}/>
      <Switch>
        <Route exact path='/products'>
          <AllProductsPage dummyData={dummyData} onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites}/>
        </Route>
        <Route path='/favorites'>
          <FavoritesProductsPage favoriteItems={favoriteItems} removeFromFavorites={removeFromFavorites}/>
        </Route>
        <Route path='/cart'>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
