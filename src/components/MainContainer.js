import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";
import AllFilterButtons from "./AllFilterButtons";
import { YOUTUBE_API } from "../uitls/constants";

const MainContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getVideoList();
  }, []);
  const getVideoList = async () => {
    const data = await fetch(YOUTUBE_API);
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
