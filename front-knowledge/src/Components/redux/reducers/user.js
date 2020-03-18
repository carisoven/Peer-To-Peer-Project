import { GET_ALLUSER, CLEAR_USER, USER_ERROR,GET_USERID } from "../action/types";

const initialState = {
  user: null,
  users: [],
  userid: null,
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALLUSER:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        user: null
      };
    case GET_USERID:
      return{
        ...state,
        userid: payload,
        loading: false
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        repos: [],
        loading: false
      };
    default:
      return state;
  }
}
