import PropTypes from "prop-types";

const Grid = ({ list }) => {
    return <div className="grid grid-cols-2">
        {list.map(movie =>
            <a className="cursor-pointer"
                href={`movie/${movie.id}`}
                key={movie.title}>
                <img
                    className="w-full"
                    src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                    alt={movie.title} />
            </a>
        )}
    </div >
}

Grid.propTypes = {
    list: PropTypes.array.isRequired
}

export default Grid;