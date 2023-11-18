export interface VideoDetails {
  title: string;
  description: string;
  videoStreams: VideoStream[];
  subtitleStreams: SubtitleStream[];
}

export interface VideoStream {
  url: string;
  language: string;
  name: string;
}

export interface SubtitleStream {
  url: string;
  language: string;
  name: string;
}

const BASE_URL = "http://192.168.49.2:30010";

export const sampleVideoDetails: VideoDetails = {
  title: "The Hofstadter Insufficiency",
  description: "The big bang theory - Season 7, Episode 1",
  videoStreams: [
    {
      url: `${BASE_URL}/get-file?file_path=968565e6-61f6-45c6-ab68-963eb2c04428%2fconverted_videos%2ftbbt_01_und.mp4`,
      language: "en",
      name: "Ingles",
    },
    {
      url: `${BASE_URL}/get-file?file_path=968565e6-61f6-45c6-ab68-963eb2c04428%2fconverted_videos%2ftbbt_01_pt.mp4`,
      language: "pt",
      name: "Portugues",
    },
  ],
  subtitleStreams: [
    {
      url: `${BASE_URL}/get-file?file_path=968565e6-61f6-45c6-ab68-963eb2c04428%2fconverted_videos%2ftbbt_01_pt.vtt`,
      language: "pt",
      name: "Portugues",
    },
  ],
};
