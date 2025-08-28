import express from "express";
import { UserResponse } from "../Controller/UserResponse.controller.js";

const Router = express.Router();
Router.post("/message", UserResponse);
export default Router;
