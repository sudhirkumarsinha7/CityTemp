import type {CityTempRequestAction} from '../actions/cityTemp';
import {takeLatest, take, call, put, select} from 'redux-saga/effects';
import {
  actions as authAction,
  CityTempSuccess,
  CityTempFailure,
} from '../actions/cityTemp';

export function* watchTemp(): any {
  yield takeLatest(authAction.CITY_TEMP_REQUEST, cityTemp);
}

export function* cityTemp(action: CityTempRequestAction): any {
  const {city} = action;
  console.log('actionlogin ' + JSON.stringify(action));
  const tempRequest: any = {
    city: city,
  };

  try {
    const response = yield call(cityTempAPI, tempRequest);
    if (response.status) {
      yield put(CityTempSuccess(response.response));
    } else {
      yield put(CityTempFailure(response.message));
    }
  } catch (err) {
    yield put(CityTempFailure('Invalid Credentials'));
  }
}

function cityTempAPI(tempRequest) {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    tempRequest.city +
    '&appid=9de243494c0b295cca9337e1e96b00e2';
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return {
        status: true,
        response: json,
      };
    })
    .catch((err) => {
      return {
        status: false,
        error: err,
      };
    });
}
