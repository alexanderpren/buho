import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { auth } from "../../src/api/Auth";
import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_POSTS,
  DELETE_POST,
} from "../constants/ActionTypes";
import {
  showAuthMessage,
  userLoginSuccess,
  userLogOutSuccess,
  setListPostsSuccess,
  deletePostSuccess,
} from "../actions/Auth";

const [response1, response2] = yield all([
    call(deletePostFromAPI),
    call(deleteCommentsFromAPI),    
  ]);

  
  const deleteCommentsRequest = async (id) =>
  await auth
    .deleteCommentsFromAPI(id)
    .then((response) => response)
    .catch((error) => error);

export function* deleteCommentsFromAPI({ payload }) {
  const { idDelete } = payload;
  try {


    if (response.message) {
      yield put(showAuthMessage(response.message));
    } else {
      yield;
      yield put(deletePostSuccess(response));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}



  const deletePostRequest = async (id) =>
  await auth
    .deletePostFromAPI(id)
    .then((response) => response)
    .catch((error) => error);

export function* deletePostFromAPI({ payload }) {
  const { idDelete } = payload;
  try { 

    if (response.message) {
      yield put(showAuthMessage(response.message));
    } else {
      yield;
      yield put(deletePostSuccess(response));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}


export default function* () {
    yield takeLatest(DELETE_POST, deletePostFromAPI);
    yield takeLatest(DELETE_COMMENTS, deleteCommentsFromAPI);
    // ...
  }