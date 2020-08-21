import {all} from 'redux-saga/effects';
import authSagas from './backendAuth';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),  
  ]);
}
