import React from "react";
const VideoDataCard = ({ videoInfo, imageURL }) => {
  return (
    <>
      {" "}
      <img
        src={imageURL?.url}
        alt={videoInfo?.snippet?.title}
        className="rounded-lg"
      />
      <h2 className="font-bold py-2">{videoInfo?.snippet?.title}</h2>
      <h3>{videoInfo?.snippet?.channelTitle}</h3>
      <h4>
        {`${Intl.NumberFormat("en", { notation: "compact" }).format(
          videoInfo?.statistics?.viewCount
        )} Views`}
      </h4>
    </>
  );
};
const VideoContainer = ({ videoInfo }) => {
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <VideoDataCard
        videoInfo={videoInfo}
        imageURL={videoInfo?.snippet?.thumbnails?.medium}
      />
    </div>
  );
};

export const SuggestionVideoCard = ({ videoInfo }) => {
  return (
    <div className="p-2 m-2 shadow-md">
      <VideoDataCard
        videoInfo={videoInfo}
        imageURL={videoInfo?.snippet?.thumbnails?.medium}
      />
    </div>
  );
};

export default VideoContainer;
