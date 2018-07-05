export const CHANGE_LOCATION = "CHANGE_LOCATION";
export const ADD_DATA = "ADD_DATA";
export const EDIT_DATA = "EDIT_DATA";

export const changeLocation = location => {
  return {
    type: CHANGE_LOCATION,
    location
  };
};

export const addData = (data, id) => {
  return {
    type: ADD_DATA,
    data,
    id
  };
};

export const editData = (data, id) => {
  return {
    type: EDIT_DATA,
    data,
    id
  };
};
