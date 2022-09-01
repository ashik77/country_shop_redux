import { actionTypes } from "../constants/actionTypes";

const initialState = {
  countries: [
    {
      id: 1,
      name: "Finland",
    },
  ],
};

export const countryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_COUNTRIES:
      return state;

    default:
      return state;
  }
};
