import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Cart({ cart, updateCart, removeItem, totals }) {
  console.log(cart);
  const price = getRandomPrice();
  function getRandomPrice() {
    const min = 10;
    const max = 40;
    const price = Math.floor(Math.random() * (max - min + 1)) + min;

    return `$${price}`;
  }
  const POSTER_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((item) => {
                  return (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__book">
                        <img
                          className="cart__book--img"
                          src={POSTER_PATH + item?.poster_path}
                          alt=""
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {item?.title}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(item)}>
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          className="cart__input"
                          min={0}
                          max={99}
                          value={item.quantity}
                          onChange={(event) =>
                            updateCart(item, event.target.value)
                          }
                        />
                      </div>
                    </div>
                  );
                })}

                {(!cart || !cart.length) && (
                  <div className="cart__empty">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="faShopping-icon"
                    />
                    <h2>You don't have any books in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browse books</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {cart && cart.length > 0 && (
              <div className="total">
                <div className="total__item total__price">
                  <span>Total</span>
                  <p className="price">Price: {price}</p>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert(`Haven't got around to doing this :(`)}>
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
