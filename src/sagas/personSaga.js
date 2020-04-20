import { put, takeEvery } from 'redux-saga/effects';

import {getPersonSuccess, getPersonFailure, getFilmsSuccess, getFilmsFailure  } from '../actions/personAction'

import {GET_PERSON_START, GET_FILMS_START } from '../constants'


function* getPerson(action) {
  console.log('getPersonSaga', action);
  try {
    const payload = yield fetch(action.data.url)
    console.log({payload});
    yield put(getPersonSuccess(payload))
  } catch (error) {
    yield put(getPersonFailure(error))
  }
}

function* getFilms(action) {
  console.log('getFilmsSaga', action);
  try {
    const payload = yield fetch(action.data.url)
    console.log({payload});
    yield put(getFilmsSuccess(payload))
  } catch (error) {
    yield put(getFilmsFailure(error))
  }
}

export default function* getPersonSaga() {
  console.log('saga');
  yield [
    takeEvery(GET_PERSON_START, getPerson),
    takeEvery(GET_FILMS_START, getFilms),
  ]
}
