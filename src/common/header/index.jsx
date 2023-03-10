import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
import { ReactComponent as SearchHeader } from "../../assets/svg/searchHeader.svg";
import { getUserListAction } from "../../redux/actions/actionUserList";
import "./style.scss";

function Header() {
  const dispatch = useDispatch();
  const [close, setClose] = useState(true);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    setTextInput("");
  }, []);

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img src={icons.logo} alt="logo" />
        </Link>
        <h1 className="header__title">Git hub searcher</h1>
        {close ? (
          <div
            onClick={() => {
              setClose(!close);
            }}
          >
            <SearchHeader />
          </div>
        ) : (
          <div className="header__searchBlock" id="searchInput">
            <label htmlFor="Search" className="search" />
            <input
              onBlur={() => textInput.length < 1 && setClose(true)}
              id="Search"
              type="text"
              placeholder="Search"
              className="header__inputSearch"
              onChange={(v) => {
                setTextInput(v.target.value);
                dispatch(getUserListAction(1, textInput));
              }}
            />

            <SearchHeader
              onClick={() => {
                setClose(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
