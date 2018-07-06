import * as types from "../actions";
import data from "../data";

const initialData = data;

const dataReducer = (state = initialData, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return { ...state, [action.id]: action.data };
    case types.EDIT_DATA:
      return { ...state, [action.id]: action.data };
    case types.DELETE_DATA:
      const clone = { ...state };
      delete clone[action.id];
      return clone;
    default:
      return state;
  }
};

export default dataReducer;
