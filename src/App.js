import { Banner } from "./components/Banner";
import { Movies } from "./components/Movies";

// Example of data array which we usually take from API

const movies = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1697070714395-3db6afc405e2?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    title: "Movie 1",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1697070714395-3db6afc405e2?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    title: "Movie 2",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1697070714395-3db6afc405e2?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    title: "Movie 3",
  },
];

export const App = () => {
  return (
    <div>
      <Banner />
      {/* Pass props to Movies.js */}
      <Movies movies={movies} />
    </div>
  );
};
