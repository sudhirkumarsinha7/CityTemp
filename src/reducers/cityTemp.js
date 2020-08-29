// @flow
import type {AuthState} from './ReduxStore';
import {actions} from '../actions/cityTemp';
const initialState = {
  cityTempList: [],
};
export default function (
  state: AuthState = initialState,
  action: any,
): AuthState {
  switch (action.type) {
    case actions.CITY_TEMP_REQUEST:
      return state;
    case actions.CITY_TEMP_SUCCESS:
      let existingCitiesResults: Array<[]> = [];
      if (state.cityTempList) {
        existingCitiesResults = state.cityTempList;
        existingCitiesResults.push(action.cityDetails);
      } else {
        existingCitiesResults.push(action.cityDetails);
      }
      return {
        ...state,
        cityTempList: existingCitiesResults,
      };
    default:
      return state;
  }
}
