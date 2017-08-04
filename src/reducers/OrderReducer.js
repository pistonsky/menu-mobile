import { ADD_MENU_ITEM } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_MENU_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
