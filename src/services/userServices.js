import * as User from "../repositories/user.js";
import {successResponse, errorResponse} from "../utils/response.js";

export const insertUserData = async (req, res, next) => {

    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;

       let tawa = await User.checkEmailUser(email);
        if (name == "" && email == "" && password == ""){
            errorResponse(res, "nama harus diisi");
        }
        // else if (email == tawa){
        //     errorResponse(res, "email sudah terdaftar, ubah email ");

        // }
        else{
            const [result] = await User.createUser(name, email, password);
            successResponse(res, "data berhasil ditambahkan", {user_id: result.insertId}, 201);
        }
        console.log(tawa[email]);
        
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
        const [result] = await User.updateUser(id, name, email, password);

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

export const checkEmail = async (req, res, next) => {


        try {
            let email = req.body.email;
            const emailCheck = await User.checkEmailUser(email);
          successResponse(res, "Tampilkan", emailCheck.data[0],200);

        } catch (error) {
            next(error)
        }
      
        
    
}

