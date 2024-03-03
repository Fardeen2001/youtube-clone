import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleReplyMenu } from "../uitls/redux/reducers/hamburgerToggle";
const Comment = ({ imageUrl, userName, commentData, likeCount, replies }) => {
  const isReplyMenuOpen = useSelector(
    (state) => state.hamburgerToggle.replyMenu
  );
  const dispatch = useDispatch();
  const replyMenuHandler = () => {
    dispatch(toggleReplyMenu());
  };
  return (
    <div className="flex m-2">
      <img src={imageUrl} alt={userName} className="w-12 h-12 rounded-full" />
      <div className="m-2">
        <span className="bg-gray-300 rounded-2xl font-bold p-1 text-xs">
          {userName}
        </span>
        <h3>{commentData}</h3>
        <span className="flex items-center">
          <BiLike /> {likeCount}
        </span>
        {replies?.comments?.length > 0 && (
          <>
            <button onClick={replyMenuHandler}>
              <span className="text-blue-600 flex items-center">
                <FaCaretDown /> {replies?.comments?.length} replies
              </span>
            </button>
            {isReplyMenuOpen && (
              <ReplyContainer replyData={replies?.comments} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
const ReplyContainer = ({ replyData }) => {
  return (
    replyData &&
    replyData.map((data) => (
      <Comment
        key={data.id}
        imageUrl={data?.snippet?.authorProfileImageUrl}
        userName={data?.snippet?.authorDisplayName}
        commentData={data?.snippet?.textDisplay}
        likeCount={data?.snippet?.likeCount}
        replies={data?.replies}
      />
    ))
  );
};
const CommentsContainer = ({ videoId }) => {
  const [videoCommentList, setVideoCommentList] = useState([]);
  useEffect(() => {
    getVideoCommentsList();
  }, [videoId]);
  const getVideoCommentsList = async () => {
    try {
      const data = await fetch(
        process.env.REACT_APP_YOUTUBE_COMMENT_API + videoId
      );
      const res = await data.json();
      setVideoCommentList(res.items);
    } catch (error) {
      console.error("Error fetching videos:", error.message);
    }
  };
  return (
    <div className="mt-5">
      <h1 className="font-bold text-2xl">Comments</h1>
      {videoCommentList.map((comment) => (
        <Comment
          key={comment.id}
          data={comment}
          imageUrl={
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
          }
          userName={
            comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
          }
          commentData={comment?.snippet?.topLevelComment?.snippet?.textDisplay}
          likeCount={comment?.snippet?.topLevelComment?.snippet?.likeCount}
          replies={comment?.replies && comment?.replies}
        />
      ))}
    </div>
  );
};

export default CommentsContainer;
