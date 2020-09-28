const MOVIE_URL = "https://api.themoviedb.org/3";
const API_KEY = "04c35731a5ee918f014970082a0088b1";

const fetchApi = (endpoint, {pageNumber = 1, sortBy = "popularity.decs"}) => {
    return fetch(MOVIE_URL + endpoint + "?page=" + pageNumber + "&sort_by=" + sortBy + "&api_key=" + API_KEY)
        .then(res => res.json())
}

const getMoviesList = () => {
    return fetchApi(
        "/discover/movie",
        {
            pageNumber: 1,
            sortBy: "popularity.desc"
        }
    )
}

const getMoviesGenre = () => {
    return fetchApi(
        "/genre/movie/list",
        {
            pageNumber: 1,
            sortBy: "popularity.desc"
        }
    )
}
