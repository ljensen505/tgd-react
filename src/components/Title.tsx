import { Col, Container, Row } from "react-bootstrap";

interface GroupProps {
  name: string;
  bio: string;
}

const Title: React.FC<GroupProps> = ({ name, bio }) => {
  return (
    <Container id="about">
      <hr />
      <h1 className="display-1 text-center">{name}</h1>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <p className="text-center">{bio}</p>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Title;
