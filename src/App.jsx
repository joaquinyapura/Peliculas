import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { MovieDetail } from "./Pages/MovieDetail";
import { Layout } from "./Views/Layout";
import { Movies } from "./Pages/Movies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/movies" element={<Movies />} />
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
