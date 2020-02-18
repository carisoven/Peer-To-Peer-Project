import axios from "axios";
import { GETALL_SENDER, GETSENDER_ERROR, GET_APPLY } from "./types";

export const getSender = () => async dispatch => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.token
      }
    };

    const res = await axios.get("/api/sender", config);
    dispatch({
      type: GETALL_SENDER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GETSENDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const applySender = formApp => async dispatch => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.token,
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/sender/app", formApp, config);
    dispatch({
      type: GET_APPLY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GETSENDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
