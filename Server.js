import express from "express";
import Router from "./src/Routes/Router.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://stayalertsms.netlify.app",
    methods: ["GET", "POST"],
  })
);
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.use("/check", Router);

app.get("/", (req, res) => {
  res.send("hello from express server");
});

app.listen(port, () => {
  console.log("server is running on http://localhost:3000");
});
