import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./pages.css";

function Spells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/spells");
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        const fetchedData = await response.json();
        setSpells(fetchedData);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };

    fetchSpells();
  }, []);

  return (
    <div>
      <h2>Spells</h2>
      <ul>
        {spells.map((spell) => (
          <div className="cards" key={spell._id}>
            <h2>{spell.name}</h2>
            <p>Description: {spell.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Spells;
