import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../../services/httpRequest";

export const useCountryDetailProps = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      request
        .get("/all")
        .then((res) => {
          const selectedCountry = res.data.find(
            (item) => item.name.common === name
          );
          if (selectedCountry) {
            setCountry(selectedCountry);
          }
        })
        .catch((error) => {
          console.error("Error fetching country data:", error);
        });
    }
  }, [name]);
  return country;
};
