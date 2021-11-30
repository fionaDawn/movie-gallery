import {
  BrowserRouter as Router
} from "react-router-dom";
import GalleryRouter from "./GalleryRouter";

function App() {
  return (
    <Router>
      <GalleryRouter />
    </Router>
  );
}

export default App;
