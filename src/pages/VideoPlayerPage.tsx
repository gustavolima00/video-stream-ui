import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function VideoPlayerPage() {
  const [subtitles, setSubtitles] = useState<any[]>([]);
  const [streams, setStreams] = useState<any[]>([]);
  const [selectedLanguage, setSeletedLanguage] = useState<string>("");

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
      <Link to="/">Go back to Home</Link>
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
        width={"100%"}
        height={"auto"}
      />
    </div>
  );
}

export default VideoPlayerPage;
