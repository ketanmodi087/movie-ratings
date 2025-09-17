import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(new Set());

  const addToWatchlist = (id) => {
    setWatchlist((prev) => new Set(prev).add(id));
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => {
      const copy = new Set(prev);
      copy.delete(id);
      return copy;
    });
  };

  return (
    <MoviesContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

// ✅ Context Hook
export const useMoviesContext = () => useContext(MoviesContext);
