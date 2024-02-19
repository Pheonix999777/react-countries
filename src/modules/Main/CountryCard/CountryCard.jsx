import sty from "./style.module.scss";
import { CountryCards } from "../Country/CountryLink";
import { useCardProps } from "./useCardProps";
import { CustomDropdown } from "../../../components/CustomDropdown/CustomDropdown";
import { Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { MainContext } from "../Provider/MainContext";

export const CountryCard = () => {
  const { isDarkMode } = useContext(MainContext);

  const {
    countriesOptions,
    countryValue,
    setCountryValue,
    onChangeSearch,
    searchQuery,
    countriesByRegion,
    countries,
  } = useCardProps();

  return (
    <article>
      <div className={sty.content__div}>
        <input
          className={isDarkMode ? sty.inp__dark : sty.inp}
          type="search"
          name="search"
          placeholder="Search for a country…"
          onChange={onChangeSearch}
        />

        <CustomDropdown
          value={countryValue}
          setValue={setCountryValue}
          options={countriesOptions}
          placeholder=" Filter by Region"
        />
      </div>

      <ul className={sty.ul}>
        {countries.isLoading ? (
          <Spinner color="red.500" />
        ) : countriesByRegion ? (
          countriesByRegion
            ?.filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((country, index) => (
              <CountryCards
                src={country.flags?.png}
                name={country.name?.common}
                capital={country.capital?.[0]}
                population={country.population}
                region={country.region}
                key={index}
              />
            ))
        ) : countries.data ? (
          countries.data
            .filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((country, index) => (
              <CountryCards
                src={country.flags?.png}
                name={country.name?.common}
                capital={country.capital?.[0]}
                population={country.population}
                region={country.region}
                key={index}
              />
            ))
        ) : (
          <p>No countries available</p>
        )}
      </ul>
    </article>
  );
};
