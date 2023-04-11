import React from "react";
import { Link } from "react-router-dom";

function Movie({ data }) {
  const POSTER_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie__item">
      <Link to={`/movies/${data?.id}`}>
        <img
          className="movie__item-img owl-lazy"
          data-src={POSTER_PATH + data?.poster_path}
          alt=""
          src={POSTER_PATH + data?.poster_path}
        />
      </Link>
      <div className="movie__item-description">
        <h3 className="movie-title">
          <span className="purple">
            {data?.title ? data?.title : data?.name}
          </span>
        </h3>
        <p>
          Release Date:{" "}
          {data?.release_date ? data?.release_date : data?.first_air_date}
        </p>
        <p>Rating: {data?.vote_average?.toFixed(1)}/10</p>
      </div>
    </div>
  );
}

export default Movie;
