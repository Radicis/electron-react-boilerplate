// @flow
import _ from 'lodash';

import type { Dispatch } from '../reducers/types';

export const DO_STUFF = 'DO_STUFF';

/**
 * Does stuff {}
 * @param stuff
 * @returns {{type: boolean, stuff: *}}
 */
export function setOptions() {
  return {
    type: DO_STUFF
  };
}