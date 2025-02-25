import { useState, useEffect } from "react";
import { getMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../styles/home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(
          "Si è verificato un errore durante il caricamento dei film. Riprova più tardi."
        );
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div className="loading">Caricamento...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-page">
      <h1>I Nostri Film</h1>
      {movies.length === 0 ? (
        <p>Nessun film disponibile al momento.</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
