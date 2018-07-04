import * as types from "../actions";

const initialData = {
  data: []
};

const dataReducer = (state = initialData, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return [...state, action.data];
    default:
      return state;
  }
};

export default dataReducer;
