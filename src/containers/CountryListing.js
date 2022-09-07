import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../redux/actions/countryActions";
import CountryComponent from "./CountryComponent";

const CountryListing = () => {
  //getting data from redux-store
  const countries = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchCountries = async () => {
    const response = await axios
      .get("https://restcountries.com/v3.1/all")
      .catch((error) => {
        console.log("Error", error);
      });
    console.log("response:", response);
    dispatch(setCountries(response.data));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  console.log("Countries:", countries);
  return (
    <div className="ui grid container">
      <CountryComponent />
    </div>
  );
};

export default CountryListing;
