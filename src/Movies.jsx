import { useEffect, useState } from "react";

import { fetchTopRatedMovies } from "./apiCalls";
import { Link } from "react-router-dom";
function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopRatedMovies(setMovies);
  }, []);

  return (
    <>
      {movies.map((item) => (
        <Link to={`/movie/${item.id}`}>
          <div key={item.id}>
            <p>{item.title}</p>
            <img
              width={40}
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            />
          </div>
        </Link>
      ))}
    </>
  );
}

export default Movies;
