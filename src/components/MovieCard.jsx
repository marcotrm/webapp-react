import { Link } from "react-router-dom";
import "../styles/movieCard.css";

function MovieCard({ movie }) {
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    return `http://localhost:3000/${imagePath}`;
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {getImageUrl(movie.image_url) && (
          <img src={getImageUrl(movie.image_url)} alt={movie.title} />
        )}
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
