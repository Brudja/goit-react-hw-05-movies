import axios from 'axios';

const baseApi = async (url = '') => {
  const { data } = await axios.get(url);
  return data;
};
const BASE_URL = 'https://api.themoviedb.org/3';
const APE_KEY = '087b3a8cac1b0930cef8c04cbd521bfb';

export function getTrending() {
  return baseApi(`${BASE_URL}/trending/movie/day?api_key=${APE_KEY}`);
}

export function getMovie(qvery) {
  return baseApi(
    `${BASE_URL}/search/movie/?api_key=${APE_KEY}&query=${qvery}&page=1`
  );
}

export function getMovieById(id) {
  return baseApi(`
    ${BASE_URL}/movie/${id}?api_key=${APE_KEY}`);
}


export function getCastById(id){
    return baseApi(`${BASE_URL}/movie/${id}/credits?api_key=${APE_KEY}`)
}
// export const searchApi = async params => {
//     return baseApi(`${BASE_URL}/search/movie/?api_key=${APE_KEY}&query=${params}&page=1`);
//   };
