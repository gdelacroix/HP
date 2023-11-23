// src/pages/Characters.jsx
import { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultImg from "../assets/default/default.png";
import "./pages.css";
function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters"
        ); // Utilisation du chemin local
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        const fetchedData = await response.json();
        setCharacters(fetchedData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      {/* <ul>
        {characters.map((data, index) => (
          <div className="cards" key={index}>
            <img src={data.image} alt={data.name} />
            <h2>Nom: {data.name}</h2>
            <h3>Acteur: {data.actor}</h3>
            <p>Maison: {data.house}</p>
            <p> Espèces: {data.species}</p>
            <p>Date d&apos;anniversaire: {data.dateOfBirth}</p>
            <p>Couleur des yeux: {data.eyeColour}</p>
            <p>Couleur de cheveux: {data.hairColour}</p>
            <p>Genre: {data.gender}</p>
            <p>Patronus: {data.patronus}</p>
            <p>Ascendance : {data.ancestry}</p>
          </div>
        ))}
      </ul> */}
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {characters.map((data, index) => (
          <Col key={index}>
            <Card className="cards">
              <Card.Img
                variant="top"
                src={data.image ? data.image : defaultImg}
                alt={data.name}
              />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>Acteur: {data.actor}</Card.Text>
                <Card.Text>Maison: {data.house}</Card.Text>
                <Card.Text>Espèces: {data.species}</Card.Text>
                <Card.Text>
                  Date d&apos;anniversaire: {data.dateOfBirth}
                </Card.Text>
                <Card.Text>Couleur des yeux: {data.eyeColour}</Card.Text>
                <Card.Text>Couleur de cheveux: {data.hairColour}</Card.Text>
                <Card.Text>Genre: {data.gender}</Card.Text>
                <Card.Text>Patronus: {data.patronus}</Card.Text>
                <Card.Text>Ascendance : {data.ancestry}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Characters;
