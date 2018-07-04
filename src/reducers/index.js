import { combineReducers } from "redux";

import locationReducer from "./locationReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  location: locationReducer,
  data: dataReducer
});

export default rootReducer;
