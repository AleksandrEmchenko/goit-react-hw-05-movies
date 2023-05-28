import { useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom"

import search from "components/services/API_searchByTrend";
import css from "./Home.module.css"

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation()


  const fetchFilmsTrending = async () => {
    try {
      const films = await search();
      setMovies(films);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFilmsTrending();
    
  }, []);

  return (
    <div>
      <h2 className={css.trendingTitle}>Trending today</h2>
      <ul className={css.movieContainer}>
        {movies &&
          movies.map((movie) => {
            return <li className={css.link} key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{from: location}}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path
}`} width="200" alt={movie?.title}/> </Link></li>;
          })}
      </ul>
    </div>
  );
}
export default Home;
