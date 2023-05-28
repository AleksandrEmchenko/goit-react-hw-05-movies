import { Outlet, useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import searchMovie from "components/services/API_searchMovie";
// import MovieDetails from "components/MovieDetails/MovieDetails";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const searchword = searchParams.get("searchword");
  const [movieSearch, setMovieSearch] = useState();

  const searchMovieFunc = async (event) => {
    try {
      const results = await searchMovie(searchword);
      setMovieSearch(results);

      console.log("Поиск по слову===> ", movieSearch);
      console.log("Длинна массива===> ", movieSearch?.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
      <ul>
        {movieSearch?.length !== 0 ? (
          movieSearch?.map((movie) => {
            <li>{movie.title}</li>;
          })
        ) : (
          <p>No results</p>
        )}
      </ul>
      <Outlet />
    </div>
  );
}

export default Movies;
