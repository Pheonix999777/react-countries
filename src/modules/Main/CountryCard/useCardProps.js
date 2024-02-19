import { useState } from "react";
import {
  useGetCOuntriesByRegion,
  useGetCountries,
} from "../../../services/api/Countries/Countries.service";

export const useCardProps = () => {
  const [countryValue, setCountryValue] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const countriesOptions = [
    {
      label: "Asia",
      value: "Asia",
    },
    {
      label: "Africa",
      value: "Africa",
    },
    {
      label: "America",
      value: "America",
    },
    {
      label: "Oceania",
      value: "Oceania",
    },
  ];

  const onChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const countries = useGetCountries();

  const getCountriesByRegion = useGetCOuntriesByRegion(
    { enabled: !!countryValue },
    countryValue?.value
  );

  return {
    countriesOptions,
    countryValue,
    setCountryValue,
    countriesByRegion: getCountriesByRegion.data,
    onChangeSearch,
    searchQuery,
    countries,
  };
};
