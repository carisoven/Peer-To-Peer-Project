import axios from "axios";

import { GET_ALLUSER, CLEAR_USER, USER_ERROR,GET_USERID } from "./types";

// Get all profiles
export const getUser = () => async dispatch => {
  dispatch({ type: CLEAR_USER });

  try {
    const res = await axios.get("/api/user");
    dispatch({
      type: GET_ALLUSER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getUserSelect = (seaId) => async dispatch=>{
  try {
    const config = {
      headers: {
        "Content-Type":"application/json"
      }
  };
    const res = await axios.post("/api/user/userid",seaId,config );
    dispatch({
      type: GET_USERID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}