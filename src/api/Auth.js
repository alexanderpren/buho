import axios from "axios";
import { backendServer, getErrorMessage } from "../constants/ActionTypes";
const signInEndpoint = backendServer + "access/";
const urlAPIgetPost = backendServer + "posts/";
const urlAPIgetComments = backendServer + "comments/";

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

const deletePostFromAPI = (id) => {
  return axios
    .delete(urlAPIgetPost+id)
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


const deleteCommentsFromAPI = (id) => {
  return axios
    .delete(urlAPIgetComments+id)
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
  deletePostFromAPI: deletePostFromAPI,
  deleteCommentsFromAPI: deleteCommentsFromAPI
};
