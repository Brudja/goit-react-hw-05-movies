import axios from "axios";

const baseApi = async (url="")=>{
    const {data} = await axios.get(url);
    console.log('data', data)
    return data;
}
const BASE_URL = "https://api.themoviedb.org/3";
const APE_KEY = "087b3a8cac1b0930cef8c04cbd521bfb";

export function getTrending () {
    return  baseApi(`${BASE_URL}/trending/movie/day?api_key=${APE_KEY}`)
}