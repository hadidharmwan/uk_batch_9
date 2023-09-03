import express from "express";
import * as User from "../services/userServices.js";

const userRoutes = express.Router();

userRoutes.get("/", User.getAllUserData);
userRoutes.post("/", User.insertUserData);
userRoutes.post("/:user_id", User.updateUserData);
userRoutes.delete("/:id", User.deleteUserData);
userRoutes.get("/email", User.checkEmail);


export default userRoutes;
