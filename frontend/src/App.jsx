import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Uploadpost from "./pages/Uploadpost";
import ViewPost from "./pages/ViewPost";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Uploadpost />} />
          <Route path="/viewPost" element={<ViewPost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
