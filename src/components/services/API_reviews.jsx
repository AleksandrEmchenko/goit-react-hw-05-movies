import axios from "axios";

async function searchByReviews(id) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGE2YzcxYjRkYTgxYjUzMDRlZTIyYjg0M2UxNjZjYiIsInN1YiI6IjY0NmUwZmYwOTY2MWZjMDE1NzM2YzExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZbMqD84vHNIy4BNbJ4RDxLMmRxV8UiCAjtkfjUb8Dk4",
    },
  };

  const response = await axios.request(options);
  return response.data.results;
}

export default searchByReviews;
