const FETCH_USERS_REQUESTED = "users/FETCH_USERS_REQUESTED";
const FETCH_USER_SUCCEDED = "users/FETCH_USER_SUCCEDED";
const FETCH_USERS_SUCCEDED = "users/FETCH_USERS_SUCCEDED";
const FETCH_USERS_FAILED = "users/FETCH_USERS_FAILED";
const USERS_RESET = "users/USERS_RESET";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
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
    fetch("https://randomuser.me/api?results=10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return false;
      })
      .then((data) => {
        dispatch(fetchSucceded(data.results));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};

export const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch("https://randomuser.me/api?results=1")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return false;
      })
      .then((data) => {
        dispatch(fetchUserSucceded(data.results));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};

export const resetUsers = () => {
  return function (dispatch) {
    dispatch(reset());
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_RESET:
      return {
        ...state,
        users: []
      };
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_USER_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: state.users.concat(action.payload)
      };
    case FETCH_USERS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};
