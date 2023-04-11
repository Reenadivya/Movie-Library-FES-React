import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
    <div className="cart__empty">
      <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart" />
      <h2 className="cart__empty--text">
        You don't have any books in your cart!
      </h2>
      <Link to="/search">
        <button className="cart-btn">Browse books</button>
      </Link>
    </div>
  );
}

export default Cart;
