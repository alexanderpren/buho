
import {    
    SHOW_MESSAGE,
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER_SUCCESS,
    SIGNOUT_USER,
    SIGNIN_USER,    
  
  } from "constants/ActionTypes";

export const showAuthMessage = (message) => {
    return {
      type: SHOW_MESSAGE,
      payload: message,
    };
  };

  export const userSignInSuccess = (authUser) => {
    return {
      type: SIGNIN_USER_SUCCESS,
      payload: authUser,
    };
  };
  export const userSignOutSuccess = () => { 
    return {
      type: SIGNOUT_USER_SUCCESS,
    };
  };

  export const userSignIn = (user) => {
    return {
      type: SIGNIN_USER,
      payload: user,
    };
  };

  export const userSignOut = () => {
    return {
      type: SIGNOUT_USER,
    };
  };