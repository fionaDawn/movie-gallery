const TMDB_URL = `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

const fetchFromTmdb = () => fetch(TMDB_URL)
    .then(response => response.json())

export const fetchMovies = () =>
    fetchFromTmdb()
        .then(data => data)

export const fetchMovieById = (id) =>
    fetchFromTmdb()
        .then(data => data.results.find(v => v.id === parseInt(id)))