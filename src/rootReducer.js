import { combineReducers } from "redux";
import uiReducer from "./ui/redux";
import usersReducer from "./users/redux";

const rootReducer = combineReducers({
  users: usersReducer,
  ui: uiReducer
});

export default rootReducer;
