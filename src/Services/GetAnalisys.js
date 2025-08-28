import axios from "axios";

export const GetAnalisys = async (message) => {
  try {
    const response = await axios.post(
      "https://web-production-b93c.up.railway.app/predict",
      { message }
    );
    console.log("Flask Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Error calling Flask API:", err.message);
    throw err;
  }
};
