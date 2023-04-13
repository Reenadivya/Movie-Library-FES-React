import React from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

function SearchMovie({ data, loading }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  const rateClass = getClassByRate(data?.vote_average);

  return (
    <div className="movie">
      {loading ? (
        <>
          <Link to={`/movies/${data?.id}`}>
            <figure className="book__img--wrapper">
              <Skeleton width="300px" height="450px" borderRadius="8px" />
            </figure>
          </Link>
          <div className="movie-info">
            <Skeleton width="40px" height="25px" borderRadius="8px" />
            <span className="orange">
              <Skeleton width="48px" height="24px" borderRadius="8px" />
            </span>
          </div>
        </>
      ) : (
        <>
          <Link to={`/movies/${data?.id}`}>
            <figure className="book__img--wrapper">
              <img
                className="movie__item-img"
                src={IMG_URL + data?.poster_path}
                alt="Movie Poster"
              />
            </figure>
          </Link>
          <div className="movie__info--btn">
            <div className="movie-info">
              <h3>{!data?.title ? data?.name : data?.title}</h3>

              <span className={rateClass}>
                {data?.vote_average === 0 ? "0" : data?.vote_average.toFixed(1)}
                /10
              </span>
            </div>
            <Link to="/cart">
              <button className="atc-btn">Add To Cart</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchMovie;
