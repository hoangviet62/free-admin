import { combineReducers } from "redux";
import { routerReducer } from "connected-next-router";
/**
 * Create the main reducer with dynamically injected ones
 * @param {Object} injectedReducers
 */

export default function createReducer(injectedReducers: any): any {
  return combineReducers({
    ...injectedReducers,
    router: routerReducer,
  });
}
