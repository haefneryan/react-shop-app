import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import AllProductsPage from './pages/AllProducts';
import FavoritesProductsPage from './pages/Favorites';
import Cart from './pages/Cart';
import MainNavigation from './components/layout/MainNavigation';
import data from './data';
import Footer from './components/layout/Footer';


function App() {
  const dummyData = data;
  const [products, setProducts] = useState(dummyData);
  const [cartItems, setCart] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const onAddToCart = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCart(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x ))
    } else {
      setCart([...cartItems, {...product, qty: 1}]);
    }
  }

  const onRemoveFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCart(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x ))
    }
  }

  const onAddToFavorites = (product) => {
    const exist = favoriteItems.find(x => x.id === product.id);
    if (!exist) {
      setFavoriteItems([...favoriteItems, product]);
    } else {
      alert('Item is already in your favorites!');
    }
  }

  const onRemoveFromFavorites = (product) => {
    setFavoriteItems(favoriteItems.filter((x) => x.id !== product.id));
  }
  
  const emptyCart = () => {
    setCart([]);
  }

  const filterGender = (e) => {
    setProducts(dummyData);
    if (e.target.value !== 'allproducts') {
      setProducts(products.filter((x) => {
        if (e.target.value === 'mens') {
          return x.gender === 'mens';
        } else if (e.target.value === 'womens') {
          return x.gender === 'womens';
        }
      }));
    }
  }

  const filterProductType = (e) => {
    setProducts(dummyData);
    if (e.target.value !== 'allproducts') {
      setProducts(products.filter((x) => {
        if (e.target.value === 'hats') {
          return x.name === 'Hat';
        } else if (e.target.value === 'jackets') {
          return x.name === 'Jacket';
        } else if (e.target.value === 'shoes') {
          return x.name === 'Shoes';
        } else if (e.target.value === 'sweatshirts') {
          return x.name === 'Sweatshirt';
        }
      }));
    }
  }

  const resetFilters = () => {
    document.getElementById('genderFilter').value = 'allproducts';
    document.getElementById('productTypeFilter').value = 'allproducts';
    setProducts(dummyData);
  }

  return (
    <div className='container'>
      <br></br><br></br><br></br><br></br><br></br>
      <MainNavigation cartItems={cartItems} favoriteItems={favoriteItems}/>
      <Switch>
        <Route exact path='/'>
          <AllProductsPage products={products} onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} filterGender={filterGender} filterProductType={filterProductType} resetFilters={resetFilters}/>
        </Route>
        <Route path='/favorites'>
          <FavoritesProductsPage favoriteItems={favoriteItems} onRemoveFromFavorites={onRemoveFromFavorites}/>
        </Route>
        <Route path='/cart'>
          <Cart cartItems={cartItems} emptyCart={emptyCart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart}/>
        </Route>
      </Switch>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />
    </div>
  )
}

export default App;
