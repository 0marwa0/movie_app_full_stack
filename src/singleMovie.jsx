import React, { useEffect, useState } from "react";
import { fetchMovie } from "./apiCalls";
import { useParams } from "react-router-dom";
function SingleMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetchMovie(id, setMovie);
  }, []);

  return (
    <div>
      {movie.title}

      <p>{movie.overview}</p>
      <img
        width={200}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
    </div>
  );
}
export default SingleMovie;
