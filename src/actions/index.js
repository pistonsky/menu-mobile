import * as api from '../api';
import { MENU_UPDATED, SELECT_MENU_ITEM, ADD_MENU_ITEM } from './types';

export const selectMenuItem = itemId => {
  return {
    type: SELECT_MENU_ITEM,
    payload: itemId
  };
};

export const addMenuItem = itemId => {
  return {
    type: ADD_MENU_ITEM,
    payload: itemId
  };
};

export const fetchMenu = () => async dispatch => {
  const { data } = await api.getMenu();
  dispatch({ type: MENU_UPDATED, payload: data });
};
