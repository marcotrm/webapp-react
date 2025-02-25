import axios from "axios";

// Configura l'URL base di Axios per puntare al tuo server backend
const API_URL = "http://localhost:3000/api";

// Crea un'istanza di Axios con configurazione personalizzata
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Funzione per ottenere tutti i film
export const getMovies = async () => {
  try {
    const response = await apiClient.get("/movies");
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// Funzione per ottenere un film specifico per ID
export const getMovieById = async (id) => {
  try {
    const response = await apiClient.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with id ${id}:`, error);
    throw error;
  }
};
