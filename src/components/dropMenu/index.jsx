import React, { useState, useCallback } from "react";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import clsx from "clsx";
import "./style.scss";

function DropMenu({ onCheck, arr }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(arr[0]);

  const setOnClick = useCallback(
    (item) => () => {
      setValue(item);
      onCheck(item);
      closeFunc();
    },
    []
  );

  const closeFunc = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className={clsx("dropMenu", open && "dropMenuOpen")}>
      <h1 className="dropMenu__text">Sort by:</h1>
      <ul>
        {arr.map((item, index) => (
          <li key={index} onClick={setOnClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      <button type="button" onClick={closeFunc}>
        {value}
        <Arrow />
      </button>
    </div>
  );
}

export default DropMenu;
