import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
import SearchMovie from "./ui/SearchMovie";
import { fetchSearchData } from "../Data";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterValue, setFilterValue] = useState("rating");

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchResults(searchValue);
  };

  useEffect(() => {
    if (searchValue) {
      async function fetchSearchResults() {
        setLoading(true);
        const searchMovies = await fetchSearchData(searchValue);
        setData(searchMovies);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
      fetchSearchResults();
    }
  }, [searchValue]);

  let filteredData = data?.slice(0, 8);
  if (filterValue === "low-to-high") {
    filteredData = filteredData.sort((a, b) => a.vote_average - b.vote_average);
  } else if (filterValue === "high-to-low") {
    filteredData = filteredData.sort((a, b) => b.vote_average - a.vote_average);
  }

  return (
    <div className="search__form-container">
      <div className="search__form--header-container">
        <FontAwesomeIcon icon={faMagicWandSparkles} className="magic-wand" />
        <h1 className="search__form--title">
          <span className="purple">Find Your Next Favorite Movie</span>
        </h1>
        <FontAwesomeIcon icon={faMagicWandSparkles} className="magic-wand" />
      </div>
      <form action="/" className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={handleSearchInputChange}
        />
        <button className="search-button">Submit</button>
        <select id="filter" onChange={handleFilterChange} value={filterValue}>
          <option value="rating">Sort by rating</option>
          <option value="low-to-high" disabled={!searchValue}>
            Lowest to highest
          </option>
          <option value="high-to-low" disabled={!searchValue}>
            Highest to lowest
          </option>
        </select>
      </form>
      <div className="movie__container">
        {filteredData?.slice(0, 8).map((movie, index) => (
          <SearchMovie key={index} data={movie} loading={loading} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
