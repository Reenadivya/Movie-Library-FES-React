import React from "react";
import Landing from "../components/Landing";
import FeaturedMovies from "../components/FeaturedMovies";
import Features from "../components/Features";
import Categories from "../components/TopRated";

function Home() {
  return (
    <>
      <Landing />
      <main>
        <Features />
        <FeaturedMovies />
        <Categories />
      </main>
    </>
  );
}

export default Home;
