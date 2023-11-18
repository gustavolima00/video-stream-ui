import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/videoplayer">Go to Video Player</Link>
    </div>
  );
}

export default HomePage;
