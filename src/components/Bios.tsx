import { useState, useEffect } from "react";
import MusicianCard from "./MusicianCard";
import axios from "axios";
import { Col, Container } from "react-bootstrap";

interface Musician {
  id: number;
  name: string;
  bio: string;
  headshot: string;
}

function MusicianBios() {
  const [musicians, setMusicians] = useState<Musician[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/musicians`)
      .then((res) => {
        setMusicians(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container id="musicians">
      <h1 className="display-4 text-end">Members</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {musicians.map((m) => (
          <Col key={`musician-card-${m.id}`}>
            <MusicianCard
              id={m.id}
              name={m.name}
              bio={m.bio}
              headshot={m.headshot}
            />
          </Col>
        ))}
      </div>
    </Container>
  );
}

export default MusicianBios;
