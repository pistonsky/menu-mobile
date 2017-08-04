import { combineReducers } from 'redux';
import MenuReducer from './MenuReducer';
import SelectionReducer from './SelectionReducer';
import OrderReducer from './OrderReducer';

export default combineReducers({
  menu: MenuReducer,
  selectedMenuItemId: SelectionReducer,
  order: OrderReducer
});
