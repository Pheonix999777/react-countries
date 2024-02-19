import { useContext } from "react";
import { BackBtn } from "./Components/BackBtn/BackBtn";
import sty from "./style.module.scss";
import { useCountryDetailProps } from "./useCountryDetailProps";
import { MainContext } from "modules/Main/Provider/MainContext";

export const CountryDetail = () => {
  const country = useCountryDetailProps();
  const { isDarkMode } = useContext(MainContext);
  return (
    <>
      <BackBtn />
      {country && (
        <div className={sty.detail} key={country.name.common}>
          <img className={sty.detail__img} src={country.flags.png} alt="" />
          <div className={sty.detail__wrapper}>
            <h2 className={isDarkMode ? sty.detail__dark : sty.detail__title}>
              {country.name.common}
            </h2>
            <span
              className={isDarkMode ? sty.detail__darkword : sty.detail__word}
            >
              Native Name:
              <p className={sty.detail__text}>{country.name.common}</p>
            </span>
            <span
              className={isDarkMode ? sty.detail__darkword : sty.detail__word}
            >
              Population:
              <p className={sty.detail__text}>{country.population}</p>
            </span>
            <span
              className={isDarkMode ? sty.detail__darkword : sty.detail__word}
            >
              Region:<p className={sty.detail__text}>{country.region}</p>
            </span>
            <span
              className={isDarkMode ? sty.detail__darkword : sty.detail__word}
            >
              Capital:<p className={sty.detail__text}>{country.capital}</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};
