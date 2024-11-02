import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/students`, {
      headers: {
        "Content-Type": "application/json",
        "api-key": "akusianakgembala",
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/students/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "api-key": "akusianakgembala",
      },
    });
    console.log("Data berhasil dihapus:", response.data.data);
    return response.data; // Jika ada data yang dikembalikan
  } catch (error) {
    console.error("Gagal menghapus data:", error);
    throw error;
  }
};

export const fetchDetailData = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/students/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "api-key": "akusianakgembala",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Gagal mengambil detail data:", error);
    throw error;
  }
};
// "x-api-key": "RJS1-202409",
