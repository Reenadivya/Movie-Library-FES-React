import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about/*" element={<About />}></Route>
          <Route path="/search/*" element={<Search />}></Route>
          <Route path="/cart/*" element={<Cart />}></Route>
          <Route path="/movies/:id" element={<MovieInfo />}></Route>
          <Route path="/categories/:id" element={<Categories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
