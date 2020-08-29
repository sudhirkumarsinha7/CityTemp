// @flow
import type {ProgressState} from './ReduxStore';

export default function (
  state: ProgressState = {},
  action: any,
): ProgressState {
  const {type} = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
}
