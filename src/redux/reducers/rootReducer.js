import { combineReducers } from "redux";
import userListReducer from "./userListReducer";
import infoUserReducer from "./infoUserReducer";

export default combineReducers({
  userListReducer,
  infoUserReducer,
});
