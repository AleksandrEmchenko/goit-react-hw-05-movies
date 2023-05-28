import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";

import css from "./MovieDetails.module.css";

import searchId from "components/services/API_searchById";

function MovieDetails() {
  const [mov, setMov] = useState();
  const location = useLocation();
  const { id } = useParams();

  const fetchFilmById = async (id) => {
    try {
      const film = await searchId(id);

      setMov(film);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFilmById(id);
  }, [id]);

  return (
    <div>
      <Link to={location.state?.from ?? "/"} className={css.goBack}>
        &#9754;Go Back
      </Link>
      <div className={css.container}>
        <img
          src={
            mov?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${mov.poster_path}`
              : "noPhoto"
          }
          alt={mov?.title}
          width="250"
        />
        <div className="movi-details">
          <h1>{mov?.title}</h1>

          <p>User Score: {(mov?.vote_average * 10).toFixed(1)}%</p>

          <b>Overview</b>
          <p>{mov?.overview}</p>
          <b>Genres</b>
          <p>
            {mov?.genres.map((genre) => {
              return <span className={css.genres}>{genre.name}</span>;
            })}
          </p>
        </div>
      </div>

      <div className={css.AdInform}>
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to={"cast"}>Cast</Link>
          </li>
          <li>
            <Link to={"reviews"}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;
