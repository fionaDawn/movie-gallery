import { useEffect, useState } from "react";
import { fetchMovieById } from "../api/tmdb";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import Trailers from "../components/Trailers";

const Movie = () => {
    const { pathname } = useLocation()
    const [info, setInfo] = useState(null)
    useEffect(() => {
        (async () => setInfo(await fetchMovieById(pathname.replace("/movie/", ""))))()
    }, [pathname])
    return info ? (<div className="text-neutral-3 text-sm leading-6">
        <h1 className="bg-neutral-2 text-white font-medium text-xl py-4 px-5">
            {info.original_title}
        </h1>
        <div className="px-6">
            <div className="flex my-6">
                <img className="flex-initial w-5/12"
                    src={`https://image.tmdb.org/t/p/w185${info.poster_path}`}
                    alt={info.title} />
                <div className="flex-auto relative ml-4 text-neutral-1">
                    <h1 className="text-xl">{info.release_date.split("-")[0]}</h1>
                    <h2 className="text-sm italic leading-6">120 mins</h2>
                    <div className="absolute bottom-0 w-full">
                        <h2 className="text-sm font-bold mb-4">{`${info.vote_average} / 10`}</h2>
                        <Button
                            variant="primary">
                            Add to Favorite
                        </Button>
                    </div>
                </div>
            </div>
            <p >{info.overview}</p>
            <Trailers info={info} />
        </div>
    </div >) : null;
}

export default Movie;