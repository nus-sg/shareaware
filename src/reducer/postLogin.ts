import { AnyAction } from "redux";
import {
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE
} from "../epic/actions";

export interface Login {
  email: string;
  password: string;
}

export interface LoginState extends Login {
  resp: object[] | any;
}

const initState: LoginState = {
  resp: [],
  email: "",
  password: ""
};

const reducer = (
  state: LoginState = initState,
  action: AnyAction
): LoginState => {
  switch (action.type) {
    case POST_LOGIN:
      return {
        ...initState
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...action.payload
      };
    case POST_LOGIN_FAILURE:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
