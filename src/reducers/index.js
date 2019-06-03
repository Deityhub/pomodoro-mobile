import { combineReducers } from "redux";
import sessionReducer from "./session";
import breakReducer from "./break";

const rootReducer = combineReducers({
  session: sessionReducer,
  break: breakReducer
});

export default rootReducer;
