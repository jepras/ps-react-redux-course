import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import { beginAjaxCall } from "./ajaxStatusActions";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return dispatch => {
    // dispatch first - loading (request_login)
    dispatch(beginAjaxCall());
    // do API call
    return (
      AuthorApi.getAllAuthors()
        // check response
        .then(authors => {
          // dispatch success
          dispatch(loadAuthorsSuccess(authors));
        })
        .catch(error => {
          // dispatch error
          throw error;
          // interepret on error
        })
    );
  };
}

/*
 */
