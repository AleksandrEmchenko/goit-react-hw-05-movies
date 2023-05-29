import { Outlet, useSearchParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import searchMovie from "components/services/API_searchMovie";
import css from "pages/Movies/Movies.module.css";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const searchword = searchParams.get("searchword");
  const [movieSearch, setMovieSearch] = useState(null);
  const location = useLocation();

  const searchMovieFunc = async (searchword) => {
    if (searchword) {
      try {
        const results = await searchMovie(searchword);
        setMovieSearch(results);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if(!searchword) return;
    searchMovieFunc(searchword);
  }, [searchword]);

  return (
    <div>
      <input
        type="text"
        value={searchword}
        autoComplete="off"
        autoFocus
        placeholder="Enter search word..."
        onChange={(event) =>
          setSearchParams({ searchword: event.target.value })
        }
      />

      <ul className={css.movieContainer}>
        {movieSearch && movieSearch.length !== 0 ? (
          movieSearch.map((mov) => (
            <li key={mov.id}>
              <Link to={`${mov.id}`} from={{ from: location }}>
                <div className={css.boxmov}>
                  <div>
                    {mov?.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${mov?.poster_path}`}
                        width="200"
                        alt={mov?.title}
                      />
                    ) : (
                      <img
                        src="https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                        width="200"
                        alt="No poster"
                      />
                    )}
                  </div>

                  <div>{mov.title}</div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>No results</p>
        )}
      </ul>
      <Outlet />
    </div>
  );
}

export default Movies;
