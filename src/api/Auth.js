
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
      });};

  export const auth = {
    signInWithUsernameAndPassword: signInWithUsernameAndPassword,
   
  };
  