import { Outlet, useSearchParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import searchMovie from "components/services/API_searchMovie";
// import MovieDetails from "components/MovieDetails/MovieDetails";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const searchword = searchParams.get("searchword");
  const [movieSearch, setMovieSearch] = useState();
  const location = useLocation()

  const searchMovieFunc = async (searchword) => {
    try {
      const results = await searchMovie(searchword);
      setMovieSearch(results);

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
{movieSearch && movieSearch.length !== 0 ?
  movieSearch.map((mov) => (
    <li key={mov.id}>
      <Link to={`movies/${mov.id}`} from={{from: location}}>
      {mov.title}
      </Link>
    </li>
  )) : (<p>No results</p>)}
</ul>
      <Outlet />
    </div>
  );
}

export default Movies;
