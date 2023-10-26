import { MovieCard } from "./MovieCard";

export const Movies = () => {
  return (
    <div className="d-flex flex-row text-center justify-content-evenly flex-wrap">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};
