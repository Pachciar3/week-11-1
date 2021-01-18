import api from '../api';

const FETCH_USERS_REQUESTED = "users/FETCH_USERS_REQUESTED";
const FETCH_USER_SUCCEDED = "users/FETCH_USER_SUCCEDED";
const FETCH_USERS_SUCCEDED = "users/FETCH_USERS_SUCCEDED";
const FETCH_USERS_FAILED = "users/FETCH_USERS_FAILED";
const USERS_RESET = "users/USERS_RESET";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isLoaded: false,
  isError: false
};

const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_USERS_FAILED });
const fetchSucceded = (data) => ({ type: FETCH_USERS_SUCCEDED, payload: data });
const fetchUserSucceded = (data) => ({ type: FETCH_USER_SUCCEDED, payload: data });
const reset = () => ({ type: USERS_RESET });

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    api
      .get('?results=10')
      .then(data => {
        dispatch(fetchSucceded(data.results));
      })
      .catch(error => {
        console.error(error);
        dispatch(fetchFailed());
      });
  };
};

export const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    api
      .get('?results=1')
      .then(data => {
        dispatch(fetchUserSucceded(data.results));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchFailed());
      });
  };
};

export const resetUsers = () => {
  return function (dispatch) {
    dispatch(reset());
  }
}


const redux = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_RESET:
      return {
        ...state,
        ...INITIAL_STATE
      };
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false
      };
    case FETCH_USER_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoaded: true,
        users: state.users.concat(action.payload)
      };
    case FETCH_USERS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoaded: true,
        users: action.payload
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoaded: false,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

export default redux;
