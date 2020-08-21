import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { auth } from "../../src/api/Auth";
import { SIGNIN_USER, SIGNOUT_USER } from "../constants/ActionTypes";
import {
  showAuthMessage,
  userSignInSuccess,
  userSignOutSuccess,
} from "../actions/Auth";

const signInUserWithUsernamePasswordRequest = async (username, password) =>
  await auth
    .signInWithUsernameAndPassword(username, password)
    .then((authUser) => authUser)
    .catch((error) => error);

function* signInUserWithUsernamePassword({ payload }) {
  const { username, password } = payload;
  try {
    const signInUser = yield call(
      signInUserWithUsernamePasswordRequest,
      username,
      password
    );
    debugger;
    if (signInUser.message) {
      yield put(showAuthMessage(signInUser.message));
    } else {
      localStorage.setItem("user_id", signInUser);

      yield put(userSignInSuccess(signInUser));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signOut() {
  try {
    localStorage.removeItem("user_id");

    yield put(userSignOutSuccess(signOutUser));
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* signInUser() {
  yield takeEvery(SIGNIN_USER, signInUserWithUsernamePassword);
}

export function* signOutUser() {
  yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
  yield all([fork(signInUser), fork(signOutUser)]);
}
