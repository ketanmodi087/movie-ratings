import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import mdlLogo from "../assets/mdl_logo_dark.svg";

import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import MovieCard from "../components/MovieCard";
import WatchlistTable from "../components/WatchlistTable";

import { useMovies, useUpdateRating } from "../queries/movies";
import { useMoviesContext } from "../provider/movies";

import styled from "styled-components";

// ----- HomePage Component -----
const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("filter") || "";
  const sortBy = searchParams.get("sort") || "rank";

  const { data: movies = [], isLoading } = useMovies();
  const updateRatingMutation = useUpdateRating();
  const { watchlist, addToWatchlist, removeFromWatchlist } = useMoviesContext();

  // ---- URL params ----
  const setFilterParam = (value) => {
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  };

  const setSortParam = (value) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  // ---- Filter & Sort ----
  const filteredMovies = useMemo(() => {
    const low = filter.trim().toLowerCase();
    let list = movies.filter((m) => {
      if (!low) return true;
      return (
        m.title.toLowerCase().includes(low) || String(m.duration).includes(low)
      );
    });

    if (sortBy) {
      list = list.slice().sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "rank") return b.rank - a.rank;
        if (sortBy === "releaseYear") return b.releaseYear - a.releaseYear;
        return 0;
      });
    }
    return list;
  }, [movies, filter, sortBy]);

  const watchlistMovies = movies.filter((m) => watchlist.has(m.id));

  const handleRating = (movieId, rating) => {
    updateRatingMutation.mutate({ movieId, rating });
  };

  // const addToWatchlist = (id) =>
  //   setWatchlistIds((prev) => new Set(prev).add(id));
  // const removeFromWatchlist = (id) => {
  //   setWatchlistIds((prev) => {
  //     const copy = new Set(prev);
  //     copy.delete(id);
  //     return copy;
  //   });
  // };

  const goToDetails = (id) => navigate(`/movies/${id}`);

  if (isLoading) return <Container>Loading...</Container>;

  return (
    <Container>
      {/* Navbar */}
      <NavBar>
        <img width={200} src={mdlLogo} alt="MDL logo" />
        <h1>Movies</h1>
        <div className="controls">
          <SearchBar
            value={filter}
            onChange={(e) => setFilterParam(e.target.value)}
            placeholder="Search movies..."
          />
          <SortDropdown
            value={sortBy}
            onChange={(e) => setSortParam(e.target.value)}
            options={[
              { label: "Rank", value: "rank" },
              { label: "Rating", value: "rating" },
              { label: "Year", value: "releaseYear" },
            ]}
          />
        </div>
      </NavBar>

      {/* Main Grid */}
      <GridContainer>
        <MoviesSection>
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRatingChange={(r) => handleRating(movie.id, r)}
              isInWatchlist={watchlist.has(movie.id)}
              onAddWatchlist={() => addToWatchlist(movie.id)}
              onRemoveWatchlist={() => removeFromWatchlist(movie.id)}
              onInfoClick={() => goToDetails(movie.id)}
            />
          ))}
        </MoviesSection>

        <WatchlistSection>
          <WatchlistTable
            movies={watchlistMovies}
            onRemove={removeFromWatchlist}
          />
        </WatchlistSection>
      </GridContainer>
    </Container>
  );
};

export default HomePage;
// ----- Styled Components -----
const Container = styled.div`
  margin: var(--spacing-lg) auto;
  padding: var(--spacing-lg);
  font-family: var(--font-family);
  background-color: var(--color-background);
  color: var(--color-text);
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-xl);

  img {
    height: 40px; /* could use var(--spacing-xl) if needed */
  }

  h1 {
    margin: 0;
    font-size: var(--font-size-xxl);
    font-weight: 700;
    color: var(--color-text);
  }

  .controls {
    display: flex;
    gap: var(--spacing-lg);
    flex-wrap: wrap;
    align-items: center;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; /* fallback */
  gap: var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 900px) {
    grid-template-columns: 600px 300px; /* fixed width for sections */
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* stack vertically */
  }
`;

const MoviesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const WatchlistSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;
