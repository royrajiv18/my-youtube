import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json?.items);
    setVideos(json?.items);
  };

  if (!videos) return null;

  return (
    <div>
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideoContainer;
