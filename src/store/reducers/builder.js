import * as types from "../actions/types";

const initialState = {
  subjects: null,
  price: 0,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.ADD_SUBJECTS:
      newState.subjects[action.subject].quantity++;
      newState.price = state.price + state.subjects[action.subject].price;

      return newState;

    case types.REMOVE_SUBJECTS:
      newState.subjects[action.subject].quantity--;
      newState.price = state.price - state.subjects[action.subject].price;

      return newState;

    case types.SET_SUBJECTS:
      newState.subjects = action.subjects;
      newState.price = initialState.price;

      return newState;

    default:
      return newState;
  }
};