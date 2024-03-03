import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { closeMenu } from "../uitls/redux/reducers/hamburgerToggle";
import { SuggestionVideoCard } from "./VideoContainer";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [videoList, setVideoList] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const paramQuery = searchParams.get("v");
  // useEffect(() => {
  //   paramQuery = ;
  // }, [searchParams]);
  useEffect(() => {
    dispatch(closeMenu());
    getVideoList();
    // eslint-disable-next-line
  }, []);
  const getVideoList = async () => {
    try {
      const data = await fetch(process.env.REACT_APP_API_URL);
      const res = await data.json();
      setVideoList(res.items);
    } catch (error) {
      console.error("Error fetching videos:", error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="py-6 px-10">
        <iframe
          width="800"
          height="400"
          className="rounded-xl"
          src={`https://www.youtube.com/embed/${paramQuery}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; start"
          allowFullScreen
        ></iframe>
        <div className="w-[800px]">
          <CommentsContainer videoId={paramQuery} />
        </div>
      </div>
      <div className="py-1 mt-5 mx-5 md:mx-0 px-2 border border-black rounded-lg h-screen overflow-y-auto">
        <h1 className="font-bold">Suggestions</h1>
        {videoList.map((item) => (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <SuggestionVideoCard videoInfo={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
