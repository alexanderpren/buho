import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { auth } from "../../src/api/Auth";
import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_POSTS,
  DELETE_POST,
  GET_POSTS_AND_COMMENTS,
} from "../constants/ActionTypes";
import {
  showAuthMessage,
  userLoginSuccess,
  userLogOutSuccess,
  setListPostsSuccess,
  deletePostSuccess,
  postCommentSuccess,
} from "../actions/Auth";

const logInUserWithUsernamePasswordRequest = async (username, password) =>
  await auth
    .signInWithUsernameAndPassword(username, password)
    .then((authUser) => authUser)
    .catch((error) => error);

function* logInUserWithUsernamePassword({ payload }) {
  const { username, password } = payload;
  try {
    const logInUser = yield call(
      logInUserWithUsernamePasswordRequest,
      username,
      password
    );
    if (logInUser.message) {
      yield put(showAuthMessage(logInUser.message));
    } else {
      localStorage.setItem("userId", logInUser.authUser.id);
      yield put(userLoginSuccess(logInUser.authUser.id));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* logInUser() {
  yield takeEvery(LOGIN_USER, logInUserWithUsernamePassword);
}

function* logOut() {
  try {
    localStorage.removeItem("userId");
    yield put(userLogOutSuccess());
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* logOutUser() {
  yield takeEvery(LOGOUT_USER, logOut);
}

const getPostsRequest = async () =>
  await auth
    .getAllPostsFromAPI()
    .then((listPostAll) => listPostAll)
    .catch((error) => error);

function* getPostFromAPI() {
  try {
    const listPosts = yield call(getPostsRequest);
    if (listPosts.message) {
      yield put(showAuthMessage(listPosts.message));
    } else {
      yield put(setListPostsSuccess(listPosts));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}
//Watchers
export function* getAllPosts() {
  yield takeEvery(GET_POSTS, getPostFromAPI);
}

const deleteComments = async (id) =>
  await auth
    .deleteCommentsFromAPI(id)
    .then((response) => response)
    .catch((error) => error);

const deletePosts = async (id) =>
  await auth
    .deletePostFromAPI(id)
    .then((response) => response)
    .catch((error) => error);

function* deleteAll({ payload }) {
  const { idDelete } = payload;
  try {
    const responseDelete = yield call(deletePosts, idDelete);

    const responseDeleteComments = yield call(deleteComments, idDelete);

    const listPosts = yield call(getPostsRequest);
    if (listPosts.message) {
      yield put(showAuthMessage(listPosts.message));
    } else {
      yield put(deletePostSuccess(listPosts));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

//Watchers
export function* deletePostAndComments() {
  yield takeEvery(DELETE_POST, deleteAll);
}

const getOnePostFromAPI = async (id) =>
  await auth
    .getPostFromAPIBack(id)
    .then((response) => response)
    .catch((error) => error);

const getCommentsFromAPI = async (id) =>
  await auth
    .getCommentsFromAPIBack(id)
    .then((response) => response)
    .catch((error) => error);

function* getPostAndComments({ payload }) {
  const { id } = payload;
  try {
    const responsePost = yield call(getOnePostFromAPI, id);

    const responseComments = yield call(getCommentsFromAPI, id);

    yield put(postCommentSuccess(responsePost, responseComments));
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

//Watchers
export function* getPostAndAllComments() {
  yield takeEvery(GET_POSTS_AND_COMMENTS, getPostAndComments);
}

export default function* rootSaga() {
  yield all([
    fork(logInUser),
    fork(logOutUser),
    fork(getAllPosts),
    fork(deletePostAndComments),
    fork(getPostAndAllComments),
  ]);
}
