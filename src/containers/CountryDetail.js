import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedCountry } from "../redux/actions/countryActions";

const CountryDetail = () => {
  const country = useSelector((state) => state.country);
  const { name, flags, population, region } = country;
  const { countryId } = useParams();
  const dispatch = useDispatch();
  console.log("selected country", country);
  console.log(" country id", countryId);

  const fetchCountryDetail = async () => {
    const response = await axios
      .get(`https://restcountries.com/v3.1/alpha/${countryId}`)
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(selectedCountry(response.data));
  };
  useEffect(() => {
    if (countryId && countryId !== "") fetchCountryDetail();
  }, [countryId]);

  return (
    <div className="ui link cards">
      <div className="card">
        <div className="content">
          <div className="header">{name}</div>
          <div className="meta">{region}</div>
          <div className="meta">{population}</div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
