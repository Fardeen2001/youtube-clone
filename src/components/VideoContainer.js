import React from "react";

const VideoContainer = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { title, thumbnails, channelTitle } = snippet;
  return (
    <div>
      <img src={thumbnails?.default?.url} alt={title} />
      <h2>{title}</h2>
      <h3>{channelTitle}</h3>
      <h4>
        {Intl.NumberFormat("en", { notation: "compact" }).format(
          statistics?.viewCount
        )}
      </h4>
    </div>
  );
};

export default VideoContainer;