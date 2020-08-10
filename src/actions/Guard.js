import { ADD_GUARD, SET_GUARDS } from "./types";

export const addGuard = guard => dispatch => {
  dispatch({ type: ADD_GUARD, payload: guard });
};

export const setGuard = guard => dispatch => {
  dispatch({ type: SET_GUARDS, payload: guard });
};
