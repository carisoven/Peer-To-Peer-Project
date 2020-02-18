import axios from "axios";
import { GETALL_RESEVER, GETALL_ERROR } from "./types";

export const getResever = (token) => async dispatch => {
  try {
    const config ={
      headers:{
          'x-auth-token': localStorage.token
      }
  };
    const res = await axios.get('/api/resever',config);
    dispatch({
      type: GETALL_RESEVER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GETALL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
