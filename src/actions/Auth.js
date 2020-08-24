import {
  SHOW_MESSAGE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER,
  GET_POSTS,
  POST_LIST_SUCCESS,
  DELETE_POST_SUCCESS,
  DELETE_POST,
} from "../../src/constants/ActionTypes";

export const showAuthMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message,
  };
};

export const userLoginSuccess = (authUser) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: authUser,
  };
};
export const userLogOutSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
};

export const userLogin = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const userLogOut = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const setListPostsSuccess = (list) => {
  return {
    type: POST_LIST_SUCCESS,
    payload: list,
  };
};

export const deletePost = (idDelete) => {
  return {
  type: DELETE_POST,
  payload: {idDelete:idDelete},
  
}};



export const deletePostSuccess = (response) => {
  return {
  type: DELETE_POST_SUCCESS,
  payload: {list:response},
  
}};
