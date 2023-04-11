import Popcorn from "../assets/3d-casual-life-young-man-shopping-online.png";
import { Link } from "react-router-dom";
import React from "react";

function Landing() {
  return (
    <section id="landing__page">
      <header>
        <div className="header__container">
          <h1 className="landing__page--header">
            Discover the <span className="purple">magic</span> of the big screen
            with our movie collection
          </h1>
          <h2 className="landing__page--subheader">
            Explore more <span className="purple">Movies</span>
          </h2>
          <Link to="/search">
            <button className="explore__movies-btn">Explore movies</button>
          </Link>
          <img
            src={Popcorn}
            alt="Popcorn image"
            className="popcorn__img bounce"
          />
        </div>
      </header>
    </section>
  );
}

export default Landing;
