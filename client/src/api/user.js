import api from ".";

const path = "/user";

const register = (data) => {
  return api.post(`/api/auth/local/register`, data);
};

const signIn = data => {
  return api.post(`/api/auth/local`, data);
};

const update = (id, data) => {
  return api.put(`${path}/${id}`, data);
};

const me = () => {
  return api.get(`${path}/me`);
};

const sendRecoveryEmail = data => {
  return api.post(`/auth/forgot-password`, data);
};

const resetPassword = data => {
  return api.post(`/auth/reset-password`, data);
};

const changePassword = data => {
  return api.post(`/auth/change-password`, data);
};

const confirmEmail = code => {
  return api.post(`/auth/email-confirmation?confirmation=${code}`);
};

export default {
  register,
  signIn,
  update,
  me,
  sendRecoveryEmail,
  resetPassword,
  changePassword,
  confirmEmail,
};
