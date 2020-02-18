import { GETALL_RESEVER, GETALL_ERROR } from "../action/types";

const initialState = {
  resever: null,
  resevers: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETALL_RESEVER:
      return {
        ...state,
        resever: payload,
        loading: false
      };
    case GETALL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        resever: null
      };
    default:
      return state;
  }
}
