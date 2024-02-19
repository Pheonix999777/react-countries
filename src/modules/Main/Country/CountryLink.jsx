import { Link } from "react-router-dom";
import sty from "./style.module.scss";
import { useContext } from "react";
import { MainContext } from "../Provider/MainContext";

export const CountryCards = ({ src, name, population, region, capital }) => {
  const { isDarkMode } = useContext(MainContext);
  return (
    <Link
      className={isDarkMode ? sty.ul__darklist : sty.ul__li}
      to={`/detail/${name}`}
    >
      <li>
        <img
          className={sty.ul__img}
          src={src}
          alt=""
          width={264}
          height={336}
        />
        <h2 className={isDarkMode ? sty.ul__titledark : sty.ul__title}>
          {name}
        </h2>
        <div className={sty.ul__data}>
          <span className={isDarkMode ? sty.ul__flexdark : sty.ul__flex}>
            Population: {population}
          </span>
          <span className={isDarkMode ? sty.ul__flexdark : sty.ul__flex}>
            Region:{region}
          </span>
          <span className={isDarkMode ? sty.ul__flexdark : sty.ul__flex}>
            Capital:{capital}
          </span>
        </div>
      </li>
    </Link>
  );
};
