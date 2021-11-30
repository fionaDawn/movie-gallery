const { default: Header } = require("./Header")

const Layout = ({ component: Component, ...rest }) => {
    return <div>
        <Header {...rest} />
        <Component />
    </div>
}

export default Layout;