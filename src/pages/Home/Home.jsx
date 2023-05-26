import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

import search from "components/services/API_searchByTrend";
import css from "./Home.module.css"

function Home() {
  const [movies, setMovies] = useState([]);
  const [trend, setTrending] = useState("trending/movie");
  const [page, setPage] = useState(1);

  const fetchFilmsTrending = async (trend, page) => {
    try {
      const films = await search(trend, page);
      setMovies(films);
      console.log(films);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFilmsTrending(trend, page);
    
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map((movie) => {
            return <li className={css.link} key={movie.id}><Link to={`movies/${movie.id}`}> {movie.title} </Link></li>;
          })}
      </ul>
    </div>
  );
}
export default Home;
