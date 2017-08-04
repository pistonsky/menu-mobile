import axios from 'axios';

const BASE_URL = 'https://pistonsky-menu-api.herokuapp.com';

export const getMenu = () => {
  return axios.get(BASE_URL + '/');
};
