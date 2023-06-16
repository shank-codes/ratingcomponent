import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Thankyou from "./Thankyou";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
