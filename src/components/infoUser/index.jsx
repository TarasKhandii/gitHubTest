import React from "react";
import Btn from "../btn";
import { Audio } from "react-loader-spinner";
import { useSelector } from "react-redux";
import "./style.scss";
import Frame from "../../assets/image/Frame1.png";
import { useNavigate } from "react-router-dom";

function InfoUsers() {
  const navigate = useNavigate();
  const { arrUsers, loading } = useSelector((state) => state.userListReducer);

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
      {arrUsers.map((item, index) => {
        return (
          <div key={index} className="infoUser">
            <img
              src={item.avatar_url ? item.avatar_url : Frame}
              className="infoUser__image"
              alt="avatar"
            />
            <div className="infoUser__block">
              <h1 className="infoUser__title">{item.login}</h1>
              <p className="infoUser__date">{`User ID: ${item.id}`}</p>
              <Btn
                text="Get github"
                onClick={() => {
                  navigate(`/info/${item.login}`);
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default InfoUsers;
