import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import AllProductsPage from './pages/AllProducts';
import FavoritesProductsPage from './pages/Favorites';
import Cart from './pages/Cart';
import MainNavigation from './components/layout/MainNavigation';
import data from './data';
import Footer from './components/layout/Footer';


function App() {
  const dummyData = data;
  const [products, setProducts] = useState(dummyData);
  const [productFilters, setProductFilters] = useState({
    gender: "",
    type: ""
  });
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
    console.log(productFilters);
    setProductFilters({
      ...productFilters,
      gender: e.target.value
    });
    console.log(productFilters);
  }

  const filterProductType = (e) => {
    setProductFilters({
      ...productFilters,
      type: e.target.value
    });
  }

  useEffect(() => {
    setProducts(dummyData);
    if (productFilters.gender !== '' && productFilters.type === '') {
      setProducts(dummyData.filter((x) => {return x.gender === productFilters.gender}));
    }
    if (productFilters.type !== '' && productFilters.gender === '') {
      setProducts(dummyData.filter((x) => {return productFilters.type.startsWith(x.name.toLowerCase())}));
    }
    if (productFilters.type !== '' && productFilters.gender !== '') {
      setProducts(dummyData
        .filter((x) => {return x.gender === productFilters.gender})
        .filter((x) => {return productFilters.type.startsWith(x.name.toLowerCase())})
        );
    }
  }, [productFilters]);

  const resetFilters = () => {
    document.getElementById('genderFilter').value = '';
    document.getElementById('productTypeFilter').value = '';
    setProducts(dummyData);
  }

  useEffect(() => {
    document.title = "React shop"
  }, []);

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
