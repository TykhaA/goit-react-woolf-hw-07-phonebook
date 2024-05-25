import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://6648affd4032b1331bec1cde.mockapi.io/api/',
});
