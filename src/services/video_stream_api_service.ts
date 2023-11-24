import { MediaDetails } from "../models/MediaDetails";
import { Title } from "../models/Title";
import axios from "axios";

const BASE_URL =
  process.env.VIDEO_STREAM_API_BASE_URL || "http://localhost:3000";

export const fetchTitles = async (): Promise<Title[]> => {
  console.log("process.env", process.env);
  console.log(
    "process.env.VIDEO_STREAM_API_BASE_URL",
    process.env.VIDEO_STREAM_API_BASE_URL
  );
  console.log("BASE_URL", BASE_URL);
  const response = await axios.get(`${BASE_URL}/api/v1/titles`);
  console.log("response", response);
  return response.data.titles.map((title: any) => {
    return {
      id: title.id,
      title: title.name ?? "",
      description: title.description ?? "",
      kind: title.kind ?? "movie",
      image: title.image_url,
    };
  });
};

export const fetchMedias = async (
  titleId: number | string
): Promise<MediaDetails[]> => {
  const response = await axios.get(`${BASE_URL}/api/v1/titles/${titleId}`);
  return response.data.medias.map((media: any) => {
    return {
      id: media.id,
      title: media.name ?? "",
      description: media.description ?? "",
      image: media.image_url,
    };
  });
};
