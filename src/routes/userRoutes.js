import express from "express";
import * as User from "../services/userServices.js";

const userRoutes = express.Router();

userRoutes.get("/",User.validateToken, User.getAllUserData);
userRoutes.post("/", User.insertUserData);
userRoutes.put("/:id", User.validateToken,User.updateUserData);
userRoutes.delete("/:id",User.validateToken, User.deleteUserData);
userRoutes.get("/:user_id", User.getUserById);


export default userRoutes;
