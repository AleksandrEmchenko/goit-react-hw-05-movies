import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import searchByReviews from "components/services/API_reviews";
import css from "./Reviews.module.css";

function Reviews() {
  const [rev, setRev] = useState();
  const { id } = useParams();

  const reviewsFunc = async (id) => {
    try {
      const results = await searchByReviews(id);
      setRev(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reviewsFunc(id);
  }, [id]);

  return (
    <>
      {rev?.length === 0 && <p>We don't have any reviews for this movie</p>}
      {rev && (
        <ul className="reviewContainer">
          {rev.map((el) => {
            return (
              <li key={el.id}>
                <p className={css.author}>Author: {el?.author}</p>
                <p className={css.content}>{el?.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Reviews;
