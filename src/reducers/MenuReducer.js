import { MENU_UPDATED } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case MENU_UPDATED:
      return action.payload;
    default:
      return state;
  }
};
