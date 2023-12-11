import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getUser = async () => {
  // const response = await axios.get(`${API_URL}/${userId}`);
  // return response.data;
};

const addUser = async (user) => {
  const response = await axios.post(API_URL, user);
  console.log("error", user);
  console.log("error", response.data);
  return response.data;
};

const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/${userId}`);
  return response.data;
};

export { getAllUsers, addUser, deleteUser, getUser };
