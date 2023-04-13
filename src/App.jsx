import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import About from "./pages/About";
import Cart from "./pages/Cart";
import MovieInfo from "./components/ui/MovieInfo";
import Categories from "./pages/Categories";

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(movie) {
    const dupeItem = cart.find((item) => item.id === movie.id);
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
              return item.id === dupeItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...movie, id: Date.now(), quantity: 1 }]
    );
    console.log(cart);
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: newQuantity,
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about/*" element={<About />}></Route>
          <Route path="/search/*" element={<Search />}></Route>
          <Route
            path="/cart/*"
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                removeItem={removeItem}
                totals={calcPrices()}
              />
            }></Route>
          <Route
            path="/movies/:id"
            element={<MovieInfo addItemToCart={addItemToCart} />}></Route>
          <Route path="/categories/:id" element={<Categories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
