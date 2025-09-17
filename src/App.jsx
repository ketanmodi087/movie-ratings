import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/AppContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetail";
import GlobalStyles from "./globalStyles";
import { MoviesProvider } from "./provider/movies";

const queryClient = new QueryClient();
function App() {
  return (
    <Container>
      <MoviesProvider>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
          </Routes>
        </QueryClientProvider>
      </MoviesProvider>
    </Container>
  );
}

export default App;
