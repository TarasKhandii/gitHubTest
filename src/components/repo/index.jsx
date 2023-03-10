import React from "react";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import "./style.scss";

function Repo({ item }) {
  return (
    <div className="repo">
      <div className="repo__nameRateBlock">
        <p className="repo__name">{item.name}</p>
        <div className="repo__rateBlock">
          <Star />
          <p className="repo__rate">{item.stargazers_count}</p>
        </div>
      </div>
      <p className="repo__forks">{`${item.forks} forks`}</p>
    </div>
  );
}

export default Repo;
