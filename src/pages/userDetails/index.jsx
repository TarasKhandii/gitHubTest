import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DropMenu from "../../components/dropMenu";
import Repo from "../../components/repo";
import SearchInput from "../../components/searchInput";
import Avatar from "../../assets/image/Frame555.png";
import "./style.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getInfoUserAction,
  searchRepos,
  sortRepos,
} from "../../redux/actions/actionInfoUser";
import { Audio } from "react-loader-spinner";
import moment from "moment";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const { info, loading, repos, filterRepos } = useSelector(
    (state) => state.infoUserReducer
  );

  // const [textInput, setTextInput] = useState("");
  // console.log("wad", textInput);

  (!filterRepos ? repos : filterRepos).map((item, index) => {
    return item, index;
  });

  function checkSortHandler(value) {
    dispatch(sortRepos(value));
  }
  function searchReposHandler(value) {
    // setTextInput(value);
    dispatch(searchRepos(value));
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoUserAction(id));
  }, []);

  return loading ? (
    <div className="loader">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
      />
    </div>
  ) : (
    <>
      <div className="mainBlock">
        <div className="userDetails">
          <img
            className="userDetails__image"
            src={info.avatar_url ? info.avatar_url : Avatar}
            alt="avatar"
          />
          <div className="userDetails__block">
            <div>
              <p className="userDetails__prevTitle">User Name:</p>
              <h1 className="userDetails__title">{info.name}</h1>
            </div>
            <div>
              <p className="userDetails__prevTitle">Location:</p>
              <h1 className="userDetails__title">{info.location}</h1>
            </div>
            <div>
              <p className="userDetails__prevTitle">Join date:</p>
              <h1 className="userDetails__title">
                {moment(info.created_at).format("MMM Do YY")}
              </h1>
            </div>
            <div>
              <p className="userDetails__prevTitle">Followers</p>
              <h1 className="userDetails__title">{info.followers}</h1>
            </div>
          </div>
        </div>
        <div className="rightBlock">
          <div className="topRightBlock">
            <DropMenu onCheck={checkSortHandler} arr={["Rating", "Name"]} />
            <SearchInput onSearch={searchReposHandler} />
          </div>
          <div className="bottomRightBlock">
            {(!filterRepos ? repos : filterRepos).map((item, index) => {
              return <Repo key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
