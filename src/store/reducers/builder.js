import * as types from "../actions/types";

const initialState = {
  subjects: null,
  price: 80,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SUBJECTS:
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: {
            ...state.subjects[action.subject],
            quantity: state.subjects[action.subject].quantity + 1,
          },
        },
        price: state.price + state.subjects[action.subject].price,
      };

    case types.REMOVE_SUBJECTS:
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: {
            ...state.subjects[action.subject],
            quantity: state.subjects[action.subject].quantity - 1,
          },
        },
        price: state.price - state.subjects[action.subject].price,
      };

    case types.SET_SUBJECTS:
      return {
        ...state,
        subjects: action.subjects,
        price: initialState.price,
      };

    default:
      return state;
  }
};
