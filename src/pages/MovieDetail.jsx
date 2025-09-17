import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovies, useUpdateRating, useAddReview } from "../queries/movies";
import { useMoviesContext } from "../provider/movies";
import MovieDetailsCard from "../components/MovieDetailsCard";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movies = [], isLoading } = useMovies();
  const updateRatingMutation = useUpdateRating();
  const addReviewMutation = useAddReview(id);

  const { watchlist, addToWatchlist, removeFromWatchlist } = useMoviesContext();

  const movie = movies.find((m) => m.id === id);
  if (isLoading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <MovieDetailsCard
      movie={{ ...movie, addReview: addReviewMutation.mutate }}
      onRatingChange={(r) =>
        updateRatingMutation.mutate({ movieId: id, rating: r })
      }
      isInWatchlist={watchlist.has(movie.id)}
      onAddWatchlist={() => addToWatchlist(movie.id)}
      onRemoveWatchlist={() => removeFromWatchlist(movie.id)}
      onBack={() => navigate(-1)}
    />
  );
};

export default MovieDetails;
