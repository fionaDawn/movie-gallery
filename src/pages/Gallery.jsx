import React from "react";
import { fetchMovies } from "../api/tmdb";
import Grid from "../components/Grid";

const Gallery = () => {
    const [myMovies, setMovies] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            setMovies((await fetchMovies()).results)
        })()
    }, [])
    return <div>
        <Grid list={myMovies} />
    </div>
}

export default Gallery;