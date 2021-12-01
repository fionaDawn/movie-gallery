import Button from "./Button";
import PropTypes from "prop-types";
import { AiOutlinePlayCircle as PlayIcon } from "react-icons/ai"

const Trailers = ({ info }) => {
    return <>
        {/* let's assume numbe of genre IDs is the number of trailers */}
        <h2 className="font-medium mt-4 border-b border-neutral-4">TRAILERS</h2>
        {info.genre_ids.map((_trailer, i) =>
            <div className="my-2" key={i}><Button icon={PlayIcon} variant="secondary">{`Play trailer ${i + 1}`}</Button></div>)}
    </>
}

Trailers.propTypes = {
    info: PropTypes.array.isRequired
}

export default Trailers;