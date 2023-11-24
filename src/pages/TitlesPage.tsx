import { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sampleTitleList, Title } from "../models/Title";
import { fetchTitles } from "../services/video_stream_api_service";

function TitlesPage() {
  const [titles, setTitles] = useState<Title[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchTitles()
      .then((titles) => {
        setTitles(titles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

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
                {titles.map((title) => (
                  <Col sm={12} md={6} lg={4} key={title.id}>
                    <Card className="mb-4">
                      {title.image && (
                        <Card.Img variant="top" src={title.image} />
                      )}
                      <Card.Body>
                        <Card.Title>{title.title}</Card.Title>
                        <Card.Text>{title.description}</Card.Text>
                        <Link to={`/details/${title.id}`}>
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

export default TitlesPage;
