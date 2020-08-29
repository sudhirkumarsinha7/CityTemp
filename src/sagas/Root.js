import {fork} from 'redux-saga/effects';
import {watchTemp} from './cityTemp';

export function* rootSaga(): any {
  yield fork(watchTemp);
}
