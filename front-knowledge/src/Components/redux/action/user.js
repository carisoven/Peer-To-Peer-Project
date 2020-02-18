import axios from 'axios';

import {GET_ALLUSER,CLEAR_USER,USER_ERROR} from './types'

// Get all profiles
export const getUser = () => async dispatch => {
    dispatch({ type: CLEAR_USER });
  
    try {
      const res = await axios.get('/api/user');
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