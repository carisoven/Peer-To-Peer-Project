import { GETALL_RESEVER, GETALL_ERROR, SHOWRESEV_ID } from "../action/types";

const initialState = {
  resever: null,
  resev: null,
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
    case SHOWRESEV_ID:
      return {
        ...state,
        resev: payload,
        loading: false
      };
    default:
      return state;
  }
}
