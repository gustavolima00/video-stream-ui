import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage  />} />
        <Route path="/videoplayer/:id" element={<VideoPlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
