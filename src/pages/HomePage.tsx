import { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  const [medias, setMedias] = useState<any[]>([]);
  useEffect(() => {
    setMedias([
      {
        id: 1,
        title: "The Big Bang Theory",
        description: "Season 1",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 2,
        title: "The Big Bang Theory",
        description: "Season 2",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 3,
        title: "The Big Bang Theory",
        description: "Season 3",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 4,
        title: "The Big Bang Theory",
        description: "Season 4",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 5,
        title: "The Big Bang Theory",
        description: "Season 5",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 6,
        title: "The Big Bang Theory",
        description: "Season 6",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 7,
        title: "The Big Bang Theory",
        description: "Season 7",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 8,
        title: "The Big Bang Theory",
        description: "Season 8",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 9,
        title: "The Big Bang Theory",
        description: "Season 9",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 10,
        title: "The Big Bang Theory",
        description: "Season 10",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "series",
      },
      {
        id: 11,
        title: "A bela e a fera",
        description: "",
        image: "https://i.imgur.com/3n9xOxt.jpg",
        kind: "movie",
      },
    ]);
  });

  return (
    <Container>
      <Form className="my-4">
        <Form.Group controlId="search">
          <Form.Control
            type="search"
            placeholder="Search movies and series..."
          />
        </Form.Group>
      </Form>
      <Row>
        {medias.map((media) => (
          <Col sm={12} md={6} lg={4} key={media.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={media.image} />
              <Card.Body>
                <Card.Title>{media.title}</Card.Title>
                <Card.Text>{media.description}</Card.Text>
                <Link to={`/details/${media.id}`}>
                  <Button variant="primary">Watch</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
