import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response;
};

export const createProducts = async (product) => {
  const response = await axios.post("http://localhost:3000/products", product);
  return response;
};

export const deleteProducts = async (id) => {
  await axios.delete(`http://localhost:3000/products/${id}`);
};

export const updateProducts = async (id, data) => {
  const response = await axios.put(`http://localhost:3000/products/${id}`, data);
  return response;
};
