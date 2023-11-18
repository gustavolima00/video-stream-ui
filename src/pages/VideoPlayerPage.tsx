import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

function VideoPlayerPage() {
  const [subtitles, setSubtitles] = useState<any[]>([]);
  const [streams, setStreams] = useState<any[]>([]);
  const [selectedLanguage, setSeletedLanguage] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    setStreams([
      {
        default: true,
        label: "Ingles",
        language: "en",
        link: "http://localhost:5000/get-file?file_path=968565e6-61f6-45c6-ab68-963eb2c04428%2fconverted_videos%2ftbbt_01_und.mp4",
      },
      {
        default: false,
        label: "Portugues",
        language: "pt",
        link: "http://localhost:5000/get-file?file_path=968565e6-61f6-45c6-ab68-963eb2c04428%2fconverted_videos%2ftbbt_01_pt.mp4",
      },
    ]);

    setSubtitles([
      {
        kind: "subtitles",
        label: "Portugues",
        srcLang: "pt",
        src: "http://localhost:5000/get-file?file_path=968565e6-61f6-45c6-ab68-963eb2c04428%2fconverted_videos%2ftbbt_01_pt.vtt",
      },
    ]);

    setSeletedLanguage("en");
  });

  function getVideoUrl() {
    const stream = streams.find(
      (stream) => stream.language === selectedLanguage
    );
    return stream?.link;
  }

  return (
    <div className="App">
      <h1> Video player: {id}</h1>
      <button
        onClick={() => {
          setSeletedLanguage("en");
        }}
      >
        {" "}
        Ingles
      </button>

      <button
        onClick={() => {
          setSeletedLanguage("pt");
        }}
      >
        {" "}
        Portugues
      </button>

      <ReactPlayer
        config={{
          file: {
            attributes: {
              crossOrigin: "true",
            },
            tracks: [...subtitles],
          },
        }}
        url={getVideoUrl()}
        controls={true}
        width={900}
        height={"auto"}
      />
    </div>
  );
}

export default VideoPlayerPage;
