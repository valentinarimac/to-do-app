import axios from "axios";

const API_URL = "api/lists/";

const createList = async (name, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, name, config);

  return response.data;
};

const getLists = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const deleteList = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

const listService = {
  createList,
  getLists,
  deleteList,
};

export default listService;
