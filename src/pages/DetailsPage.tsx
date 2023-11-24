import { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { MediaDetails, sampleMediaList } from "../models/MediaDetails";
import { fetchMedias } from "../services/video_stream_api_service";

function DetailsPage() {
  const [medias, setMedias] = useState<MediaDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const { id } = useParams();

  useEffect(() => {
    if(id === undefined){
      setError("Id não informado");
      setLoading(false);
      return;
    }

    fetchMedias(id)
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
          )}
        </div>
      )}
    </Container>
  );
}

export default DetailsPage;
