import axios from "axios";

const API = `${import.meta.env.VITE_API_BASE_URL}/api/dashboard`;

export const getDashboardStats = (token) =>
  axios.get(`${API}/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });