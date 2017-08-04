export const selectMenuItem = (itemId) => {
  return {
    type: 'select_menu_item',
    payload: itemId
  };
};

export const addMenuItem = (itemId) => {
  return {
    type: 'add_menu_item',
    payload: itemId
  };
};
