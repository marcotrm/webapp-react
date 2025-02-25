import { Link } from "react-router-dom";
import "../styles/movieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`http://localhost:5000/img/${movie.poster}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <Link to={`/movie/${movie.id}`} className="view-details">
          Vedi dettagli
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
