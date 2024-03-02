import React from "react";
import { IoIosHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { BiSolidVideos } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.hamburgerToggle.isMenuOpen);
  const isAllMenuClose = useSelector((state) => state.hamburgerToggle.allMenu);

  if (!isMenuOpen)
    return (
      <div className={isAllMenuClose ? "hidden" : ""}>
        <ul className="m-5">
          <li className="my-5">
            <a href="/" className="flex flex-col justify-center items-center">
              <IoIosHome className="home text-2xl" />
              <label htmlFor="home">Home</label>
            </a>
          </li>
          <li className="my-5">
            <a href="/" className="flex flex-col justify-center items-center">
              <SiYoutubeshorts className="Shorts text-2xl" />
              <label htmlFor="Shorts">Shorts</label>
            </a>
          </li>
          <li className="my-5">
            <a href="/" className="flex flex-col justify-center items-center">
              <MdSubscriptions className="Sub text-2xl" />
              <label htmlFor="Sub">Subscription</label>
            </a>
          </li>
          <li className="my-5">
            <a href="/" className="flex flex-col justify-center items-center">
              <BiSolidVideos className="video text-2xl" />
              <label htmlFor="video">You</label>
            </a>
          </li>
        </ul>
      </div>
    );

  return (
    <div className="w-1/5 absolute z-50 bg-white shadow-lg">
      <ul className="m-5">
        <li className="my-4 cursor-pointer">
          {" "}
          <a href="/" className="flex p-2 bg-gray-200 rounded-xl w-full">
            <IoIosHome className=" text-2xl mr-3" />
            <span>Home</span>{" "}
          </a>
        </li>
        <li className="my-4 cursor-pointer">
          <a href="/" className="flex p-2 hover:bg-gray-200 rounded-xl w-full">
            <SiYoutubeshorts className="short text-2xl mr-3" />
            <span>Shorts</span>
          </a>
        </li>
        <li className="my-4 cursor-pointer">
          <a href="/" className="flex p-2 hover:bg-gray-200 rounded-xl w-full ">
            <MdSubscriptions className=" text-2xl mr-3" />
            <span>Subscriptions</span>
          </a>
        </li>
      </ul>
      <hr />
      <ul className="m-5">
        <h2 className="font-bold text-lg">You</h2>

        <li className="my-4 cursor-pointer">
          {" "}
          <a href="/" className="flex p-2 hover:bg-gray-200 rounded-xl w-full">
            <CgProfile className="text-2xl mr-3" />
            <span>Your Channel</span>{" "}
          </a>
        </li>
        <li className="my-4 cursor-pointer">
          <a href="/" className="flex p-2 hover:bg-gray-200 rounded-xl w-full ">
            <GoHistory className=" text-2xl mr-3" />
            <span>History</span>
          </a>
        </li>
        <li className="my-4 cursor-pointer">
          <a href="/" className="flex p-2 hover:bg-gray-200 rounded-xl w-full">
            <CiYoutube className="text-2xl mr-3" />
            <span>your Videos</span>
          </a>
        </li>
        <li className="my-4 cursor-pointer">
          <a href="/" className="flex p-2 hover:bg-gray-200 rounded-xl w-full">
            <MdOutlineWatchLater className=" text-2xl mr-3" />
            <span>Watch Later</span>
          </a>
        </li>
        <li className="my-4 cursor-pointer">
          <a href="/" className="flex p-2 hover:bg-gray-200 rounded-xl w-full">
            <FaAngleDown className=" text-2xl mr-3" />
            <span>See More</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
