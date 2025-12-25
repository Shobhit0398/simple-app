const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  trending: `/trending/movie/week?api_key=${API_KEY}`,
  popular: `/movie/popular?api_key=${API_KEY}`,
  topRated: `/movie/top_rated?api_key=${API_KEY}`,
};

export default requests;
