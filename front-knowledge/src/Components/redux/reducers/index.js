import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import users from './user';
import knowledge from './knowledge';
import resever from './resever'
import sender from './sender'
export default combineReducers({
  alert,
  auth,
  users,
  knowledge,
  resever,
  sender
});