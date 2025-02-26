import axios from "axios";

<<<<<<< HEAD
// ตั้งค่าฐาน URL จาก environment variables
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export const createUserCart = async (token, cart) => {
  return axios.post(`${API_URL}/user/cart`, cart, {
    headers: { Authorization: `Bearer ${token}` },
=======
export const createUserCart = async (token, cart) => {
  // code body
  return axios.post("http://localhost:5001/api/user/cart", cart, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
  });
};

export const listUserCart = async (token) => {
<<<<<<< HEAD
  return axios.get(`${API_URL}/user/cart`, {
    headers: { Authorization: `Bearer ${token}` },
=======
  // code body
  return axios.get("http://localhost:5001/api/user/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
  });
};

export const saveAddress = async (token, address) => {
<<<<<<< HEAD
  return axios.post(
    `${API_URL}/user/address`,
    { address },
    {
      headers: { Authorization: `Bearer ${token}` },
=======
  // code body
  return axios.post(
    "http://localhost:5001/api/user/address",
    { address },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
    }
  );
};

export const saveOrder = async (token, payload) => {
<<<<<<< HEAD
  return axios.post(`${API_URL}/user/order`, payload, {
    headers: { Authorization: `Bearer ${token}` },
=======
  // code body
  return axios.post("http://localhost:5001/api/user/order", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
  });
};

export const getOrders = async (token) => {
<<<<<<< HEAD
  return axios.get(`${API_URL}/user/order`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getCurrentUser = async (token) => {
  return axios.get(`${API_URL}/current-user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const saveUserInfo = async (token, name, phone, address) => {
  return axios.post(
    `${API_URL}/user/info`,
    { name, phone, address },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const updateUser = async (token, userData) => {
  return axios.put(`${API_URL}/user/update`, userData, {
    headers: { Authorization: `Bearer ${token}` },
=======
  // code body
  return axios.get("http://localhost:5001/api/user/order", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
  });
};
