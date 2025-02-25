import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieById } from "../services/api";
import ReviewList from "../components/ReviwList";
import "../styles/movieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieById(id);
        setMovie(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError(
          "Si è verificato un errore durante il caricamento dei dettagli del film. Riprova più tardi."
        );
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="loading">Caricamento...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!movie) return <div className="error">Film non trovato</div>;

  return (
    <div className="movie-detail-page">
      <Link to="/" className="back-button">
        &larr; Torna alla lista dei film
      </Link>

      <div className="movie-detail">
        <div className="movie-poster">
          <img
            src={
              movie.poster ||
              "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.title}
          />
        </div>

        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p className="movie-year">Anno: {movie.year}</p>
          <p className="movie-director">Regista: {movie.director}</p>

          {movie.genre && (
            <p className="movie-genre">
              Genere:{" "}
              {Array.isArray(movie.genre)
                ? movie.genre.join(", ")
                : movie.genre}
            </p>
          )}

          {movie.plot && (
            <div className="movie-plot">
              <h3>Trama</h3>
              <p>{movie.plot}</p>
            </div>
          )}
        </div>
      </div>

      {movie.reviews && movie.reviews.length > 0 && (
        <div className="reviews-section">
          <h2>Recensioni</h2>
          <ReviewList reviews={movie.reviews} />
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
