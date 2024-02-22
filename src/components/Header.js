import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../uitls/redux/reducers/hamburgerToggle";

const Header = () => {
  const dispatch = useDispatch();
  const menuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="logo col-span-1 flex justify-evenly items-center">
        <RxHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={menuHandler}
        />
        <img className="h-16" src="/pngegg.png" alt="logo" />
      </div>
      <div className="searchBar col-span-10 flex items-center justify-center">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          id="search"
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
        />
        <button
          type="submit"
          className="border border-gray-400 bg-gray-400 rounded-r-full py-2 px-4"
        >
          <IoMdSearch className="text-2xl" />
        </button>
      </div>
      <div className="profile col-span-1 flex justify-evenly items-center">
        <IoIosNotificationsOutline className="text-3xl" />
        <CgProfile className="text-3xl" />
      </div>
    </div>
  );
};

export default Header;
