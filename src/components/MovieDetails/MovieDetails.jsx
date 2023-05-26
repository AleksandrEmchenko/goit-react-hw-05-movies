import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import searchId from "components/services/API_searchById";

function MovieDetails() {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const fetchFilmById = async (id) => {
    try {
      const film = await searchId(id);
      setMovie(film);

      console.log("фільм=", film);
        console.log("муви = ",movie)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFilmById(id);
  }, []);
console.log("Муви вне фенкции=", movie)
  return (
    <div>
      <div>
        <img src="" alt={movie.title} />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <span>User Score: %</span>

        <b>Overview</b>
        <p>{movie.overview}</p>

        <b>Genres</b>
        <p>{movie.genres}</p>
      </div>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
