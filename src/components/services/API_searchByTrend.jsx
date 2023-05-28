import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "e0a6c71b4da81b5304ee22b843e166cb";

async function search() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?&api_key=${API_KEY}`
  );
  return response.data.results;
}

export default search;
