// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Spells from "./pages/spells";
import Houses from "./pages/houses";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/Spells">Spells</Link>
            </li>
            <li>
              <Link to="/Houses">Houses</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/Spells" element={<Spells />} />
          <Route path="/Houses" element={<Houses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
