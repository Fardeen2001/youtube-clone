import React from "react";

const FilterButton = ({ name }) => {
  return (
    <>
      <button className="bg-gray-300 font-semibold mx-2 px-3 py-1 rounded-lg">
        {name}
      </button>
    </>
  );
};

export default FilterButton;
