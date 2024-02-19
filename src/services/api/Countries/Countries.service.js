import { useQuery } from "react-query";
import request from "../../httpRequest";
import axios from "axios";

const useService = {
  getUsers: () => request.get("/all").then((res) => res.data),
  getCountriesByRegion: (region) => axios.get(`https://restcountries.com/v3.1/region/${region}`).then(res => res.data),
};

export const useGetCountries = () => {
  return useQuery("GET/COUNTRY", useService.getUsers);
};

export const useGetCOuntriesByRegion = (settings, region) => {
  return useQuery(
    ["GET/COUNTRIES/BY/REGION", region],
    () => useService.getCountriesByRegion(region),
    settings
  );
};
