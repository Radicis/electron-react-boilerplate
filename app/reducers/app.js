// @flow
import _ from 'lodash';
import { DO_STUFF } from '../actions/options';
import type { Action } from './types';

const initialState = {};

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case DO_STUFF:
      return {
        ...state
      };
    default:
      return state;
  }
}
