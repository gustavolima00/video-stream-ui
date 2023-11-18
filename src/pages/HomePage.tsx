import { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sampleMediaList, Media } from "../models/Media";

function HomePage() {
  const [medias, setMedias] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchMedias = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return sampleMediaList;
  };

  useEffect(() => {
    fetchMedias()
      .then((medias) => {
        setMedias(medias);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  });

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          {error && <div>{error}</div>}
          {!error && (
            <div>
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
                      {media.image && (
                        <Card.Img variant="top" src={media.image} />
                      )}
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
            </div>
          )}
        </div>
      )}
    </Container>
  );
}

export default HomePage;
