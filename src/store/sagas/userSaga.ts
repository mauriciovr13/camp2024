import {call, put, takeLatest, all} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import api from '../../config/api.ts';
import {
  login as LOGIN,
  loginFailure,
  loginSuccess,
  type LoginRequestPayload,
  type LoginResponse,
} from '../slices/userSlice.ts';

function* login({payload}: PayloadAction<LoginRequestPayload>) {
  try {
    const response: AxiosResponse<LoginResponse> = yield call(
      api.post,
      'realms/camp-ioasys-2024/protocol/openid-connect/token',
      {
        password: payload.password,
        username: payload.username,
        grant_type: 'password',
      },
    );
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure());
  }
}

export default function* watchUserSaga() {
  yield all([takeLatest(LOGIN, login)]);
}
