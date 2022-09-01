import { actionTypes } from "../constants/actionTypes";

export const setCountries = (countries) => {
  return {
    type: actionTypes.SET_COUNTRIES,
    payload: countries,
  };
};

export const selectedCountry = (country) => {
  return {
    type: actionTypes.SELECTED_COUNTRY,
    payload: country,
  };
};
