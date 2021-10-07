import { createAction } from "./util";

export const [
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE
] = createAction("POST_LOGIN");

export const postLogin = (email: string, password: string) => ({
  type: POST_LOGIN,
  payload: {
    email,
    password
  }
});

export const postLoginSuccess = (data: any) => ({
  type: POST_LOGIN_SUCCESS,
  payload: data
});

export const postLoginFailure = (data: any) => ({
  type: POST_LOGIN_FAILURE,
  payload: data
});
