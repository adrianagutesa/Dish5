import * as ActionTypes from '../constants/actionTypes';

/*
import * as api from '../api/index.js';

export const fetchMenus = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.MENUS_LOADING,
    });
    const { data } = await api.fetchMenus();

    dispatch({
      type: ActionTypes.ADD_MENUS,
      payload: data,
    });

    dispatch({ type: ActionTypes.END_LOADING });
  } catch (error) {
    dispatch({
      type: ActionTypes.MENUS_FAILED,
      payload: error,
    });

    console.log(error);
  }
};
*/

import { MENUS } from '../shared/menus';

export const fetchMenus = () => (dispatch) => {
  dispatch({
    type: ActionTypes.START_LOADING_MENUS,
  });

  setTimeout(() => {
    dispatch({
      type: ActionTypes.ADD_MENUS,
      payload: MENUS,
    });
  }, 300);
};
