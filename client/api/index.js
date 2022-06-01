import axios from "axios";
import { signOut } from "src/redux/actions/user";
import store from "src/redux/store";

export const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:1337";

const noTokenPaths = ["/auth/local", "/auth/send-email-confirmation", "/auth/email-confirmation"];

const service = axios.create({
  baseURL,
});

service.interceptors.request.use(
  config => {
    const { jwtToken } = store.getState().user;
    if (jwtToken && !noTokenPaths.includes(config.url.split("?")[0])) {
      config.headers["Authorization"] = `Bearer ${jwtToken}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const e = String(error);

    if (e.includes("401") || e.includes("403")) {
      store.dispatch(signOut());
    }
  }
);

export default service;
