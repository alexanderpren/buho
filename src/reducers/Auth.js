import {   
    SHOW_MESSAGE, 
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER_SUCCESS,  
  } from "../constants/ActionTypes";
  
  const INIT_STATE = {
    loader: false,
    alertMessage: "",
    showMessage: false,
    initURL: "",
    authUser: null,
   
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {     
      case SIGNIN_USER_SUCCESS: {
        return {
          ...state,
          loader: false,
          authUser: action.payload,
        };
      }
    
      case SIGNOUT_USER_SUCCESS: {
        return {
          ...state,
          authUser: null,
          initURL: "/app/dashboard/crypto",
          loader: false,
        };
      }
  
      case SHOW_MESSAGE: {
        return {
          ...state,
          alertMessage: action.payload,
          showMessage: true,
          loader: false,
        };
      }
   
  
     
    
      default:
        return state;
    }
  };
  