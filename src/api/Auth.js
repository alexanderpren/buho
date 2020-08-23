import axios from "axios";
import { backendServer, getErrorMessage } from "../constants/ActionTypes";
const signInEndpoint = backendServer + "access/";
const urlAPIgetPost = backendServer + "posts/";

const signInWithUsernameAndPassword = (username, password) => {
  return axios
    .get(signInEndpoint, {
      username: username,
      password: password,
    })
    .then((Response) => {
      return {
        authUser: Response.data,
        message: null,
      };
    })
    .catch((Error) => {
      return getErrorMessage(Error);
    });
};

const getAllPostsFromAPI = () => {
  return axios
    .get(urlAPIgetPost)
    .then((Response) => {
      return {
        list: Response.data,
        message: null,
      };
    })
    .catch((Error) => {
      return getErrorMessage(Error);
    });
};

export const auth = {
  signInWithUsernameAndPassword: signInWithUsernameAndPassword,
  getAllPostsFromAPI: getAllPostsFromAPI,
};
