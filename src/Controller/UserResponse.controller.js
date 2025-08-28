import { GetAnalisys } from "../Services/GetAnalisys.js";

export const UserResponse = async (req, res) => {
  const { message } = req.body
  const data = await GetAnalisys(message);
  return res.json({
    Message: "success",
    data,
  });
};
