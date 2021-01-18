import { combineReducers } from "redux";
// import counterReducer from "./counter/redux";
import usersReducer from "./users/redux";
// import usersReducer from "./users/redux";

const rootReducer = combineReducers({
  users: usersReducer
  // users: usersReducer
});

export default rootReducer;
