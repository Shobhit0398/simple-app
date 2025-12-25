import { useEffect, useState } from "react";
import "./MovieRow.css";

const BASE_URL = "https://image.tmdb.org/t/p/w300";

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3${fetchUrl}`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, [fetchUrl]);

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row-posters">
        {movies?.map(movie => (
          <img
            key={movie.id}
            className="poster"
            src={`${BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
