// @flow
import _ from 'lodash';

import type { Dispatch } from '../reducers/types';

export const DO_STUFF = 'DO_STUFF';

export function doStuff() {
  return {
    type: DO_STUFF
  };
}
