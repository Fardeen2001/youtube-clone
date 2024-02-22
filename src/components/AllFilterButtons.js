import React from "react";
import FilterButton from "./FilterButton";
const filterList = [
  "All",
  "Mixes",
  "Music",
  "Movies",
  "Comedy",
  "Live",
  "Games",
  "Dawah",
  "Deen",
  "Drama",
  "New to you",
  "Watched",
];
const AllFilterButtons = () => {
  return (
    <div className="my-5">
      {filterList.map((info, index) => (
        <FilterButton key={index} name={info} />
      ))}
    </div>
  );
};

export default AllFilterButtons;
