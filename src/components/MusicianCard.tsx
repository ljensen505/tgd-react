import React from "react";
import { Card, Image } from "react-bootstrap";

interface MusicianProps {
  id: number;
  name: string;
  bio: string;
  headshot: string;
}

const MusicianCard: React.FC<MusicianProps> = ({ id, name, bio, headshot }) => {
  return (
    <Card className="h-100" id={`musician-card-${id}`}>
      <Card.Img as={Image} thumbnail variant="top" src={headshot} />
      <Card.Body>
        <Card.Title className="display-6 text-end">{name}</Card.Title>
        <Card.Text>{bio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MusicianCard;
