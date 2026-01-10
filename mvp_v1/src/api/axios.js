import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
// baseURL: "https://opentab-backend.vercel.app",
  withCredentials: true,
});

export default api;
