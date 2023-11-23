// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
// import Spells from './pages/Spells';
// import Houses from './pages/Houses';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            {/* <li>
              <Link to="/spells">Spells</Link>
            </li>
            <li>
              <Link to="/houses">Houses</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
