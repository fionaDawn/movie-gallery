import { useNavigate } from 'react-router-dom';
import Button from "./Button";
import PropTypes from "prop-types";

import {
    AiOutlineArrowLeft as BackIcon,
    AiOutlineMore as MoreIcon
} from 'react-icons/ai';

const Header = ({ canGoBack, title }) => {
    const navigate = useNavigate();
    return <div className="flex items-center bg-neutral-1 px-3">
        {canGoBack && <Button data-testid="back-button" onClick={() => navigate(-1)} icon={BackIcon} />}
        <h1 className="flex-1 text-xl font-bold text-white px-1 py-4">{title}</h1>
        <Button className="flex-1" icon={MoreIcon} />
    </div>
}

Header.propTypes = {
    canGoBack: PropTypes.bool,
    title: PropTypes.string.isRequired
}

export default Header;