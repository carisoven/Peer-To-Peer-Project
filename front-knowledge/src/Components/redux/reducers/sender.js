import { GETALL_SENDER, GETSENDER_ERROR, GET_APPLY,SHOWSEND_ID } from "../action/types";

const initialState = {
  sender: null,
  send: null,
  sen: null,
  senders: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETALL_SENDER:
      return {
        ...state,
        sender: payload,
        loading: false
      };
    case GETSENDER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        sender: null
      };
    case GET_APPLY:
      return {
        ...state,
        send: payload,
        loading: false
      };
      case SHOWSEND_ID:
        return {
          ...state,
          sen: payload,
          loading: false
        };
    default:
      return state;
  }
}
