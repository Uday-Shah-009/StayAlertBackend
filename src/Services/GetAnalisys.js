import axios from "axios";

export const GetAnalisys = async (message) => {
  const data = await axios.post("https://sms-api-2-ptk8.onrender.com/predict", {message: message})
  console.log(data);
  return data.data;
};
