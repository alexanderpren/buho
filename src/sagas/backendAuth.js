import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import Cookies from 'js-cookie';
import {auth} from 'api/Auth';
import {
  SIGNIN_USER,
  SIGNOUT_USER,
} from "constants/ActionTypes";
import {showAuthMessage, userSignInSuccess, userSignOutSuccess} from "actions/Auth";



function* signInUserWithUsernamePassword({payload}) {
  const {username, password} = payload;
  try {
    const signInUser = yield call(signInUserWithUsernamePasswordRequest, username, password);
    if (signInUser.message) {
      yield put(showAuthMessage(signInUser.message));
    } else {
      localStorage.setItem('user_id', signInUser.user.uid);     
      Cookies.set('username', signInUser.user.uid);     
      yield put(userSignInSuccess(signInUser.user.uid));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signOut() {
  try {
    localStorage.removeItem('user_id');
    Cookies.remove('username');
    Cookies.remove('usertoken');
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
  yield all([
    fork(signInUser),   
    fork(signOutUser)
  ]);
}