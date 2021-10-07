import { combineReducers } from "redux";
import postLogin, { LoginState } from "./postLogin";

export interface StoreState {
  postLogin: LoginState;
}

export default combineReducers({ postLogin });
