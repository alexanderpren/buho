import {
  SHOW_MESSAGE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  POST_LIST_SUCCESS,
  DELETE_POST_SUCCESS,
  POST_COMMENTS_SUCCESS,
} from "../constants/ActionTypes";

const INIT_STATE = {
  post: null,
  comments: null,
  loader: false,
  alertMessage: "",
  showMessage: false,
  initURL: "",
  access: false,
  listPosts: null,
  authUser: null,
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

    case DELETE_POST_SUCCESS: {
      return {
        ...state,
        listPosts: action.payload,
      };
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
    case POST_COMMENTS_SUCCESS: {
      return {
        ...state,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }

    default:
      return state;
  }
};
