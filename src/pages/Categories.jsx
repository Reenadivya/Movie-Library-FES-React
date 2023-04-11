import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDiscoverData } from "../Data";
import Movie from "../components/ui/Movie";
import Skeleton from "../components/ui/Skeleton";

function Categories() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchCategory() {
      const fetchData = await fetchDiscoverData(id);
      setData(fetchData);
    }
    fetchCategory();
  }, []);

  console.log(data);

  return (
    <section id="categories__main">
      <div className="categories__container">
        {data?.slice(0, 8).map((data, index) => (
          <Movie data={data} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
