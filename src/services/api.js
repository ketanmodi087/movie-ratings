// src/api/client.js
const API_BASE_URL = import.meta.env.VITE_API_BASE;

// 🔑 Replace this with your real API key
const API_KEY = import.meta.env.VITE_API_KEY;

async function request(endpoint, options = {}) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "API request failed");
  }

  return res.json();
}

// Reset movies
export function resetMovies() {
  return request("/movies/reset", { method: "POST" });
}

// Get all movies
export function getMovies() {
  return request("/movies");
}

// Update movie rating
export function updateMovieRating(movieId, rating) {
  return request(`/movie/${movieId}/rating?rating=${rating}`, {
    method: "PUT",
  });
}

// Add movie review
export function addMovieReview(movieId, { name, review }) {
  return request(`/movie/${movieId}/review`, {
    method: "POST",
    body: JSON.stringify({ name, review }),
  });
}

export default {
  resetMovies,
  getMovies,
  updateMovieRating,
  addMovieReview,
};
