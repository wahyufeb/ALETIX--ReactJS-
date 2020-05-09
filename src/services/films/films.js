const SERVER = "http://localhost:5000/v1/";
const MOVIEDB = "https://api.themoviedb.org/3/"
const API_KEY = "8eaebc90eb62b17298e577b8f6da8061";

// The MovieDB API
export const serviceFilmPopuler = `${MOVIEDB}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const serviceSerialTv = `${MOVIEDB}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const serviceIndoFilm = `${MOVIEDB}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=ID`;

//  ALETIX API
export const serviceFilmToday = `${SERVER}movie/schedule/`

// Method Call
export const serviceDetailFilm = (id) => {
    return `${SERVER}movie/schedule/detail/${id}`
} 

