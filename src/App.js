import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Thankyou from "./Thankyou";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ratingcomponent/" element={<Home />} />
        <Route path="/ratingcomponent/submit/:selectedNumber" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}
