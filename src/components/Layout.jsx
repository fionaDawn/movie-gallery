import PropTypes from "prop-types";
import Header from "./Header";

const Layout = ({ component: Component, ...rest }) => {
    return <div>
        <Header {...rest} />
        <Component />
    </div>
}

Layout.propTypes = {
    Component: PropTypes.node
}

export default Layout;