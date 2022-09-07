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
