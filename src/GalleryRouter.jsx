import {
    Routes as Switch,
    Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./pages/Gallery";
import Movie from "./pages/Movie";

// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const GalleryRouter = () => {
    //   A <Switch> looks through all its children <Route>
    //   elements and renders the first one whose path
    //   matches the current URL. Use a <Switch> any time
    //   you have multiple routes, but you want only one
    //   of them to render at a time

    return (
        <Switch>
            <Route path="/"
                element={<Layout title="Pop Movies"
                    component={Gallery} />} />
            <Route path="/movie/:id"
                element={<Layout
                    canGoBack
                    title="Movie details"
                    component={Movie} />} />
        </Switch>
    );
}

export default GalleryRouter;