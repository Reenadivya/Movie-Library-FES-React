import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import NavLogo from "../assets/door movie (2).svg";

function Nav() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav className="nav">
      <div className="nav__logo">
        <figure>
          <Link to="/">
            <img src={NavLogo} alt="App Logo" className="nav__logo--img" />
          </Link>
        </figure>
      </div>
      <ul className="right__nav nav__links">
        <li>
          <Link className="nav__link link__hover" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__link link__hover" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav__link link__hover" to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link className="nav__link link__hover" to="/cart">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </Link>
        </li>
      </ul>

      <button className="btn__menu" onClick={openMenu}>
        <FontAwesomeIcon icon={faBars} className="fa-bars" />
      </button>
      <Link className="nav__link cart-icon" to="/cart">
        <FontAwesomeIcon icon={faShoppingBasket} />
      </Link>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} className="fa-bars" />
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/" className="menu__link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/about" className="menu__link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/cart" className="menu__link" onClick={closeMenu}>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
