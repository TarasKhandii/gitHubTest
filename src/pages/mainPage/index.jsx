import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfoUsers from "../../components/infoUser";
import Btn from "../../components/btn";
import { getUserListAction } from "../../redux/actions/actionUserList";
import { Audio } from "react-loader-spinner";
import Frame from "../../assets/image/Frame1.png";
import "./style.scss";
import { useCallback } from "react";

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { arrUsers, loading, page, loadingMore } = useSelector(
    (state) => state.userListReducer
  );

  const onClickHandler = useCallback(() => {
    dispatch(getUserListAction(page));
  }, [page]);

  useEffect(() => {
    dispatch(getUserListAction(1));
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
      <div className="mainPage">
        <div className="mainPageBlock">
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
        </div>
        <div className="btnBlock">
          {loadingMore ? (
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
            <button onClick={onClickHandler} className="btnPag">
              New Users
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
