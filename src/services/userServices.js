import * as User from "../repositories/user.js";
import {successResponse, errorResponse} from "../utils/response.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const SECRET_ACCESS_TOKEN = 'uk_batch_9';
const SECRET_REFRESH_TOKEN = 'backend';

export const insertUserData = async (req, res, next) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let saltRound = 10;

       const [result] = await User.checkEmailUser(email);
        
       //validasi
        if (name == "" && email == "" && password == ""){
            errorResponse(res, "nama harus diisi");
        }
        else if (result.length > 0){
            const user = result[0];
            if (email == user.email){
                successResponse(res, "email sudah terdaftar, ubah email!");
            }
        }
        else{
            bcrypt.hash(password, saltRound, async(err, hash) => {
                const [result] = await User.createUser(name, email,hash);
                successResponse(res, "data berhasil ditambahkan", {user_id: result.insertId}, 201);
            })
        } 
    } catch (error) {
        next(error);
    }
}

export const getAllUserData  = async (req, res, next) => {
    try {
        const [result] = await User.getUser(100);
        
        successResponse(res, "success", result);
    } catch (error) {
        next(error);
    }
}

export const updateUserData = async (req, res, next) => {

    try {
        let id = req.params.id;
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        const [result] = await User.updateUser(name, email, password,id);

        successResponse(res, "data berhasil di update!", result[0])
    } catch (error) {
        next(error);
    }
}

export const deleteUserData = async (req, res, next) => {
    try {
        
        let id = req.params.id;
        const [result] = await User.deleteUser(id);
        successResponse(res, "data berhasil dihapus", result[0]);
    } catch (error) {
        next(error);
    }
}


export const auhtUser = async (req, res, next) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        const [result] = await User.checkEmailUser(email);

        if(result.length > 0){
            const user = result[0];
            bcrypt.compare(password, user.password, (error, result) => {
                if(result){
                    let claims = {
                        id: user.user_id,
                        name: user.name,
                        email: user.email,
                    }
                    let accessToken = jwt.sign(claims, SECRET_ACCESS_TOKEN, {expiresIn:"15m"});
                    let refreshToken = jwt.sign(claims, SECRET_REFRESH_TOKEN, {expiresIn: "30m"});
                    let data = {
                        access_token: accessToken,
                        refresh_token: refreshToken,
                    }

                    successResponse(response, "success", data);
                }else {
                    errorResp(response, "invalid email or password", 401);
                }
            });   
        }else{
            errorResp(response, "invalid email or password", 401);    
        }
    } catch (error) {
        next(error);
    }
}

