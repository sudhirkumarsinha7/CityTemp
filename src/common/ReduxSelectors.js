// @flow
import type {ReduxStore} from '../definitions/ReduxStore';
import _ from 'lodash';

export const createProgressSelector = (actions: Array<string>) => (
  state: ReduxStore,
) => {
  // returns true only when all actions is not loading
  return _(actions).some((action) => {
    if (action) {
      const matches: ?Array<string> = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(
        action,
      );
      if (matches) {
        const requestName = matches[1];
        return _.get(state, `progress.${requestName}`);
      }
      return null;
    }
  });
};
