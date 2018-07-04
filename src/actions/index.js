export const CHANGE_LOCATION = "CHANGE_LOCATION";
export const UPDATE_DATA = "UPDATE_DATA";
export const ADD_DATA = "ADD_DATA";

export const changeLocation = location => {
  return {
    type: CHANGE_LOCATION,
    location
  };
};

export const addData = data => {
  return {
    type: ADD_DATA,
    data
  };
};
