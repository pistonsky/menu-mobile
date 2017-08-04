import { SELECT_MENU_ITEM } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_MENU_ITEM:
      return action.payload;
    default:
      return state;
  }
};
