import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { VideoDetails, sampleVideoDetails } from "../models/VideoDetails";
import { Spinner, Button, Container, Row, Col, Card } from "react-bootstrap";

function VideoPlayerPage() {
  const [videoDetails, setVideoDetails] = useState<VideoDetails>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [videoSource, setVideoSource] = useState<string>();

  const { id } = useParams();

  const fetchVideoDetails = async (id: string | undefined) => {
    if (id === undefined) {
      throw new Error("Id is undefined");
    }
    console.log("id", id);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return sampleVideoDetails;
  };

  useEffect(() => {
    fetchVideoDetails(id)
      .then((videoDetails) => {
        setVideoDetails(videoDetails);
        if (videoDetails?.videoStreams?.length > 0) {
          setVideoSource(videoDetails.videoStreams[0].url);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const changeVideoSource = (url: string) => {
    setVideoSource(url);
  };

  return (
    <Container className="my-4">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          {error && <div>{error}</div>}
          {videoDetails && (
            <div>
              <Card className="text-center mb-4">
                <Card.Header>{videoDetails.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{videoDetails.description}</Card.Title>
                </Card.Body>
              </Card>

              <Row>
                <Col>
                  {videoDetails.videoStreams.map((video, index) => (
                    <Button
                      key={index}
                      variant="primary"
                      onClick={() => changeVideoSource(video.url)}
                      className="me-2 mb-2"
                    >
                      {video.name}
                    </Button>
                  ))}
                </Col>
              </Row>

              <ReactPlayer
                config={{
                  file: {
                    attributes: {
                      crossOrigin: "true",
                    },
                    tracks: videoDetails.subtitleStreams.map((subtitle) => ({
                      kind: "subtitle",
                      label: subtitle.name,
                      srcLang: subtitle.language,
                      src: subtitle.url,
                    })),
                  },
                }}
                url={videoSource}
                controls={true}
                width={"100%"}
                height={"auto"}
              />
            </div>
          )}
        </div>
      )}
    </Container>
  );
}

export default VideoPlayerPage;
