import { Outlet } from "react-router-dom";
import MovieDetails from "components/MovieDetails/MovieDetails";

function Movies() {
  return (
    <div>
      Movies page
      <MovieDetails />
      <Outlet />
    </div>
  );
}

export default Movies;
