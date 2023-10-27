import { MovieCard } from "./MovieCard";

// Accepting movies as a prop from App.js

export const Movies = ({ movies }) => {
  return (
    <div className="d-flex flex-row text-center justify-content-evenly flex-wrap">
      {/* Mapping through the array of movies from App.js */}

      {movies.map((movie) => {
        return (
          <MovieCard
            // Passing the props for each rendered MovieCard

            imageUrl={movie.imageUrl}
            title={movie.title}
            key={movie.title}
          />
        );
      })}
    </div>
  );
};
