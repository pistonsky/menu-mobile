import * as api from '../api';
import { MENU_UPDATED } from './types';

export const selectMenuItem = itemId => {
  return {
    type: 'select_menu_item',
    payload: itemId
  };
};

export const addMenuItem = itemId => {
  return {
    type: 'add_menu_item',
    payload: itemId
  };
};

export const fetchMenu = () => async dispatch => {
  const { data } = await api.getMenu();
  dispatch({ type: MENU_UPDATED, payload: data });
};
