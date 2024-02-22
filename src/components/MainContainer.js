import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";
import AllFilterButtons from "./AllFilterButtons";

const MainContainer = () => {
  const [videoList, setVideoList] = useState([]);

  const getVideoList = async () => {
    try {
      const data = await fetch(process.env.REACT_APP_API_URL, {
        headers: { "Content-Type": "application/json" },
      });
      const res = await data.json();
      console.log(res);
      if (!res.ok) {
        throw new Error("Failed to fetch videos");
      }
      setVideoList(res.items);
    } catch (error) {
      console.error("Error fetching videos:", error.message);
    }
  };
  useEffect(() => {
    console.log("useEffect triggered");
    getVideoList();
  }, []);

  return (
    <div className="">
      <AllFilterButtons />

      <VideoContainer videoInfo={videoList[0]} />
    </div>
  );
};

export default MainContainer;
