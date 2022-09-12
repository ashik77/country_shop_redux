import { actionTypes } from "../constants/actionTypes";

const initialState = {
  countries: [],
};

export const countryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_COUNTRIES:
      return { ...state, countries: payload };

    default:
      return state;
  }
};

export const selectedCountryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_COUNTRY:
      return { ...state, ...payload };

    default:
      return state;
  }
};
