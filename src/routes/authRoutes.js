import express from "express";
import * as UserService from "../services/userServices.js";

const authRoutes = express.Router();

authRoutes.post('/', UserService.authUser);

export default authRoutes;