import axios from "axios";

async function searchMovie(searchword) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: `${searchword}`,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGE2YzcxYjRkYTgxYjUzMDRlZTIyYjg0M2UxNjZjYiIsInN1YiI6IjY0NmUwZmYwOTY2MWZjMDE1NzM2YzExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZbMqD84vHNIy4BNbJ4RDxLMmRxV8UiCAjtkfjUb8Dk4",
    },
  };

  const response = await axios.request(options);
  return response.data.results;
}

export default searchMovie;
