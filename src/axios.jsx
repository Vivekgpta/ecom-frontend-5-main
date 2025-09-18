import axios from "axios";

const API = axios.create({
  baseURL: `https://e-kirana-shop.onrender.com/api`,
});
delete API.defaults.headers.common["Authorization"];
export default API;
