import { useNavigate } from "react-router-dom";
import sty from "./style.module.scss";
import { useContext } from "react";
import { MainContext } from "modules/Main/Provider/MainContext";

export const BackBtn = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(MainContext);
  return (
    <button
      onClick={() => navigate("/", { state: "From Detail" })}
      className={isDarkMode ? sty.btn__dark : sty.btn}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m6.464 4.107 1.179 1.179-3.89 3.889h14.85v1.65H3.753l3.89 3.889-1.179 1.179L.572 10l5.892-5.893Z"
          fill={isDarkMode ? "white" : "#111517"}
        />
      </svg>
      <span className={isDarkMode ? sty.spn : ""}>Back</span>
    </button>
  );
};
