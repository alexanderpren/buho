import {
  SHOW_MESSAGE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  POST_LIST_SUCCESS,
} from "../constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  alertMessage: "",
  showMessage: false,
  initURL: "",
  access: false,
  listPosts: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        authUser: action.payload,
        access: true,
      };
    }

    case LOGOUT_USER_SUCCESS: {
      return INIT_STATE;
    }

    case POST_LIST_SUCCESS: {
      return {
        ...state,
        listPosts: action.payload.list,
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
