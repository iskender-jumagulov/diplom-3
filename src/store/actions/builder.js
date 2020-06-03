import axios from "../../axios";
import { ADD_SUBJECTS, REMOVE_SUBJECTS, SET_SUBJECTS  } from "./types";

export const add = (dispatch, subject) =>
  dispatch({ type: ADD_SUBJECTS, subject });

export const remove = (dispatch, subject) =>
  dispatch({ type: REMOVE_SUBJECTS, subject });

export const set = (dispatch, subjects) =>
  dispatch({
    type: SET_SUBJECTS,
    subjects,
  });

export const load = (dispatch) =>
  axios
    .get("/subjects.json")
    .then(({ data }) => set(dispatch, data))
    .catch(() => {});
