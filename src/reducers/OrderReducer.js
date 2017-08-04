export default (state = [], action) => {
  switch (action.type) {
    case 'add_menu_item':
      return [...state, action.payload];
    default:
      return state;
  }
};
