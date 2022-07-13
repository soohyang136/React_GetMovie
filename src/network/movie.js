import axios from "axios"

export const GetMovieList = (s) => {
    console.info(s);
    return axios.get(`https://fake-movie-database-api.herokuapp.com/api?s=${s}`)
}
