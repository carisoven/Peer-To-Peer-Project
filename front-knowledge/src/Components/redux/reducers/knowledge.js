import {
  ADD_KNOWLEDGE,
  ADD_ERROR,
  SHOWALL_KNOW,
  SHOW_KNOW,
  EDIT_KNOW,
  DELETE_KNOW,
  KNOW_ERROR
} from "../action/types";

const initialState = {
  // knowledge: null,
  knows: null,
  knowledge: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOWALL_KNOW:
      return {
        ...state,
        knowledge: payload,
        loading: false
      };
    case ADD_KNOWLEDGE:
    case SHOW_KNOW:
      return {
        ...state,
        knows: payload,
        loading: false
      };
    case EDIT_KNOW:
      return {
        ...state,
        knows: payload,
        loading: false
      };
    case ADD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        knowledge: null,
        knows: null
      };
    case DELETE_KNOW:
      return {
        ...state,
        knows: payload,
        loading: false
      };
    case KNOW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
