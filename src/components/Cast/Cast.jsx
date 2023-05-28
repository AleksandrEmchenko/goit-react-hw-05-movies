import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import searchByCredits from "components/services/API_credits";
import css from "./Cast.module.css"

function Cast() {
  const [casts, setCasts] = useState();
  const { id } = useParams();
  


  const castsFunc = async (id) => {
    try {
      const results = await searchByCredits(id);
      setCasts(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    castsFunc(id);
  }, [id]);


  return (
    <>
      <ul className={css.castcontainer}>
        {casts &&
          casts.cast.map((el) => (
            <li key={el.id} className={css.castElement}>
              <img
                src={
                  el?.profile_path
                
                    ? `https://image.tmdb.org/t/p/w500/${el?.profile_path}`
                    : "noPhoto"
                }
                alt={el?.name}
                width="200"
              />
<p>{el.name}</p>
<span><b>Character:</b></span><br />
<span>{el.character}</span>
              
            </li>
          ))}
      </ul>
    </>
  );
}

export default Cast;
