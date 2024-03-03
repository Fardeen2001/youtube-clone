import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../uitls/redux/reducers/hamburgerToggle";
import { cachedResult } from "../uitls/redux/reducers/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [suggestionsText, setSuggestionsText] = useState("");
  const [suggestionsArray, setSuggestionsArray] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const cachedSearchResults = useSelector((state) => state.search.cachedData);
  const menuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSearchResults[suggestionsText]) {
        setSuggestionsArray(cachedSearchResults[suggestionsText]);
      } else {
        getSuggestion();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [suggestionsText]);
  const getSuggestion = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_YOUTUBE_SEARCH_API}${suggestionsText}`
      );

      if (res.ok) {
        const data = await res.json();
        setSuggestionsArray(data[1]);
        dispatch(cachedResult({ [suggestionsText]: data[1] }));
      } else {
        throw new Error("data not found");
      }
    } catch (error) {
      console.log(error);
    }
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
          value={suggestionsText}
          onChange={(e) => setSuggestionsText(e.target.value)}
          onFocus={() => {
            setShowSuggestion(true);
          }}
          onBlur={() => {
            setShowSuggestion(false);
          }}
        />
        <button
          type="submit"
          className="border border-gray-400 bg-gray-400 rounded-r-full py-2 px-4"
        >
          <IoMdSearch className="text-2xl" />
        </button>
        {showSuggestion && (
          <div className="absolute bg-white w-[30rem] top-16 shadow-lg rounded-lg">
            <ul>
              {suggestionsArray.map((suggestion) => (
                <li className="flex items-center hover:bg-gray-100 hover:rounded-lg p-2">
                  <IoMdSearch className="text-xl mr-1" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="profile col-span-1 flex justify-evenly items-center">
        <IoIosNotificationsOutline className="text-3xl" />
        <CgProfile className="text-3xl" />
      </div>
    </div>
  );
};

export default Header;
