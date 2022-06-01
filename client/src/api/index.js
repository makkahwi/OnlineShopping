import axios from "axios";
import store from "../store"

export const baseURL = "http://localhost:1337";

const service = axios.create({
  baseURL,
});

service.interceptors.request.use(
  config => {
    const jwtToken = store.jwtToken

    if (jwtToken) {
      config.headers["Authorization"] = "Bearer " + jwtToken;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

const parseErrorMessage = error => {
  let errorMessage = "";
  try {
    if (isHtml(error.response.data)) {
      errorMessage = "Undefined Error";
    } else if (error.response.data.message) {
      if (error.response.data.message[0]?.messages?.length > 0) {
        errorMessage =
          error.response.data.message[0].messages[0].message ||
          error.response.data.message[0].messages[0].id ||
          error.response.data.message[0].messages[0].message;
      } else {
        errorMessage = error.response.data.message;
      }
    } else if (error.response.data.error) {
      errorMessage = error.response.data.error;
    } else {
      errorMessage = error.response.data;
    }
  } catch (error) {
    errorMessage = "Oops! Something went wrong.";
  }
  return errorMessage;
};

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if ([401, 403].includes(error?.response?.status)) {
      return Promise.reject("Your session has expired. Please sign in again to continue.");
    }
    return Promise.reject(parseErrorMessage(error));
  }
);

export default service;
