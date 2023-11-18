import { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function DetailsPage() {
  const [medias, setMedias] = useState<any[]>([]);

  const { id } = useParams();

  useEffect(() => {
    setMedias([
      {
        id: 1,
        title: "Episódio 1",
        description: "Piloto",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 2,
        title: "Episódio 2",
        description: "Episódio 2",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 3,
        title: "Episódio 3",
        description: "Episódio 3",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 4,
        title: "Episódio 4",
        description: "Episódio 4",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 5,
        title: "Episódio 5",
        description: "Episódio 5",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 6,
        title: "Episódio 6",
        description: "Episódio 6",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 7,
        title: "Episódio 7",
        description: "Episódio 7",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 8,
        title: "Episódio 8",
        description: "Episódio 8",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 9,
        title: "Episódio 9",
        description: "Episódio 9",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 10,
        title: "Episódio 10",
        description: "Episódio 10",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
      {
        id: 11,
        title: "Episódio 11",
        description: "Episódio 11",
        image: "https://i.imgur.com/3n9xOxt.jpg",
      },
    ]);
  });

  return (
    <Container>
      <h1>Detalhes: {id}</h1>
      <Row>
        {medias.map((media) => (
          <Col key={media.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={media.image} />
              <Card.Body>
                <Card.Title>{media.title}</Card.Title>
                <Card.Text>{media.description}</Card.Text>
                <Link to={`/videoplayer/${media.id}`}>
                  <Button variant="primary">Assistir</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DetailsPage;
