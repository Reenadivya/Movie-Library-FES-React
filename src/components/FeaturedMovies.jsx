import React, { useState, useEffect } from "react";
import Movie from "./ui/Movie";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { fetchTrendingData } from "../Data";

function FeaturedMovies() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const trendingData = await fetchTrendingData();
      setData(trendingData);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
    fetchData();
  }, []);

  const options = {
    items: 3,
    margin: 20,
    nav: true,
    dots: false,
    loop: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="featured__movies">
      <div className="featured__movies-container">
        <h2 className="featured__movies-header">Featured Movies</h2>
        <div className="movie__list">
          <OwlCarousel className="owl-theme" {...options}>
            {data?.slice(0, 6).map((movie, id) => (
              <Movie key={id} data={movie} loading={loading} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovies;
