import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";
import AllFilterButtons from "./AllFilterButtons";

const MainContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getVideoList();
  }, []);
  const getVideoList = async () => {
    console.log(process.env.YOUTUBE_API);
    const data = await fetch(process.env.YOUTUBE_API);
    const res = await data.json();
    setVideoList(res.items);
  };
  return (
    <div className="">
      <AllFilterButtons />

      <VideoContainer videoInfo={videoList[0]} />
    </div>
  );
};

export default MainContainer;
