export const fetchMovies = () =>
    fetch("http://api.themoviedb.org/3/movie/popular?api_key=ee0d687934a0023fcf44a1147d95146d")
        .then(response => response.json())
        .then(data => data)

export const fetchMovieById = (id) => fetch("http://api.themoviedb.org/3/movie/popular?api_key=ee0d687934a0023fcf44a1147d95146d")
    .then(response => response.json())
    .then(data => data.results.find(v => v.id === parseInt(id)))