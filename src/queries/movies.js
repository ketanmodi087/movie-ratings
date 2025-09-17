import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../services/api";

export function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: client.getMovies,
  });
}

export function useUpdateRating() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ movieId, rating }) =>
      client.updateMovieRating(movieId, rating),
    onSuccess: () => {
      queryClient.invalidateQueries(["movies"]);
    },
  });
}

export function useAddReview(movieId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => client.addMovieReview(movieId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["movie", movieId]);
      queryClient.invalidateQueries(["movies"]);
    },
  });
}
