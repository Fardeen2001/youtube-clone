import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";
import AllFilterButtons from "./AllFilterButtons";
import { Link } from "react-router-dom";

const MainContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const getVideoList = async () => {
    try {
      const data = await fetch(process.env.REACT_APP_API_URL);
      const res = await data.json();
      setVideoList(res.items);
    } catch (error) {
      console.error("Error fetching videos:", error.message);
    }
  };
  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <div>
      <AllFilterButtons />
      <div className="flex flex-wrap">
        {" "}
        {videoList.map((item) => (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <VideoContainer videoInfo={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
