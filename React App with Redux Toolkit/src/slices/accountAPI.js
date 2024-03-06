import axios from "axios";

export const getUsers = () => {
  return axios.get("http://localhost:8080/employees");
};
export const addUser = (user) => {
  return axios.post(`http://localhost:8080/employees`, user);
};
export const deleteUser = (id) => {
  return axios.delete(`http://localhost:8080/employees/${id}`);
};
export const updateUser = (id, user) => {
  return axios.patch(`http://localhost:8080/employees/${id}`, user);
};
