import React from "react";
import { useCallback } from "react";
import { ReactComponent as Search } from "../../assets/svg/search.svg";
import "./style.scss";

function SearchInput({ onSearch }) {
  const onChangeHandler = useCallback(
    (v) => {
      onSearch(v.target.value);
    },
    [onSearch]
  );

  return (
    <div className="inputBlock">
      <label htmlFor="Search" className="search" />
      <input
        id="Search"
        type="text"
        placeholder="Search"
        className="input"
        onChange={onChangeHandler}
      />
      <Search />
    </div>
  );
}

export default SearchInput;
