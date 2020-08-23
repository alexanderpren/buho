import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { auth } from "../../src/api/Auth";
import { LOGIN_USER, LOGOUT_USER, GET_POSTS } from "../constants/ActionTypes";
import {
  showAuthMessage,
  userLoginSuccess,
  userLogOutSuccess,
} from "../actions/Auth";

const logInUserWithUsernamePasswordRequest = async (username, password) =>
  await auth
    .signInWithUsernameAndPassword(username, password)
    .then((authUser) => authUser)
    .catch((error) => error);

function* logInUserWithUsernamePassword({ payload }) {
  const { username, password } = payload;
  try {
    const logInUser= yield call(
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



function* logOutSystem({payload}) {  

  try {
    localStorage.removeItem("userId");
    yield put(userLogOutSuccess());
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* logInUser() {
  yield takeEvery(LOGIN_USER, logInUserWithUsernamePassword);
}

export function* logOutUser() {
  yield takeEvery(LOGOUT_USER, logOutSystem);
}
export default function* rootSaga() {
  yield all([
    fork(logInUser),    
    fork(logOutUser)]);
}