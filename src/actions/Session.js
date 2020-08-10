import { ADD_SESSION, SET_SESSION } from "./types";

export const addSession = session => dispatch => {
  dispatch({ type: ADD_SESSION, payload: session });
};

export const setSession = session => dispatch => {
  dispatch({ type: SET_SESSION, payload: session });
};
