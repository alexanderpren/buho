import axios from "axios";
import { backendServer, getErrorMessage } from "../constants/ActionTypes";
const signInEndpoint = backendServer + "access/";

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

const signOutRequest = async () =>
  await auth
    .signOut()
    .then((authUser) => authUser)
    .catch((error) => error);

export const auth = {
  signInWithUsernameAndPassword: signInWithUsernameAndPassword,
  signOutRequest : signOutRequest
};
