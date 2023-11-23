import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./pages.css";

function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters/house/gryffindor"
        );
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        const fetchedData = await response.json();
        setHouses(fetchedData);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div>
      <h2>Houses</h2>
      <ul>
        {houses.map((house) => (
          <div className="cards" key={house._id}>
            <h2>{house.name}</h2>
            <p>Specie: {house.species}</p>
            <p>Patronus: {house.patronus}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Houses;
