import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { fetchMovieInfo } from "../../Data";
import Skeleton from "./Skeleton";

function MovieInfo() {
  const POSTER_PATH = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const movieInfoData = await fetchMovieInfo(id);
      setData(movieInfoData);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
    fetchMovie();
  }, [id]);

  if (isLoading) {
    return (
      <section id="movie__info">
        <div className="movie__info--row">
          <div className="movie__img--container">
            <div className="movie__info--top">
              <Link to="/" className="movie__link fa-arrow">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <Link to="/" className="movie__link">
                <h2 className="book__selected--title--top">Movies</h2>
              </Link>
            </div>
            <figure className="movie__info-fig">
              <Skeleton width="324px" height="486px" borderRadius="25px" />
            </figure>
          </div>
          <div className="movie__info--container">
            <Skeleton width="485px" height="47px" borderRadius="8px" />
            <Skeleton width="94px" height="17px" borderRadius="8px" />
            <Skeleton width="696px" height="128px" borderRadius="8px" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="movie__info">
      <div className="movie__info--row">
        <div className="movie__img--container">
          <div className="movie__info--top">
            <Link to="/" className="movie__link fa-arrow">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <Link to="/" className="movie__link">
              <h2 className="book__selected--title--top">Movies</h2>
            </Link>
          </div>
          <figure className="movie__info-fig">
            <img
              className="movie__info-img"
              src={POSTER_PATH + data?.poster_path}
              alt=""
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </figure>
        </div>
        <div className="movie__info--container">
          <h2 className="movie__info--title">{data?.title}</h2>
          <h3 className="movie__info--release">{data?.release_date}</h3>
          <p className="movie__info--para">{data?.overview}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieInfo;
