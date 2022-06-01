import api from ".";

const path = "/users-permissions/roles/";

const getAll = params => {
  return api.get(`${path}?_sort=created_at:desc`, { params });
};

const get = id => {
  return api.get(`${path}/${id}`);
};

const create = data => {
  return api.post(`${path}`, data);
};

const update = (id, data) => {
  return api.put(`${path}/${id}`, data);
};

const remove = id => {
  return api.delete(`${path}/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};