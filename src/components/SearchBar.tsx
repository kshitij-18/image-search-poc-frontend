import React from "react";

type SearchBarPropTypes = {
  searchValue: string,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({ searchValue, setSearchValue }: SearchBarPropTypes) => {
  return (
    <input
      value={searchValue}
      className="h-9 w-1/2 my-5 p-2
     bg-gray-500
      appearance-none rounded-lg focus:outline-none placeholder:text-slate-200 text-white caret-blue-700"
      placeholder="Search"
      onChange={e => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBar;
