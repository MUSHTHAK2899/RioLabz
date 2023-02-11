import axios1 from "axios";

export const constants = {
  baseURL: "https://fakestoreapi.com/",
};
export const axios = axios1.create({
  baseURL: "",
  timeout: 30000,
  headers: { "Content-Type": "application/json",
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*', },
});

axios.defaults.timeout = 30000;