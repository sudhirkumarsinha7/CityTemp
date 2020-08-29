// @flow
export const actions = {
  CITY_TEMP_REQUEST: 'CITY_TEMP_REQUEST',
  CITY_TEMP_SUCCESS: 'CITY_TEMP_SUCCESS',
  CITY_TEMP_FAILURE: 'CITY_TEMP_FAILURE',
};
export type CityTempRequestAction = {
  type: string,
  city: string,
};
export function CityTempRequest(city: string): CityTempRequestAction {
  return {
    type: actions.CITY_TEMP_REQUEST,
    city,
  };
}
export type CityTempSucccessAction = {
  type: string,
  cityDetails: Object,
};
export function CityTempSuccess(cityDetails: Object): CityTempSucccessAction {
  return {
    type: actions.CITY_TEMP_SUCCESS,
    cityDetails,
  };
}
export type CityTempFailureAction = {
  type: string,
  errorMessage: string,
};
export function CityTempFailure(errorMessage: string): CityTempFailureAction {
  return {
    type: actions.CITY_TEMP_FAILURE,
    errorMessage,
  };
}
