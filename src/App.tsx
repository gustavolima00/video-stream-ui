import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPlayerPage from "./pages/VideoPlayerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videoplayer" element={<VideoPlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
