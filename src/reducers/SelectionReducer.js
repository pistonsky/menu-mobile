export default (state = null, action) => {
  switch (action.type) {
    case 'select_menu_item':
      return action.payload;
    default:
      return state;
  }
};
